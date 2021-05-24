/* eslint-disable no-fallthrough */
/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable func-names */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/extensions */
import * as d3 from 'd3'
import { select } from 'd3-selection'
import React, { useEffect, useContext, useRef } from 'react'
import {
  prepNumToStr,
  formulaMapping,
  generateUUID,
  checkPiecewiseFunction,
  calculateYChange,
  pointsToCoeff,
  convertFromZapToWeiZap,
  convertFromWeiZapToZap,
} from 'utils/providerCurveUtil.js'
// eslint-disable-next-line import/no-cycle
import { BondingCurveContext } from 'components/ProviderCurveWizard/contexts/BondingCurveWizardProvider'
import { TokenWizardContext } from 'views/TokenWizard/contexts/TokenWizardProvider'
import CurveSVG from './CurveSVG'

// import {
//   convertFromZapToWeiZap,
//   convertFromWeiZapToZap,
// } from "src/utils/zapConversion.ts";

type Props = {
  props: any
  _parentWidth: any
  _parentHeight: any
}

const ProviderCurveSvg: React.FC<Props> = ({ props, _parentWidth, _parentHeight }) => {
  // if (window.innerHeight !==) {
  //   document.getElementByID('svg').remove()
  //   d3.selectAll('#svg').remove();
  //   redraw();
  // }
  // // const redraw = {.....}
  // const theme = useTheme();
  // const classes = useStyles(theme);

  const { editable, bonded, bondedDots, bonding, axesOptions, zoomFit = 1 } = props
  /* Firefox's extension loader that creates additional margin */
  // const ffEdit = typeof InstallTrigger !== 'undefined' ? 30 : 0
  let svgCreationTranslateFactor

  const tokenContext = useContext(TokenWizardContext)

  let maxXAxis = tokenContext.xAxis ? tokenContext.xAxis : null
  let maxYAxis = tokenContext.yAxis ? tokenContext.yAxis : null

  /* Event Listeners for text fields for X and Y Axis Maximums */
  d3.selectAll('#maxXAxis').on('change', () => axisChange('maxXAxis'))
  d3.selectAll('#maxYAxis').on('change', () => axisChange('maxYAxis'))

  /* Percentage screen scale factor with rounded parentWidth and parent Height
    to nearest tens - decimals create issue for bounds comparison
  */
  const screenScaleFactor = 0.1
  const widthRounded = Math.round(_parentWidth / 10) * 10
  const heightRounded = Math.round(_parentHeight / 10) * 10
  const parentWidth = !bonded ? widthRounded * (8 / 10) : widthRounded * (8 / 10)
  const parentHeight = !bonded ? heightRounded * (8 / 10) : heightRounded * (8 / 10)
  const coefficientArrayInput = document.getElementById('coefficientArrayInput') as HTMLInputElement
  const curveFormulaInput = document.getElementById('curveFormulaInput') as HTMLInputElement

  let xAxisLabel = ''
  // eslint-disable-next-line no-unused-expressions
  if (props) {
    // eslint-disable-next-line no-unused-expressions
    props.tokenSymbol && props.tokenSymbol !== '' ? (xAxisLabel = props.tokenSymbol) : (xAxisLabel = 'Dots')
  } else {
    xAxisLabel = 'Dots'
  }

  const { existingCoefficientArray } = props

  // eslint-disable-next-line no-debugger
  // debugger

  /* Generate a map for coefficient array(s) */
  const [coeffPiecewiseMap, coeffPiecewiseMapLength] = checkPiecewiseFunction(existingCoefficientArray)

  let pieceIndex = 0
  let offsetPointsMap = {}

  /* References current svg */
  const uniqueId = useRef()

  /* Generate unique id's for each element to prevent collisions with multiple svgs on the same page */
  const randomId = generateUUID()
  const xID = `xAxis${randomId}`
  const yID = `yAxis${randomId}`
  const axisTextID = `axisText${randomId}`
  const pathID = `path${randomId}`
  const areaID = `pathArea${randomId}`
  const nonBondedAreaID = `nonBondedPathArea${randomId}`
  const linearID = `linear-gradient${randomId}`
  const nonBondedLinearID = `nonBonded-linear-gradient${randomId}`
  const controlID = `controlPoints${randomId}`

  let {
    // eslint-disable-next-line prefer-const
    margin,
    width,
    height,
    pointsOriginal,
    points,
    coefficientArray,
    // eslint-disable-next-line prefer-const
    k,
    numActivePoints,
    initialCoefficientArrayInput,
    // eslint-disable-next-line prefer-const
    previousNumActivePoints,
    // eslint-disable-next-line prefer-const
    addCurveButtonDragging,
    freezeGraph,
    axesInitialized,
    inputChanging,
    // eslint-disable-next-line no-unused-vars
    clickedCoordinates,
    // eslint-disable-next-line no-unused-vars
    pointsPreview,
    // eslint-disable-next-line prefer-const
    curveTracingCircleRadius,
    dotSupplyScale,
    zapCostScale,
    zoomFitScaleX,
    zoomFitScaleY,
    // eslint-disable-next-line prefer-const
    bondingCurveActions,
    // formulaValue,
  } = useContext(BondingCurveContext)

  const handleWidth = (value) => {
    width = value
    bondingCurveActions.setValue('width', value)
    // dispatch({ key:"width", value });
  }
  const handleHeight = (value) => {
    height = value
    bondingCurveActions.setValue('height', value)
  }
  const handlePointsOriginal = (value) => {
    pointsOriginal = value
    bondingCurveActions.setValue('pointsOriginal', value)
  }
  const handlePoints = (value) => {
    points = value
    bondingCurveActions.setValue('points', value)
  }
  const handleCoefficientArray = (value) => {
    coefficientArray = value
    bondingCurveActions.setValue('coefficientArray', value)
  }
  // eslint-disable-next-line no-unused-vars
  const handleNumActivePoints = (value) => {
    numActivePoints = value
    bondingCurveActions.setValue('numActivePoints', value)
  }
  const handleInitialCoefficientArrayInput = (value) => {
    initialCoefficientArrayInput = value
    bondingCurveActions.setValue('initialCoefficientArrayInput', value)
  }
  // eslint-disable-next-line no-unused-vars
  // const handlePreviousNumActivePoints = (value) => {
  //   previousNumActivePoints = value;
  //   bondingCurveActions.setValue("previousNumActivePoints", value)
  // };
  // const handlePreviewCurveOn = (value) => {
  //   previewCurveOn = value;
  //   bondingCurveActions.setValue("previewCurveOn", value)
  // };
  // // eslint-disable-next-line no-unused-vars
  // const handleMousePositionX = (value) => {
  //   mousePositionX = value;
  //   bondingCurveActions.setValue("mousePositionX", value)
  // };
  const handleFreezeGraph = (value) => {
    freezeGraph = value
    bondingCurveActions.setValue('freezeGraph', value)
  }
  const handleAxesInitialized = (value) => {
    axesInitialized = value
    bondingCurveActions.setValue('axesInitialized', value)
  }
  const handleInputChanging = (value) => {
    inputChanging = value
    bondingCurveActions.setValue('inputChanging', value)
  }
  const handleClickedCoordinates = (value) => {
    clickedCoordinates = value
    bondingCurveActions.setValue('clickedCoordinates', value)
  }
  const handlePointsPreview = (value) => {
    pointsPreview = value
    bondingCurveActions.setValue('pointsPreview', value)
  }
  const handleDotSupplyScale = (value) => {
    dotSupplyScale = value
    bondingCurveActions.setValue('dotSupplyScale', value)
  }
  const handleZapCostScale = (value) => {
    zapCostScale = value
    bondingCurveActions.setValue('zapCostScale', value)
  }
  const handleZoomFitScaleX = (value) => {
    zoomFitScaleX = value
    bondingCurveActions.setValue('zoomFitScaleX', value)
  }
  const handleZoomFitScaleY = (value) => {
    zoomFitScaleY = value
    bondingCurveActions.setValue('zoomFitScaleY', value)
  }

  /* Calculate y-maximum across all coefficient arrays of piecewise function */
  let yMax = 0
  const _coeffPiecewiseMap = {}
  let prevXLimit = 0
  let yStart = 0
  let currYMax = 0

  let maxSupply = null
  let maxReserve = null
  let _maxReserve = null
  let node
  let bondedDotsConverted = null

  /* Either receive maxSupply and maxReserve through input fields (creation wizard) 
  or calculate from existingCoefficientArray (thumbnail) */
  if (editable) {
    maxSupply = maxXAxis
    _maxReserve = maxYAxis
    maxReserve = 1
  }

  let xScale
  let yScale
  let _yScale
  let linearGradient
  let nonBondedLinearGradient
  let svg
  let curveTypes
  let lineGenerator
  let _height
  let _zapCostScale
  // eslint-disable-next-line no-unused-vars
  let _zoomFitScaleY = null
  /* Set curve type to be curvebasis */

  /* Always runs only once to set up the svg and curve */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const initializeBondingCurveCanvas = (_node) => {
    Object.values(coeffPiecewiseMap).forEach((_coefficientArray, index) => {
      if (index > 0) {
        const prevCoefficientArray = coeffPiecewiseMap[index - 1]
        prevXLimit = prevCoefficientArray[prevCoefficientArray.length - 1]
      }
      const convertedCoefficientArray = convertFromWeiZapToZap(coeffPiecewiseMap[index])
      // currYMax = calculateMaximumOfFunction(convertedCoefficientArray, prevXLimit, index) + yStart;

      /* Calculate yMax of control point, not curve */
      const convertedControlPoints: any = calculatePointsArray(convertedCoefficientArray, prevXLimit)
      const YValueOfControlPoints = []
      convertedControlPoints.filter((ele) => YValueOfControlPoints.push(Math.abs(ele[1])))
      currYMax = Math.max.apply(null, YValueOfControlPoints) + yStart
      yStart = calculateYChange(convertedCoefficientArray, prevXLimit) + yStart
      if (currYMax > yMax) yMax = currYMax
    })
    /* Loop through to divide all y values by yMax to set y axis maximum to 1
      - optimizes for calculations and gradient */
    // eslint-disable-next-line @typescript-eslint/no-shadow
    for (const [index, coefficientArray] of Object.entries(coeffPiecewiseMap)) {
      const _existingCoefficientArray = convertFromWeiZapToZap(
        coefficientArray,
        // eslint-disable-next-line no-loop-func
      ).map((ele, i) => {
        if (!editable) {
          if ([0, coefficientArray.length - 1].includes(i) || yMax === 0) {
            return ele
          }
          return ele / yMax
        }
        if ([0, coefficientArray.length - 1].includes(i) || maxYAxis === 0) {
          return ele
        }
        return ele / maxYAxis
      })
      // console.log("_existingCoefficientArray", _existingCoefficientArray);
      _coeffPiecewiseMap[index] = _existingCoefficientArray
    }
    if (!editable) {
      const coeffArrays: any[] = Object.values(_coeffPiecewiseMap)
      const lastOfCoeffArrays = coeffArrays[coeffArrays.length - 1]
      const xMaximum = lastOfCoeffArrays[lastOfCoeffArrays.length - 1]
      maxSupply = xMaximum * zoomFit
      _maxReserve = yMax
      maxReserve = 1
    }

    handleWidth(parentWidth)
    handleHeight(parentHeight)
    _height = parentHeight
    // document.getElementById("svg").clientHeight - margin.top - margin.bottom;
    /* maxSupply and maxReserve already calculated above across entire piecewise function */
    handleDotSupplyScale(maxSupply / width)
    handleZapCostScale(maxReserve / height)
    _zapCostScale = _maxReserve / _height
    handleWidth(width * dotSupplyScale)
    handleHeight(height * zapCostScale)
    _height *= _zapCostScale

    /* Set up scale functions */
    xScale = d3
      .scaleLinear()
      .domain([0, width / zoomFitScaleX])
      .range([0, width / dotSupplyScale / zoomFitScaleX])

    /* yScale used for graph scaled to a max of 1 to avoid large number calculations
        _yScale used for yAxis ticks only to re-represent the correct scale */
    yScale = d3
      .scaleLinear()
      .domain([0, height / zoomFitScaleY])
      // .range([height, height - height / zapCostScale / zoomFitScaleY]);
      .range([height, height - height / zapCostScale / zoomFitScaleY])
    let _ratio

    if (!bonded) {
      _ratio = _maxReserve / parentHeight
    } else {
      _ratio = yMax / parentHeight
    }
    if (!editable && zoomFit) {
      _zoomFitScaleY = _height / _zapCostScale / yMax / zoomFit
    } else {
      _zoomFitScaleY = 1
    }

    _yScale = d3
      .scaleLinear()
      .domain([0, (_height / _zapCostScale) * zoomFit * _ratio]) // 900 => 600, 1200 => 800
      .range([0, ((-1 * _height) / _zapCostScale) * zoomFit])

    /* Set attributes of svg object */
    const widthAdjustByLabel = !bonded
      ? (width / dotSupplyScale) * (10 / 8) /* + margin.left * 2 + margin.right * 2 */
      : (width / dotSupplyScale) * (10 / 8) /* + margin.left * 2 + margin.right * 2 */
    const heightAdjustByLabel = !bonded
      ? (height / zapCostScale) * (10 / 8) /* + margin.bottom */
      : (height / zapCostScale) * (10 / 8) /* margin.bottom */

    svg = select(uniqueId.current).style('width', widthAdjustByLabel).style('height', heightAdjustByLabel).append('g')

    curveTypes = [
      {
        name: 'curveBasis',
        curve: d3.curveBasis,
        lineString: '',
        clear: true,
      },
    ]
    lineGenerator = d3.line()
    // linearGradient = svg
    //   .append("defs")
    //   .append("linearGradient")
    //   .attr("id", linearID);
  }
  const initializeBondingCurve = (_node, index) => {
    let previousXLimit = margin.left
    let previousYLimit = margin.bottom
    let pointsArray
    offsetPointsMap = {}
    Object.values(_coeffPiecewiseMap).forEach((coeffArray, indexCoeffArray) => {
      /* Each subsequent piecewise function curve needs to have their xLimit offset in the calculatePointsArray function */
      if (indexCoeffArray !== 0) {
        const previousCoeffArray = _coeffPiecewiseMap[indexCoeffArray - 1]
        const previousXLimitOfCoeffArray = previousCoeffArray[previousCoeffArray.length - 1]
        pointsArray = calculatePointsArray(coeffArray, previousXLimitOfCoeffArray)
      } else {
        pointsArray = calculatePointsArray(coeffArray)
      }

      if (!offsetPointsMap[indexCoeffArray]) offsetPointsMap[indexCoeffArray] = []
      pointsArray.forEach((coordinate, indexControlPointArray) => {
        const originOffset = pointsArray[0]
        if (indexCoeffArray === 0) {
          offsetPointsMap[indexCoeffArray].push(coordinate)
          // } else if (indexCoeffArray !== 0 && indexCoordinate !== 0) {
        } else if (indexControlPointArray === 0) {
          offsetPointsMap[indexCoeffArray].push([previousXLimit, previousYLimit])
        } else {
          offsetPointsMap[indexCoeffArray].push([
            coordinate[0] + previousXLimit - originOffset[0],
            coordinate[1] + previousYLimit - originOffset[1],
          ])
        }
      })
      // tempPoints = tempPoints.concat(offsetPointsArray);
      const currControlPointArray = offsetPointsMap[indexCoeffArray]
      previousXLimit = currControlPointArray[currControlPointArray.length - 1][0]
      previousYLimit = currControlPointArray[currControlPointArray.length - 1][1]
    })
    handlePoints(offsetPointsMap[index])
    handlePointsOriginal(convertToOriginalPoints(offsetPointsMap[index]))
    handleNumActivePoints(offsetPointsMap[index].length - k)
    getCoefficients()
    // handlePoints(calculatePointsArray(coefficientArray));
    // handlePointsOriginal(convertToOriginalPoints(points));
    // handleNumActivePoints(points.length - k);
    // getCoefficients();
  }

  /* Aggregate update function */
  function update(pointsArray) {
    // eslint-disable-next-line no-debugger
    // debugger
    updateLines(pointsArray)
    updateCurveArea(pointsArray)
    if (!axesInitialized) updateAxes()
    updateControlPoints(pointsArray)
    getCoefficients()
    if (tokenContext.tokenWizardActions.handleDragCurve)
      tokenContext.tokenWizardActions.handleDragCurve(convertFromZapToWeiZap(coefficientArray))
  }

  function updateLines(pointsArray) {
    if (!pointsArray) return
    curveTypes.forEach(function (d) {
      // if (!d.active) return;
      lineGenerator.curve(d.curve)
      if (!editable) {
        d.lineString += lineGenerator(pointsArray.slice(k, numActivePoints))
      } else {
        d.lineString = lineGenerator(pointsArray.slice(k, numActivePoints))
        d.lineString = lineGenerator(pointsArray.slice(k, numActivePoints))
      }
    })

    if (pieceIndex + 1 === coeffPiecewiseMapLength) {
      const u = d3.selectAll(`#${pathID}`).data(curveTypes)
      u.enter()
        .append('path')
        .merge(u)
        .style('stroke', 'function(d, i) { return colorScale(i); }')
        .attr('d', function (d) {
          return d.lineString
        })
      u.exit().remove()
    }
  }

  function updateCurveArea(pointsArray) {
    if (pieceIndex + 1 !== coeffPiecewiseMapLength) return
    d3.selectAll(`#${areaID}, #area-gradient`).remove()
    const area = d3
      .area()
      .x(function (d) {
        return xScale(d.dots * dotSupplyScale)
      })
      .y0(height + margin.bottom)
      .y1(function (d) {
        return yScale(d.zap * zapCostScale)
      })
    const curveDataAdjusted = []
    const nonBondedCurveDataAdjusted = []
    const v = select(uniqueId.current).select(`#${pathID}`)
    const pathEl = v.node()
    let i = 0
    let pos = pathEl.getPointAtLength(i)
    const maxXPiece: number = _coeffPiecewiseMap[pieceIndex][_coeffPiecewiseMap[pieceIndex].length - 1] // 10K
    const increment = 0.01 * (maxXPiece / dotSupplyScale + margin.left)
    // if (undisplayedDots - maxXPiece < 0) {
    //   increment = 0.01 * (undisplayedDots / dotSupplyScale + margin.left);
    // }

    if (!bonded) {
      while (pos.x <= pointsArray[pointsArray.length - 1][0]) {
        pos = pathEl.getPointAtLength(i)
        if (pos.x === pathEl.getPointAtLength(i - 1).x && i !== 0) break
        curveDataAdjusted.push({ dots: pos.x, zap: height - pos.y })
        i += increment
      }
      if (coeffPiecewiseMapLength === 1) {
        pos = pathEl.getPointAtLength(i)
        if (coeffPiecewiseMapLength === 1) {
          pos = pathEl.getPointAtLength(i)
          curveDataAdjusted.push({ dots: pos.x, zap: height - pos.y })
        }
      }
    } else {
      /* Bonded area gradient data */
      while ((pos.x - margin.left) * dotSupplyScale <= bondedDots && i <= bondedDots /* && pos.x <= mousePositionX */) {
        pos = pathEl.getPointAtLength(i)
        if (pos.x === pathEl.getPointAtLength(i - 1).x && i !== 0) break
        curveDataAdjusted.push({ dots: pos.x, zap: height - pos.y })
        i += increment
      }
      bondedDotsConverted = i - increment

      /* Close the gap between gradients */
      if (coeffPiecewiseMapLength !== 1) i -= increment
      /* Non bonded area gradient data */
      while (i >= 0) {
        pos = pathEl.getPointAtLength(i)
        if (pos.x === pathEl.getPointAtLength(i - 1).x && i !== 0) break
        nonBondedCurveDataAdjusted.push({ dots: pos.x, zap: height - pos.y })
        i += increment
      }
    }

    curveDataAdjusted.forEach(function (d) {
      d.dots = +d.dots
      d.zap = +d.zap
    })
    nonBondedCurveDataAdjusted.forEach(function (d) {
      d.dots = +d.dots
      d.zap = +d.zap
    })
    // let decrement = (pos.x - margin.left) * dotSupplyScale;

    // undisplayedDots = Math.round(undisplayedDots - decrement);
    // undisplayedDots = undisplayedDots - maxXPiece;
    /* Vertical gradient */
    linearGradient.attr('x1', '0%').attr('y1', '100%').attr('x2', '0%').attr('y2', '0%')
    // .attr("spreadMethod", "reflect"); // for performance

    linearGradient
      .append('stop')
      .attr('class', 'start')
      .attr('offset', '0%')
      .attr('stop-color', 'white') // light blue
      .attr('stop-opacity', 0)

    linearGradient
      .append('stop')
      .attr('class', 'end')
      .attr('offset', '100%')
      .attr('stop-color', '#61CFFF') // dark blue
      .attr('stop-opacity', 1)

    nonBondedLinearGradient.attr('x1', '0%').attr('y1', '100%').attr('x2', '0%').attr('y2', '0%')

    nonBondedLinearGradient
      .append('stop')
      .attr('class', 'start')
      .attr('offset', '0%')
      .attr('stop-color', '#3c424f') // dark grey
      .attr('stop-opacity', 0)

    nonBondedLinearGradient
      .append('stop')
      .attr('class', 'end')
      .attr('offset', '100%')
      .attr('stop-color', '#282C34') // darker grey
      .attr('stop-opacity', 1)

    svg
      .append('path')
      .data([curveDataAdjusted])
      .attr('class', 'areaPath')
      .attr('id', areaID)
      .attr('d', area)
      .style('fill', `url(#${linearID})`)

    svg
      .append('path')
      .data([nonBondedCurveDataAdjusted])
      .attr('class', 'areaPath')
      .attr('id', nonBondedAreaID)
      .attr('d', area)
      .style('fill', `url(#${nonBondedLinearID})`)

    /* Redraw curve path to place on top */
    d3.select(`#${pathID}`).remove()
    svg.append('path').attr('class', 'path').attr('id', pathID)

    const u = d3.selectAll(`#${pathID}`).data(curveTypes)
    u.enter()
      .append('path')
      .merge(u)
      .style('stroke', 'function(d, i) { return colorScale(i); }')
      .attr('d', function (d) {
        return d.lineString
      })
    u.exit().remove()
  }

  function updateControlPoints(pointsArray) {
    if (!editable) return
    /* Remove existing CPs so new  ones redrawn on top */
    d3.selectAll(`#${controlID}`).remove()
    const u = d3.select(uniqueId.current).select('g').selectAll('.controlPoint').data(pointsArray.slice(k, numActivePoints))
    u.enter()
      .append('circle')
      .attr('r', 4)
      .attr('class', 'controlPoint')
      .attr('id', controlID)
      .call(d3.drag().on('drag', dragControlPoint))
      .merge(u)
      .attr('cx', function (d) {
        return d[0]
      })
      .attr('cy', function (d) {
        return d[1]
      })

    u.exit().remove()
  }

  //* Drag control points and correction calculation *//
  function dragControlPoint(_d, i) {
    // d3.select("#curveTracingCircle").attr("display", "none");
    // drawPreviewCurve((pointsPreview));
    correctControlPoints(points, i)
    update(points)
  }

  function updateAxes() {
    handleAxesInitialized(true)
    d3.selectAll(`#${xID}, #${yID}, #${axisTextID}`).remove()
    // let xLimit = Number(coefficientArray[coefficientArray.length - 1]);
    // let yLimit = _maxReserve;
    // let xFormat = "", yFormat = "";

    // switch (true) {
    //   case xLimit <= 100000:
    //     xFormat = "";
    //     break;
    //   case xLimit <= 1000000:
    //     xFormat = "~e";
    //     break;
    //   default:
    //     xFormat = " ~e";
    //     xFormat = "";
    // }

    // switch (true) {
    //   case editable:
    //     yFormat = yLimit >= 100000 || yLimit <= 0.001 ? "0~e" : "";
    //     break;
    //   case yLimit <= 0.001:
    //     yFormat = " ~e";
    //     break;
    //   case yLimit <= 100000:
    //     yFormat = "";
    //     break;
    //   default:
    //     yFormat = " ~e";
    //     yFormat = "";
    // }
    /* Set up axes */
    const xAxis = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${height + margin.bottom})`)
      .attr('class', 'xAxis')
      .attr('id', xID)

    xAxis.transition().duration(1000).call(
      d3
        .axisBottom()
        .scale(xScale)
        .ticks(axesOptions.xAxisTicks)
        // .tickSizeOuter(0)
        // .tickSizeInner(0)
        .tickSize(axesOptions.tickSize)
        // .tickFormat(d3.format(xFormat))
        .tickFormat(''),
    )

    const yAxis = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.bottom})`)
      .attr('id', yID)
      .attr('class', 'yAxis')
    yAxis.transition().duration(1000).call(
      d3
        .axisLeft()
        .scale(_yScale)
        .ticks(axesOptions.yAxisTicks)
        // .tickSizeOuter(0)
        // .tickSizeInner(0)
        .tickSize(axesOptions.tickSize)
        // .tickFormat(d3.format(yFormat))
        .tickFormat(''),
    )

    if (axesOptions.showLabels) {
      // x-axis label
      const widthTransform = parentWidth / 2
      svg
        .append('text')
        .attr('text-anchor', 'middle')
        .attr('transform', `translate(${widthTransform},${(screenScaleFactor / 1.3) * parentHeight})`)
        .text(`Supply (${xAxisLabel})`)
        .attr('class', 'axisText')
        .attr('id', axisTextID)

      // y-axis label
      const heightTransform = (-1 * parentHeight) / 2
      svg
        .append('text')
        .attr('text-anchor', 'middle')
        .attr('transform', `translate(${((-1 * screenScaleFactor) / 2) * parentWidth},${heightTransform})rotate(-90)`)
        .text('Reserve (Zap)')
        .attr('class', 'axisText')
        .attr('id', axisTextID)
    }
  }
  function correctControlPoints(points, i) {
    const d3 = require('d3')
    /* Logic for preventing update of control points when module in non-editable mode */
    if (!editable) return

    const dragArea = select(uniqueId.current).node()
    const pos = d3.mouse(dragArea)
    // points[k + i][0] = pos[0] - margin.left * 2;
    // points[k + i][1] = pos[1] - margin.bottom + height - height / zapCostScale;
    points[k + i][0] = pos[0] - svgCreationTranslateFactor[0]
    points[k + i][1] = pos[1] - svgCreationTranslateFactor[1]
    handlePoints(points)
    handlePointsOriginal(convertToOriginalPoints(points))

    const lastXLimit = points[k][0] - margin.left
    // X-axis bound logic
    if (i === 3) {
      points[k + 1][0] = Math.floor(
        Math.max(
          Math.min((d3.event.x - points[k][0]) / 3 + margin.left, width / dotSupplyScale / 3 + margin.left),
          Math.min(d3.event.x / 3, margin.left),
          margin.left + 1,
        ),
      )

      points[k + 2][0] = Math.floor(
        Math.max(
          Math.min((d3.event.x - points[k][0]) / 1.5 + margin.left, (width / dotSupplyScale / 3) * 2 + margin.left),
          Math.min((d3.event.x / 3) * 2 + margin.left, margin.left),
          margin.left + 2,
        ),
      )
      if (points[k + 3][0] > width / dotSupplyScale + margin.left)
        points[k + 3][0] = Math.floor(width / dotSupplyScale + margin.left)
      if (points[k + 3][0] < margin.left) points[k + 3][0] = Math.ceil(margin.left) + 3
      handlePoints(points)
      handlePointsOriginal(convertToOriginalPoints(points))
    }
    if (i === 2) {
      if (numActivePoints === 3) {
        points[k + 1][0] = Math.floor(
          Math.max(
            Math.min((d3.event.x - points[k][0]) / 2 + margin.left, (width / dotSupplyScale + margin.left) / 2),
            Math.min((width / dotSupplyScale + margin.left) / 2, margin.left),
            margin.left + 1,
          ),
        )
        if (points[k + 2][0] > width / dotSupplyScale + margin.left)
          points[k + 2][0] = Math.floor(width / dotSupplyScale + margin.left)
        if (points[k + 2][0] < margin.left) points[2][0] = Math.ceil(margin.left) + 2
        handlePoints(points)
        handlePointsOriginal(convertToOriginalPoints(points))
      } else if (numActivePoints === 4) {
        points[k + 1][0] = Math.floor(
          Math.max(
            Math.min((d3.event.x - points[k][0]) / 2 + margin.left, (width / dotSupplyScale + margin.left) / 3),
            points[k + 3][0] / 3,
            margin.left + 1,
          ),
        )
        points[k + 3][0] = Math.floor(
          Math.max(
            Math.min((d3.event.x - points[k][0]) * 1.5 + margin.left, width / dotSupplyScale + margin.left),
            // Math.min((points[k + 2][0] / 2) * 3 + margin.left, margin.left),
            margin.left + 3,
          ),
        )
        if (points[k + 2][0] > ((width / dotSupplyScale + margin.left) / 3) * 2)
          points[k + 2][0] = Math.floor(((width / dotSupplyScale + margin.left) / 3) * 2)
        if (points[k + 2][0] < margin.left) points[k + 2][0] = Math.ceil(margin.left) + 2
        handlePoints(points)
        handlePointsOriginal(convertToOriginalPoints(points))
      }
    }
    if (i === 1) {
      if (numActivePoints === 2) {
        if (points[k + 1][0] > width / dotSupplyScale + margin.left)
          points[k + 1][0] = Math.floor(width / dotSupplyScale + margin.left)
        if (points[k + 1][0] < margin.left) points[k + 1][0] = Math.ceil(margin.left) + 1
        handlePoints(points)
        handlePointsOriginal(convertToOriginalPoints(points))
      } else if (numActivePoints === 3) {
        points[k + 2][0] = Math.floor(
          Math.max(
            Math.min(2 * (d3.event.x - points[k][0]) + margin.left, width / dotSupplyScale + margin.left),
            margin.left + 2,
          ),
        )
        if (points[k + 1][0] > (width / dotSupplyScale + margin.left) / 2)
          points[k + 1][0] = Math.floor(width / dotSupplyScale / 2 + margin.left)
        if (points[k + 1][0] < margin.left) points[k + 1][0] = Math.ceil(margin.left) + 1
        handlePoints(points)
        handlePointsOriginal(convertToOriginalPoints(points))
      } else if (numActivePoints === 4) {
        // only edited this section
        points[k + 2][0] = Math.floor(
          Math.max(
            Math.min(
              (d3.event.x - points[k][0]) * 2 + margin.left,
              ((width / dotSupplyScale - lastXLimit) / 3) * 2 + margin.left,
            ),
            // ((points[k + 3][0] - lastXLimit) / 3) * 2,
            // Math.min((d3.event.x) * 2 + margin.left, margin.left),
            margin.left + 2,
          ),
        )
        points[k + 3][0] = Math.floor(
          Math.max(
            Math.min((d3.event.x - points[k][0]) * 3 + margin.left, width / dotSupplyScale + margin.left - lastXLimit),
            // Math.min(((points[k + 2][0] - lastXLimit) / 2) * 3 + margin.left, margin.left),
            margin.left + 3,
          ),
        )
        if (points[k + 1][0] > lastXLimit + (width / dotSupplyScale - lastXLimit) / 3 + margin.left)
          points[k + 1][0] = Math.floor(lastXLimit + (width / dotSupplyScale - lastXLimit) / 3 + margin.left)
        if (points[k + 1][0] < Math.max(margin.left, lastXLimit))
          points[k + 1][0] = Math.ceil(Math.max(margin.left, lastXLimit)) + 1
        handlePoints(points)
        handlePointsOriginal(convertToOriginalPoints(points))
      }
    }
    if (i === 0) {
      points[k][0] = Math.ceil(margin.left)
      handlePoints(points)
      handlePointsOriginal(convertToOriginalPoints(points))
    }
    // Y-axis bound logic
    if (
      points[k + i][1] <
      /* height - height / zapCostScale + margin.bottom */ (height / zapCostScale - margin.bottom) * -1
    ) {
      points[k + i][1] = (height / zapCostScale - margin.bottom) * -1
    }
    if (points[k + i][1] > margin.bottom) {
      // +(height-margin.top)/zapCostScale)
      points[k + i][1] = margin.bottom // +(height-margin.top)/zapCostScale;
    }
    handlePoints(points)
    handlePointsOriginal(convertToOriginalPoints(points))
    getCoefficients()
  }

  function calculatePointsArray(coefficientArray, previousXLimitOfCoeffArray = 0) {
    const calculatedPointsArray = []
    let x0
    let x1
    let x2
    let x3
    let y0
    let y1
    let y2
    let y3
    let _x0
    let _x1
    let _x2
    let _x3
    let _y0
    let _y1
    let _y2
    let _y3
    // let slopeOperator;
    // if (coefficientArray[0] > 2) {
    //   slopeOperator = coefficientArray[2] >= 0 ? 1 : -1;
    // }
    if (coefficientArray[0] === 4) {
      // [4, 0, 0, 0.002962962962962963, -0.0000039506172839506175, 450]
      y0 = coefficientArray[1] // a
      x0 = 0
      x3 = coefficientArray[5] - previousXLimitOfCoeffArray

      x1 = (x3 - x0) / 3 // thirds //x1 = (y1-y0)/b
      x2 = x1 * 2

      y1 = Math.abs(coefficientArray[2] * x1 + y0)
      y2 = Math.abs(3 * coefficientArray[3] * x1 ** 2 - y0 + 2 * y1)
      // y3 = calculateZap(coefficientArray, x3) / zoomFit;
      y3 = Math.abs(coefficientArray[4] * (27 * x1 ** 3) - 3 * y1 + 3 * y2 + y0)
      // let d = (3 * y1 - 3 * y2 + y3 - y0) / (27 * Math.pow(x1, 3));
      ;[_x0, _y0] = convertCoordinatesToAdjusted([x0, y0])
      ;[_x1, _y1] = convertCoordinatesToAdjusted([x1, y1])
      ;[_x2, _y2] = convertCoordinatesToAdjusted([x2, y2])
      ;[_x3, _y3] = convertCoordinatesToAdjusted([x3, y3])
      _y0 = -1 * Math.abs(_y0)
      _y1 = -1 * Math.abs(_y1)
      _y2 = -1 * Math.abs(_y2)
      _y3 = -1 * Math.abs(_y3)
      // _x3 = _x3.toFixed(0);

      let outOfBounds = false
      let inside100 = false

      if (inputChanging) {
        if (
          !(
            Math.floor(_y0) <= 3 &&
            Math.ceil(_y0) >= -1 * parentHeight - 3 &&
            Math.floor(_y1) <= 3 &&
            Math.ceil(_y1) >= -1 * parentHeight - 3 &&
            Math.floor(_y2) <= 3 &&
            Math.ceil(_y2) >= -1 * parentHeight - 3 &&
            Math.floor(_y3) <= 3 &&
            Math.ceil(_y3) >= -1 * parentHeight - 3
          )
        ) {
          outOfBounds = true
        }
        const outsideParentHeight100 = -1 * parentHeight - 100
        /* eslint no-fallthrough: "error" */
        // switch (true) {
        //   case outsideParentHeight100 >= Math.ceil(_y0):
        //     _y0 = -1 * parentHeight
        //     inside100 = true
        //   case outsideParentHeight100 >= Math.ceil(_y1):
        //     _y1 = -1 * parentHeight
        //     inside100 = true
        //   case outsideParentHeight100 >= Math.ceil(_y2):
        //     _y2 = -1 * parentHeight
        //     inside100 = true
        //   case outsideParentHeight100 >= Math.ceil(_y3):
        //     _y3 = -1 * parentHeight
        //     inside100 = true
        // }

        if (outsideParentHeight100 >= Math.ceil(_y0)) {
          _y0 = -1 * parentHeight
          inside100 = true
        }
        if (outsideParentHeight100 >= Math.ceil(_y1)) {
          _y1 = -1 * parentHeight
          inside100 = true
        }
        if (outsideParentHeight100 >= Math.ceil(_y2)) {
          _y2 = -1 * parentHeight
          inside100 = true
        }
        if (outsideParentHeight100 >= Math.ceil(_y3)) {
          _y3 = -1 * parentHeight
          inside100 = true
        }

        if (outOfBounds && !inside100) {
          // console.log('Out of bounds')
          coefficientArrayInput.value = initialCoefficientArrayInput
          handleInputChanging(false)
          return points
        }
      }
      if (coefficientArray[0] > Number(initialCoefficientArrayInput[0])) {
        handleNumActivePoints(numActivePoints + (coefficientArray[0] - Number(initialCoefficientArrayInput[0])))
      } else if (coefficientArray[0] < Number(initialCoefficientArrayInput[0])) {
        handleNumActivePoints(numActivePoints - (Number(initialCoefficientArrayInput[0]) - coefficientArray[0]))
      }

      // handleInitialCoefficientArrayInput("");
      // coefficientArray.forEach((ele, i) => {
      //   if (ele < 0.000001 && ele !== 0) {
      //     if (ele === 0) {
      //       ele = 0;
      //     } else if (ele > 0) {
      //       ele = ele.toFixed(Math.max(-Math.log10(Math.abs(ele)) + 4, 4));
      //     } else if (ele < 0) {
      //       ele =
      //         -1 *
      //         Math.abs(ele).toFixed(
      //           Math.max(-Math.log10(Math.abs(ele)) + 4, 4)
      //         );
      //     }
      //   }
      //   initialCoefficientArrayInput = initialCoefficientArrayInput + ele;
      //   if (i !== coefficientArray.length - 1)
      //     initialCoefficientArrayInput = initialCoefficientArrayInput + ", ";
      //   handleInitialCoefficientArrayInput(initialCoefficientArrayInput);
      // });
      // initialCoefficientArrayInput = coefficientArrayConverted.join(", ");

      calculatedPointsArray.push([_x0, _y0])
      calculatedPointsArray.push([_x1, _y1])
      calculatedPointsArray.push([_x2, _y2])
      calculatedPointsArray.push([_x3, _y3])

      //  console.log(calculatedPointsArray);
      // 0: (2) [20, 260]
      // 1: (2) [170, 260]
      // 2: (2) [320, 60]
      // 3: (2) [470, 20]
      return calculatedPointsArray
    }
    // let a = y0;
    // let b = (y1 - y0) / x1;
    // let c = (-2 * y1 + y2 + y0) / (3 * Math.pow(x1, 2));

    // let d = (3 * y1 - 3 * y2 + y3 - y0) / (27 * Math.pow(x1, 3));

    if (coefficientArray[0] === 3) {
      // [3, 0, 0, 0.0022222222222222222, 300]
      // 3, 0, 0, 1.4000, 353
      y0 = coefficientArray[1] // a //0
      x0 = 0
      x2 = coefficientArray[4] - previousXLimitOfCoeffArray // 353
      x1 = (x2 - x0) / 2 // halfway // x1 = (y1-y0)/b //176.5
      y1 = Math.abs(coefficientArray[2] * x1 + y0) // b*x1+y0 = y1 //0
      // y2 = calculateZap(coefficientArray, x2);
      y2 = Math.abs(coefficientArray[3] * (4 * x1 ** 2) - y0 + 2 * y1)
      // let b = (y0 - y1) / x1;
      //  let c = (y0 + 2 * y1 + y2) / (4 * Math.pow(x1, 2));
      ;[_x0, _y0] = convertCoordinatesToAdjusted([x0, y0])
      ;[_x1, _y1] = convertCoordinatesToAdjusted([x1, y1])
      ;[_x2, _y2] = convertCoordinatesToAdjusted([x2, y2])
      _y0 = -1 * Math.abs(_y0)
      _y1 = -1 * Math.abs(_y1)
      _y2 = -1 * Math.abs(_y2)
      // _x2 = _x2.toFixed(0);
      // console.log("_y2",_y2)
      // _y2 = _y2 - margin.top;
      // console.log("_y2",_y2)
      if (inputChanging) {
        if (
          !(
            Math.floor(_y0) <= 3 &&
            Math.ceil(_y0) >= -1 * parentHeight - 3 &&
            Math.floor(_y1) <= 3 &&
            Math.ceil(_y1) >= -1 * parentHeight - 3 &&
            Math.floor(_y2) <= 3 &&
            Math.ceil(_y2) >= -1 * parentHeight - 3
          )
        ) {
          console.log('Out of bounds')
          coefficientArrayInput.value = initialCoefficientArrayInput
          handleInputChanging(false)
          return points
        }
      }
      if (coefficientArray[0] > Number(initialCoefficientArrayInput[0])) {
        handleNumActivePoints(numActivePoints + (coefficientArray[0] - Number(initialCoefficientArrayInput[0])))
      } else if (coefficientArray[0] < Number(initialCoefficientArrayInput[0])) {
        handleNumActivePoints(numActivePoints - (Number(initialCoefficientArrayInput[0]) - coefficientArray[0]))
      }
      calculatedPointsArray.push([_x0, _y0])
      calculatedPointsArray.push([_x1, _y1])
      calculatedPointsArray.push([_x2, _y2])
      //  console.log(calculatedPointsArray);
      // 0: (2) [20, 260]
      // 1: (2) [170, 260]
      // 2: (2) [320, 60]
      return calculatedPointsArray
    }
    // let a = y0;
    // let b = (y1 - y0) / x1;
    // let c = (y0 - 2 * y1 + y2) / (4 * Math.pow(x1, 2));

    if (coefficientArray[0] === 2) {
      // [2, 0, 0.9090909090909091, 110]
      y0 = coefficientArray[1] // a
      x0 = 0
      x1 = coefficientArray[3] - previousXLimitOfCoeffArray
      y1 = Math.abs(coefficientArray[2] * x1 + y0)
      ;[_x0, _y0] = convertCoordinatesToAdjusted([x0, y0])
      ;[_x1, _y1] = convertCoordinatesToAdjusted([x1, y1])
      _y0 = -1 * Math.abs(_y0)
      _y1 = -1 * Math.abs(_y1)
      // _x1 = _x1.toFixed(0);

      if (inputChanging) {
        if (
          !(
            Math.floor(_y0) <= 3 &&
            Math.ceil(_y0) >= -1 * parentHeight - 3 &&
            Math.floor(_y1) <= 3 &&
            Math.ceil(_y1) >= -1 * parentHeight - 3
          )
        ) {
          console.log('Out of bounds')
          coefficientArrayInput.value = initialCoefficientArrayInput
          handleInputChanging(false)
          return points
        }
      }
      if (coefficientArray[0] > Number(initialCoefficientArrayInput[0])) {
        handleNumActivePoints(numActivePoints + (coefficientArray[0] - Number(initialCoefficientArrayInput[0])))
      } else if (coefficientArray[0] < Number(initialCoefficientArrayInput[0])) {
        handleNumActivePoints(numActivePoints - (Number(initialCoefficientArrayInput[0]) - coefficientArray[0]))
      }

      calculatedPointsArray.push([_x0, _y0])
      calculatedPointsArray.push([_x1, _y1])

      //  console.log(calculatedPointsArray);
      // 0: (2) [20, 260]
      // 1: (2) [130, 160]
      return calculatedPointsArray
    }

    if (coefficientArray[0] === 1) {
      // [1, 2, 999999999999999]
      y0 = coefficientArray[1] // a
      x0 = 0
      ;[_x0, _y0] = convertCoordinatesToAdjusted([x0, y0])
      _y0 = -1 * Math.abs(_y0)
      if (inputChanging) {
        if (!(Math.floor(_y0) <= 3 && Math.ceil(_y0) >= -1 * parentHeight - 3)) {
          console.log('Out of bounds')
          coefficientArrayInput.value = initialCoefficientArrayInput
          handleInputChanging(false)
          return points
        }
      }

      if (coefficientArray[0] > Number(initialCoefficientArrayInput[0])) {
        handleNumActivePoints(numActivePoints + (coefficientArray[0] - Number(initialCoefficientArrayInput[0])))
      } else if (coefficientArray[0] < Number(initialCoefficientArrayInput[0])) {
        handleNumActivePoints(numActivePoints - (Number(initialCoefficientArrayInput[0]) - coefficientArray[0]))
      }

      calculatedPointsArray.push([_x0, _y0])

      //  console.log(calculatedPointsArray);
      // 0: (2) [20, 260]
      // 1: (2) [130, 160]
      return calculatedPointsArray
    }
    return null
  }

  /* getCoefficients and calculateCoefficients returns the updated coefficient array 
  and is run inside the update aggregate function */
  function getCoefficients() {
    /*
      For 2 control points: P = P1(1-t) + P2(t)
      For 3 control points: P = P1(1−t)² + P2(2*(1−t)t) + P3(t²)
      For 4 control points: P = P1(1−t)³ + P2(3t)(1−t)² + P3(t²)(3*(1−t)) + P4(t³)
    */

    if (numActivePoints === 4) {
      const coefficients = calculateCoefficients()
      coefficientArray = [4, ...coefficients]
    }
    if (numActivePoints === 3) {
      const coefficients = calculateCoefficients()
      coefficientArray = [3, ...coefficients]
    }
    if (numActivePoints === 2) {
      const coefficients = calculateCoefficients()
      coefficientArray = [2, ...coefficients]
    }
    if (numActivePoints === 1) {
      const coefficients = calculateCoefficients()
      coefficientArray = [1, ...coefficients]
    }
    /* Ensure max supply is a whole number */
    coefficientArray[coefficientArray.length - 1] = Number(coefficientArray[coefficientArray.length - 1].toFixed(0))
    handleCoefficientArray(coefficientArray)
  }

  function calculateCoefficients() {
    let x0
    let x1
    let x2
    let x3
    let _x0
    let _x1
    let _x2
    let _x3
    let y0
    let y1
    let y2
    let y3
    let _y0
    let _y1
    let _y2
    let _y3
    let curveFormula = ''
    let operator = ''
    let a
    let b
    let c
    let d

    if (numActivePoints === 4) {
      _x0 = points[k][0]
      _y0 = points[k][1]
      _x1 = points[k + 1][0]
      _y1 = points[k + 1][1]
      _x2 = points[k + 2][0]
      _y2 = points[k + 2][1]
      _x3 = points[k + 3][0]
      _y3 = points[k + 3][1]

      y0 = convertCoordinates([_x0, _y0])[1]
      ;[x1, y1] = convertCoordinates([_x1, _y1])
      y2 = convertCoordinates([_x2, _y2])[1]
      ;[x3, y3] = convertCoordinates([_x3, _y3])
      // y1 = y1 < -1 ? 1 : y1;
      // y2 = y2 < -1 ? 1 : y2;
      // y3 = y3 < -1 ? 1 : y3;
      // checkBounds

      // Assuming curve is describable by coefficients in y = mx+b format
      // requires control points to be equidistant
      // so the x² terms cancel out
      a = y0
      b = (y1 - y0) / x1
      c = (-2 * y1 + y2 + y0) / (3 * x1 ** 2)
      d = (3 * y1 - 3 * y2 + y3 - y0) / (27 * x1 ** 3)

      if (
        !(
          Math.floor(_y0) <= 0 &&
          Math.floor(_y0) >= -1 * parentHeight &&
          Math.floor(_y1) <= 0 &&
          Math.floor(_y1) >= -1 * parentHeight &&
          Math.floor(_y2) <= 0 &&
          Math.floor(_y2) >= -1 * parentHeight &&
          Math.floor(_y3) <= 0 &&
          Math.floor(_y3) >= -1 * parentHeight
        )
      ) {
        if (Math.floor(_y0) >= -1 * parentHeight - 100) {
          _y0 = -1
        }
        if (Math.floor(_y1) >= -1 * parentHeight) {
        }
        if (Math.floor(_y3) >= -1 * parentHeight) {
        }
      }
      console.log(inputChanging)

      if (a !== 0) {
        curveFormula = `${curveFormula}${prepNumToStr(a, 4)}`
        if (b !== 0) {
          operator = b >= 0 ? '+' : ''
          curveFormula = `${curveFormula} ${operator} ${prepNumToStr(b, 4)}x`
        }
        if (c !== 0) {
          operator = c >= 0 ? '+' : ''
          curveFormula = `${curveFormula} ${operator} ${prepNumToStr(c, 4)}x²`
        }
        if (d !== 0) {
          operator = d >= 0 ? '+' : ''
          curveFormula = `${curveFormula} ${operator} ${prepNumToStr(d, 4)}x³`
        }
      } else if (b !== 0) {
        curveFormula = `${curveFormula}${prepNumToStr(b, 4)}x`
        if (c !== 0) {
          operator = c >= 0 ? '+' : ''
          curveFormula = `${curveFormula} ${operator} ${prepNumToStr(c, 4)}x²`
        }
        if (d !== 0) {
          operator = d >= 0 ? '+' : ''
          curveFormula = `${curveFormula} ${operator} ${prepNumToStr(d, 4)}x³`
        }
      } else if (c !== 0) {
        curveFormula = `${curveFormula}${prepNumToStr(c, 4)}x²`
        if (d !== 0) {
          operator = d >= 0 ? '+' : ''
          curveFormula = `${curveFormula} ${operator} ${prepNumToStr(d, 4)}x³`
        }
      } else if (d !== 0) {
        curveFormula = `${curveFormula}${prepNumToStr(d, 4)}x³`
      }

      // d3.select("#curveFormula").text(`y = ${curveFormula}`);
      if (curveFormulaInput) {
        // d3.selectAll("#curveFormulaInput").style("minWidth", `${d3.select("#curveFormulaInput").length}ch`)
        curveFormulaInput.value = `y = ${curveFormula}`
        curveFormulaInput.style.minWidth = `${curveFormulaInput.value.length}ch`
      }
      initialCoefficientArrayInput = `4, ${prepNumToStr(a, 4)}, ${prepNumToStr(b, 4)}, ${prepNumToStr(
        c,
        4,
      )}, ${prepNumToStr(d, 4)}, ${x3.toFixed(0)}`
      d3.select('#coefficientArrayInput').attr('value', initialCoefficientArrayInput)
      d3.select('#coefficientArrayInput').style('min-width', `${initialCoefficientArrayInput.length - 6}ch`)
      if (document.getElementById('coefficientArrayInput')) coefficientArrayInput.value = initialCoefficientArrayInput
      handleInitialCoefficientArrayInput(initialCoefficientArrayInput)
      handleInputChanging(false)
      return [a, b, c, d, x3]
    }

    if (numActivePoints === 3) {
      _x0 = points[k][0]
      _y0 = points[k][1]
      _x1 = points[k + 1][0]
      _y1 = points[k + 1][1]
      _x2 = points[k + 2][0]
      _y2 = points[k + 2][1]

      y0 = convertCoordinates([_x0, _y0])[1]
      ;[x1, y1] = convertCoordinates([_x1, _y1])
      ;[x2, y2] = convertCoordinates([_x2, _y2])

      // if ((x2 + x0) / 2 === x1) {
      // Assuming curve is describable by coefficients in y = mx+b format
      // requires control points to be equidistant
      // so the x² terms cancel out
      a = y0
      b = (y1 - y0) / x1
      c = (y0 - 2 * y1 + y2) / (4 * x1 ** 2)

      if (a !== 0) {
        curveFormula = `${curveFormula}${prepNumToStr(a, 4)}`
        if (b !== 0) {
          operator = b >= 0 ? '+' : ''
          curveFormula = `${curveFormula} ${operator} ${prepNumToStr(b, 4)}x`
          if (c !== 0) {
            operator = c >= 0 ? '+' : ''
            curveFormula = `${curveFormula} ${operator} ${prepNumToStr(c, 4)}x²`
          }
        } else if (c !== 0) {
          operator = c >= 0 ? '+' : ''
          curveFormula = `${curveFormula} ${operator} ${prepNumToStr(c, 4)}x²`
        }
      } else if (b !== 0) {
        curveFormula = `${curveFormula}${prepNumToStr(b, 4)}x`
        if (c !== 0) {
          operator = c >= 0 ? '+' : ''
          curveFormula = `${curveFormula} ${operator} ${prepNumToStr(c, 4)}x²`
        }
      } else if (c !== 0) {
        curveFormula = `${curveFormula}${prepNumToStr(c, 4)}x²`
      }
      initialCoefficientArrayInput = `3, ${prepNumToStr(a, 4)}, ${prepNumToStr(b, 4)}, ${prepNumToStr(
        c,
        4,
      )}, ${x2.toFixed(0)}`

      // d3.select("#curveFormula").text(`y = ${curveFormula}`);
      if (document.getElementById('curveFormulaInput')) {
        curveFormulaInput.value = `y = ${curveFormula}`
        document.getElementById('curveFormulaInput').style.minWidth = `${curveFormulaInput.value.length}ch`
      }
      d3.select('#coefficientArrayInput').style('value', initialCoefficientArrayInput)
      d3.select('#coefficientArrayInput').style('min-width', `${initialCoefficientArrayInput.length - 5}ch`)
      if (document.getElementById('coefficientArrayInput')) coefficientArrayInput.value = initialCoefficientArrayInput
      handleInitialCoefficientArrayInput(initialCoefficientArrayInput)
      handleInputChanging(false)

      return [a, b, c, x2]
    }
    if (numActivePoints === 2) {
      _x0 = points[k][0]
      _y0 = points[k][1]
      _x1 = points[k + 1][0]
      _y1 = points[k + 1][1]
      y0 = convertCoordinates([_x0, _y0])[1]
      ;[x1, y1] = convertCoordinates([_x1, _y1])
      // if ((x2 + x0) / 2 === x1) {
      a = y0
      b = (y1 - y0) / x1

      if (a !== 0) {
        curveFormula = `${curveFormula}${prepNumToStr(a, 4)}`
        operator = b >= 0 ? '+' : ''
        if (b !== 0) curveFormula = `${curveFormula} ${operator} ${prepNumToStr(b, 4)}x`
      } else if (b !== 0) curveFormula = `${curveFormula}${prepNumToStr(b, 4)}x`
      initialCoefficientArrayInput = `2, ${prepNumToStr(a, 4)}, ${prepNumToStr(b, 4)}, ${x1.toFixed(0)}`
      // d3.select("#curveFormula").text(`y = ${curveFormula}`);
      if (document.getElementById('curveFormulaInput')) {
        curveFormulaInput.value = `y = ${curveFormula}`
        document.getElementById('curveFormulaInput').style.minWidth = `${curveFormulaInput.value.length}ch`
      }
      d3.select('#coefficientArrayInput').attr('value', initialCoefficientArrayInput)
      d3.select('#coefficientArrayInput').style('min-width', `${initialCoefficientArrayInput.length - 2}ch`)
      if (document.getElementById('coefficientArrayInput')) coefficientArrayInput.value = initialCoefficientArrayInput
      handleInitialCoefficientArrayInput(initialCoefficientArrayInput)
      handleInputChanging(false)
      return [a, b, x1]
    }
    if (numActivePoints === 1) {
      _x0 = points[k][0]
      _y0 = points[k][1]
      ;[x0, y0] = convertCoordinates([_x0, _y0])

      a = y0

      if (a !== 0) {
        curveFormula = `${curveFormula}${prepNumToStr(a, 4)}`
      }
      initialCoefficientArrayInput = `1, ${prepNumToStr(a, 4)}, ${x0.toFixed(0)}`
      // d3.select("#curveFormula").text(`y = ${curveFormula}`);
      if (document.getElementById('curveFormulaInput')) {
        curveFormulaInput.value = `y = ${curveFormula}`
        document.getElementById('curveFormulaInput').style.minWidth = `${curveFormulaInput.value.length}ch`
      }
      d3.select('#coefficientArrayInput').attr('value', initialCoefficientArrayInput)
      d3.select('#coefficientArrayInput').style('min-width', `${initialCoefficientArrayInput.length - 2}ch`)
      if (document.getElementById('coefficientArrayInput')) coefficientArrayInput.value = initialCoefficientArrayInput
      handleInitialCoefficientArrayInput(initialCoefficientArrayInput)
      handleInputChanging(false)
      return [a, x0]
    }
    return null
  }

  // eslint-disable-next-line no-unused-vars
  function calculateZap(coefficientArray, dots) {
    if (coefficientArray[0] === 4) {
      const a = coefficientArray[1]
      const b = coefficientArray[2]
      const c = coefficientArray[3]
      const d = coefficientArray[4]

      const zap = a + b * dots ** 1 + c * dots ** 2 + d * dots ** 3

      return zap
    }

    if (coefficientArray[0] === 3) {
      const a = coefficientArray[1]
      const b = coefficientArray[2]
      const c = coefficientArray[3]

      const zap = a + b * dots ** 1 + c * dots ** 2
      return zap
    }
    if (coefficientArray[0] === 2) {
      const a = coefficientArray[1]
      const b = coefficientArray[2]

      const zap = a + b * dots ** 1
      return zap
    }
    if (coefficientArray[0] === 1) {
      const a = coefficientArray[1]

      const zap = a
      return zap
    }
  }

  /* Function to convert d3 adjusted coordinates into the original values to calculate function */
  function convertCoordinates(coordinate) {
    const newCoordX = (coordinate[0] - margin.left) * dotSupplyScale
    const newCoordY =
      // (height - coordinate[1] + margin.bottom) * zapCostScale * _maxReserve;
      (-coordinate[1] + margin.bottom) * zapCostScale * _maxReserve
    return [newCoordX, newCoordY]
  }

  function convertCoordinatesToAdjusted(originalCoordinate, _constant = 1) {
    const adjustedCoordX = originalCoordinate[0] / dotSupplyScale + margin.left
    const adjustedCoordY =
      // (height - originalCoordinate[1] / zapCostScale / constant) / zoomFit + margin.bottom;
      (originalCoordinate[1] / zapCostScale) * -1 + margin.bottom
    // let adjusslCoordinate[1] / _maxReserve / zapCostScale - margin.bottom - height);
    return [adjustedCoordX, adjustedCoordY]
  }

  /* Convert array of control points to account for margins and flip across x-axis */
  function convertToAdjustedPoints(pointsOriginal) {
    const points = pointsOriginal.map((coordinate) => {
      const pixelCoordX = coordinate[0] / dotSupplyScale + margin.left
      const pixelCoordY = height - coordinate[1] / zapCostScale + margin.bottom
      return [pixelCoordX, pixelCoordY]
    })
    return points
  }

  /* Convert array of adjusted values back to control points for curve formula calculation */
  function convertToOriginalPoints(pointsAdjusted) {
    if (pointsAdjusted) {
      const pointsOriginal = pointsAdjusted.map((coordinate) => {
        const pixelCoordX = (coordinate[0] - margin.left) * dotSupplyScale
        const pixelCoordY =
          // (height - coordinate[1] + margin.bottom) * zapCostScale * _maxReserve;
          (-coordinate[1] + margin.bottom) * zapCostScale * _maxReserve
        return [pixelCoordX, pixelCoordY]
      })
      return pointsOriginal
    }
    return []
  }

  // function checkBounds(y1,y2,y3,x3,coefficientArray, previousXLimitOfCoeffArray=0) {
  //   let x0Check, x1Check, x2Check, x3Check;
  //   let y0Check, y1Check, y2Check, y3Check;

  //   let a = y0;
  //   let b = (y1 - y0) / x1;
  //   let c = (-2 * y1 + y2 + y0) / (3 * Math.pow(x1, 2));
  //   let d = (3 * y1 - 3 * y2 + y3 - y0) / (27 * Math.pow(x1, 3));
  //   let calculatedCoefficientArray = [4,prepNumToStr(a,16), prepNumToStr(b,16), prepNumToStr(c,16), prepNumToStr(d,16), x3];

  //   y0Check = a; //a
  //   x0Check = 0;
  //   x3Check = x3 - previousXLimitOfCoeffArray;

  //   x1Check = (x3Check - x0Check) / 3; // thirds //x1 = (y1-y0)/b
  //   x2Check = x1Check * 2;

  //   y1Check = (b * x1Check + y0Check);
  //   y2Check = 3 * c * Math.pow(x1Check, 2) - y0Check + 2 * y1Check;
  //   // y3 = calculateZap(calculatedCoefficientArray, x3) / zoomFit;
  //   y3Check = (d * (27 * Math.pow(x1Check, 3)) - (3 * y1Check) + (3 * y2Check) + y0Check);
  //   // let d = (3 * y1 - 3 * y2 + y3 - y0) / (27 * Math.pow(x1, 3));

  //   if (y1Check > 1) {
  //     y1Check = 1;
  //     b = (y1Check - y0Check) / x1Check;
  //     y1 = prepNumToStr(b,16) * x1 + y0;
  //   }
  //   if (y2Check > 1) {
  //     y2Check = 1;
  //     c = y2Check + y0Check - (2 * y1Check) / 3 / Math.pow(x1Check, 2);
  //     y2 = c * (3 * Math.pow(x1, 2)) - ((-2) * y1) - y0;
  //     // y2 = 1
  //   }
  //   y2Check = y2Check > 1 ? 1 : y2Check;
  //   y3Check = y3Check > 1 ? 1 : y3Check;

  //   // for any that changed, recalc coefficient array, abcd, y1y2y3

  //   return [y1,y2,y3]
  // }

  const createProviderCurveThumbnail = (node) => {
    if (bonded) {
      svg.attr(
        'transform',
        `translate(${
          // (width / dotSupplyScale + margin.left * 2) / 8 +
          // + margin.left +
          +(parentWidth / (4.1 * 2.5))
        },${parentHeight * 1.03})`,
      )
    } else {
      svg.attr(
        'transform',
        `translate(${
          // ((width / dotSupplyScale / 8) + margin.right) +
          +(parentWidth / 11)
        },${parentHeight * 1.03})`,
      )
    }

    //*  Set up path with corresponding classes *//
    svg.append('path').attr('class', 'path').attr('id', pathID)
    svg.append('path').attr('class', 'previewPath')
    svg.append('path').attr('class', 'savedPath')

    linearGradient = svg.append('defs').append('linearGradient').attr('id', linearID)

    nonBondedLinearGradient = svg.select('defs').append('linearGradient').attr('id', nonBondedLinearID)

    Object.values(_coeffPiecewiseMap).forEach((_coefficientArray) => {
      handleCoefficientArray(_coefficientArray)
      initializeBondingCurve(node, pieceIndex)

      update(points)
      pieceIndex += 1
    })
    if (zoomFit) {
      handleZoomFitScaleX(width / dotSupplyScale / pointsOriginal[pointsOriginal.length - 1][0] / zoomFit)
      handleZoomFitScaleY(height / zapCostScale / pointsOriginal[pointsOriginal.length - 1][1] / zoomFit)
      _zoomFitScaleY = _height / _zapCostScale / pointsOriginal[pointsOriginal.length - 1][1] / zoomFit
    }

    /* Bonded Dots line for thumbnail curve */
    if (bonded) {
      const v = svg.select(`#${pathID}`)
      const pathEl = v.node()
      /* Bonded Dots are scaled by dot supply scale */
      const pos = pathEl.getPointAtLength(bondedDotsConverted)
      svg
        .append('line')
        .attr('id', 'bondedDotsLine')
        .attr('class', 'bondedDotsLine')
        .attr('stroke', '#0078fe96')
        .attr('x1', pos.x)
        .attr('y1', pos.y)
        .attr('x2', pos.x)
        .attr('y2', height + margin.bottom)

      svg
        .append('circle')
        .attr('id', 'bondedDots')
        .attr('r', curveTracingCircleRadius)
        .attr('fill', 'black')
        .attr('cx', pos.x)
        .attr('cy', pos.y)
        .attr('class', 'bondedDotsCircle')
      // .attr("class", classes.bondedDotsCircle);
    }
  }

  const createProviderCurveCreationWizard = (node) => {
    svgCreationTranslateFactor = [
      screenScaleFactor * parentWidth * 1.85,
      // parentHeight + screenScaleFactor * parentHeight * 1.0 - ffEdit,
      parentHeight + screenScaleFactor * parentHeight * 1.0,
    ]
    initializeBondingCurve(node, pieceIndex)
    // eslint-disable-next-line no-debugger
    // debugger
    svg.attr(
      'transform',
      `translate(${
        svgCreationTranslateFactor[0]
        // + (parentWidth) +
        // margin.left +
      },${
        // (height / zoomFitScaleY / zapCostScale - height - margin.top ||
        //   height / zapCostScale - height - margin.top) +
        svgCreationTranslateFactor[1]
      })`,
    )

    const selectTemplateButton = d3.select('#sidebar').selectAll('button')

    if (zoomFit) {
      handleZoomFitScaleX(width / dotSupplyScale / pointsOriginal[pointsOriginal.length - 1][0] / zoomFit)
      handleZoomFitScaleY(height / zapCostScale / pointsOriginal[pointsOriginal.length - 1][1] / zoomFit)
    }

    // /// Set attributes of svg object
    // let svg = select(uniqueId.current)
    //   .style("width", width / dotSupplyScale + margin.left * 2 + margin.right * 2)
    //   .style("height", height / zapCostScale + margin.top + margin.bottom)
    //   .append("g")
    //   .attr(
    //     "transform",
    //     "translate(" + margin.left + "," + (height/zoomFitScaleY / zapCostScale - height - margin.top || height / zapCostScale - height - margin.top ) + ")"
    // );

    //*  Set up path with corresponding classes *//
    svg.append('path').attr('class', 'path').attr('id', pathID)
    svg.append('path').attr('class', 'previewPath')
    svg.append('path').attr('class', 'savedPath')

    linearGradient = svg.append('defs').append('linearGradient').attr('id', linearID)

    nonBondedLinearGradient = svg.select('defs').append('linearGradient').attr('id', nonBondedLinearID)

    select(uniqueId.current).on('click', addControlPoint)

    /// Event handler for dynamic input resize
    d3.selectAll('#coefficientArrayInput').on('change', () => inputChange('coefficientArrayInput'))
    d3.selectAll('#curveFormulaInput').on('blur', () => inputChange('curveFormulaInput'))

    // let input = document.getElementById("coefficientArrayInput"); // get the input element
    // let input = document.getElementById("curveFormulaInput"); // get the input element
    // // let input = select(uniqueId.current).select("#coefficientArrayInput"); // get the input element
    // if (input) {
    //   input.addEventListener("input", resizeInput); // bind the "resizeInput" callback on "input" event
    //   resizeInput.call(input); // immediately call the function
    // }
    const inputCurveFormula = document.getElementById('curveFormulaInput')
    const inputMaxXAxis = document.getElementById('maxXAxis')
    const inputMaxYAxis = document.getElementById('maxYAxis')
    inputCurveFormula.addEventListener('input', () => resizeInput('curveFormulaInput'))
    // resizeInput.call(inputCurveFormula)
    inputMaxXAxis.addEventListener('input', () => resizeInput('maxXAxis'))
    // resizeInput.call(inputMaxXAxis)
    inputMaxYAxis.addEventListener('input', () => resizeInput('maxYAxis'))
    // resizeInput.call(inputMaxYAxis)

    /// On-click listener for selecting template and functions for each
    selectTemplateButton.on('click', function (ev, index) {
      // d3.select("#curveTracingCircle").attr("display", "none");
      const selectedTemplate = selectTemplateButton._groups[0][index].value

      drawTemplate(selectedTemplate)

      function drawTemplate(templateType) {
        let templateCoefficientArray = []
        let slope

        /// If k > 0, there is an existing curve section to append new curve onto
        if (k > 0) {
          points.length = previousNumActivePoints
          const pointsOriginal = convertToOriginalPoints(points)
          // eslint-disable-next-line no-unused-vars
          const lastXCoordinate = pointsOriginal[pointsOriginal.length - 1][0]
          // eslint-disable-next-line no-unused-vars
          const lastYCoordinate = pointsOriginal[pointsOriginal.length - 1][1]
        }
        function stable() {
          if (k > 0) {
          } else {
            templateCoefficientArray = [2, (10 ** 18 * maxReserve) / 2, 0, maxSupply]
          }
          return templateCoefficientArray
        }
        function linearPositive() {
          if (k > 0) {
            // return (pointsArrayTemp = [
            //   [lastXCoordinate + 100, lastYCoordinate + 100],
            //   [lastXCoordinate + 200, lastYCoordinate + 200]
            // ]);
          } else {
            slope = maxReserve / maxSupply
            templateCoefficientArray = [3, 0, 10 ** 18 * slope, 0, maxSupply]
          }
          return templateCoefficientArray
        }
        function incentiveEarlyAdoption() {
          if (k > 0) {
            // return (pointsArrayTemp = [
            //   [lastXCoordinate + 150, lastYCoordinate],
            //   [lastXCoordinate + 300, lastYCoordinate + 200]
            // ]);
          } else {
            slope = maxReserve / maxSupply ** 2
            // eslint-disable-next-line no-return-assign
            templateCoefficientArray = [3, 0, 0, 10 ** 18 * slope, maxSupply]
          }
          return templateCoefficientArray
        }

        const templateList = {
          'incentivize-early-adoption': incentiveEarlyAdoption,
          'linear-positive': linearPositive,
          'stable-graph': stable,
        }

        const selectedArray = templateList[templateType]()

        if (k === 0) {
          handleCoefficientArray(convertFromWeiZapToZap(templateCoefficientArray))
          handlePoints(calculatePointsArray(coefficientArray))
          handlePointsOriginal(convertToOriginalPoints(points))
          // handleNumActivePoints(points.length);
          numActivePoints = selectedArray[0]
          handleNumActivePoints(numActivePoints)
          getCoefficients()
        } else {
          // Need to be fixed [v2]
          convertToAdjustedPoints(selectedArray).forEach((coordinate) => {
            points.push(coordinate)
          })
          handlePoints(points)
          numActivePoints = selectedArray[0]
          handleNumActivePoints(numActivePoints)
        }
        update(points)
      }
    })

    /* First drawing of curve */
    update(points)

    // if (editable) {
    //   select("#bottombar").style("display", "flex");
    // }

    function addControlPoint() {
      const d3 = require('d3')

      /// Logic for preventing adding control points when module in non-editable mode
      if (editable) {
        /// Clicking on controlPoint does nothing
        if (d3.event.target.id === 'controlPoint') return
        /// Clicking outside of graph does not render a new control point
        if (
          d3.event.clientX < document.getElementById(yID).getBoundingClientRect().left + margin.left ||
          d3.event.clientY < document.getElementById(yID).getBoundingClientRect().top + margin.top ||
          d3.event.clientX > document.getElementById(xID).getBoundingClientRect().right ||
          d3.event.clientY > document.getElementById(xID).getBoundingClientRect().top
        )
          return
        /* Functionality to disable clicking while add-curve-button being dragged */
        if (addCurveButtonDragging) return

        if (numActivePoints === 4) {
          // handlePreviewCurveOn(false);
          // select(uniqueId.current)
          //   .on("click", null)
          //   .on("mousemove", null);
          // d3.select(".previewPath").attr("style", "none");
          return
        }
        /// !!! Turned off this feature for now as it interferes with auto-spacing control points
        // previewCurveOn = true;
        const coordinates = d3.mouse(uniqueId.current)
        // coordinates[0] = coordinates[0] - margin.left;
        // coordinates[1] =
        //   coordinates[1] + height - height / zapCostScale + margin.top;
        coordinates[0] -= svgCreationTranslateFactor[0]
        coordinates[1] -= svgCreationTranslateFactor[1]
        handleClickedCoordinates(d3.mouse(uniqueId.current))

        if (coordinates[0] < margin.left) coordinates[0] = margin.left
        if (coordinates[0] > parentWidth) coordinates[0] = parentWidth
        if (coordinates[1] > margin.top) coordinates[1] = margin.top
        if (Math.abs(coordinates[1]) > Math.abs(parentHeight)) coordinates[1] = parentHeight

        points.push(coordinates)
        handlePoints(points)
        handlePointsOriginal(convertToOriginalPoints(points))
        handlePointsPreview(points)
        handleNumActivePoints(numActivePoints + 1)

        /* Logic for autospacing control points when clicking to add new control point */
        if (numActivePoints === 4) {
          let converted =
            (((points[k + 3][0] - margin.left) / parentWidth) * document.getElementById('svg').clientWidth) / 3

          points[k + 1][0] = (converted / document.getElementById('svg').clientWidth) * parentWidth + margin.left

          converted =
            (((points[k + 3][0] - margin.left) / parentWidth) * document.getElementById('svg').clientWidth) / 1.5

          points[k + 2][0] = (converted / document.getElementById('svg').clientWidth) * parentWidth + margin.left
          handlePoints(points)
          handlePointsOriginal(convertToOriginalPoints(points))
        }
        if (numActivePoints === 3) {
          const converted =
            (((points[k + 2][0] - margin.left) / parentWidth) * document.getElementById('svg').clientWidth) / 2
          points[k + 1][0] = (converted / document.getElementById('svg').clientWidth) * parentWidth + margin.left
          handlePoints(points)
          handlePointsOriginal(convertToOriginalPoints(points))
        }

        if (numActivePoints === 1) {
          points[k][0] = 0
          handlePoints(points)
          handlePointsOriginal(convertToOriginalPoints(points))
        }

        update(points)
      } else if (!editable && bonded) {
        freezeGraph = !freezeGraph
        handleFreezeGraph(freezeGraph)
      }
    }

    /* Dynamic input resize */
    function resizeInput(id) {
      // this.style.minWidth = this.value.length + "ch";
      // d3.select("#coefficientArrayInput").style(
      //   "min-width",
      //   `${this.value.length}ch`
      // );
      switch (id) {
        // case "maxXAxis":
        //   d3.select("#maxXAxis").style("min-width", `${String(inputMaxXAxis.value).length}ch`);
        //   break;
        // case "maxYAxis":
        //   d3.select("#maxYAxis").style("min-width", `${String(inputMaxYAxis.value).length}ch`);
        //   break;
        // case "curveFormulaInput":
        //   d3.select("#curveFormulaInput").style("min-width", `${inputCurveFormula.value.length}ch`);
        //   break;
        default:
          break
      }
    }

    // eslint-disable-next-line consistent-return
    function inputChange(type) {
      switch (type) {
        case 'curveFormulaInput':
          const sanitizedCoefficientArray = formulaMapping(
            curveFormulaInput.value,
            coefficientArray[coefficientArray.length - 1] || maxXAxis,
          )
          if (sanitizedCoefficientArray.length > 3) {
            coefficientArrayInput.value = sanitizedCoefficientArray || props.values.curveArray
          }
          break
        case 'coefficientArrayInput':
          curveFormulaInput.value = coefficientArrayInput.value
          break
        default:
          return null
      }

      const inputValue = coefficientArrayInput.value
      // console.log(e.target, formulaValue, inputValue)
      if (inputValue === '') {
        coefficientArrayInput.value = initialCoefficientArrayInput
        // eslint-disable-next-line consistent-return
        return
      }
      handleInputChanging(true)

      const inputtedCoefficientArray = inputValue.split(',').map((str) => {
        return Number(str)
      })
      const convertedCoefficientArray = inputtedCoefficientArray.map((ele, i) => {
        if (!editable) {
          if ([0, inputtedCoefficientArray.length - 1].includes(i) || yMax === 0) {
            return ele
          }
          return ele / yMax
        }
        if ([0, inputtedCoefficientArray.length - 1].includes(i) || maxYAxis === 0) {
          return ele
        }
        return ele / maxYAxis
      })

      const updatedPoints = calculatePointsArray(convertedCoefficientArray)
      handlePoints(updatedPoints)
      handlePointsOriginal(convertToOriginalPoints(points))
      handlePointsPreview(updatedPoints)
      update(updatedPoints)
    }
  }

  const axisChange = (id) => {
    let axisValX
    let axisValY
    if (id === 'maxXAxis') {
      maxXAxis = 0
      // axisValX = document.getElementById('maxXAxis').value === "" ? maxXAxis : parseInt(document.getElementById('maxXAxis').value)
      // if (document.getElementById('maxXAxis').value === '') {
      //   axisValX = maxXAxis
      //   document.getElementById('maxXAxis').value = maxXAxis
      // } else {
      //   axisValX = parseFloat(document.getElementById('maxXAxis').value)
      // }
      // if (axisValX < 1) {
      //   maxXAxis = 1
      //   document.getElementById('maxXAxis').value = 1
      // } else if (axisValX > 1000000000) {
      //   maxXAxis = 1000000000
      //   document.getElementById('maxXAxis').value = 1000000000
      // } else {
      //   maxXAxis = axisValX
      // }
    } else {
      maxYAxis = 0
      // axisValY = document.getElementById('maxYAxis').value === "" ? maxYAxis : parseInt(document.getElementById('maxYAxis').value)
      // if (document.getElementById('maxYAxis').value === '') {
      //   axisValY = maxYAxis
      //   document.getElementById('maxYAxis').value = maxYAxis
      // } else {
      //   axisValY = parseFloat(document.getElementById('maxYAxis').value)
      // }
      // if (axisValY < 1) {
      //   maxYAxis = 1
      //   document.getElementById('maxYAxis').value = 1
      // } else {
      //   maxYAxis = axisValY
      // }
    }

    handlePointsOriginal(convertToOriginalPoints(points))
    const pointsPercentConverted = pointsOriginal.map((coords) => {
      /* Converting pointsOriginal to be scaled with new X and Y axes vs old axes */
      return [(coords[0] / maxSupply) * maxXAxis, (coords[1] / _maxReserve) * maxYAxis]
    })
    const tempCoeff = pointsToCoeff(
      pointsPercentConverted,
      margin,
      maxXAxis / parentWidth,
      maxYAxis / parentHeight,
      maxYAxis,
    )
    // props.handleDragCurve(convertFromZapToWeiZap(tempCoeff));
    tokenContext.tokenWizardActions.handleAxesArgs(maxXAxis, maxYAxis, convertFromZapToWeiZap(tempCoeff))
  }
  useEffect(() => {
    try {
      initializeBondingCurveCanvas(node)
      if (editable && !bonding) {
        createProviderCurveCreationWizard(node)
      } else if (!editable && !bonding) {
        createProviderCurveThumbnail(node)
      }
    } catch (e) {
      /* For Dev Testing */
      // console.log("Issue with creating the curve for " + existingCoefficientArray);
      // eslint-disable-next-line no-console
      console.log(e)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!!parentWidth, !!parentHeight])

  // return <svg ref={(n) => (node = n)} id=svgID className={classes.svg} />;
  // eslint-disable-next-line react/jsx-filename-extension
  return <CurveSVG ref={uniqueId} id="svg" />
}

ProviderCurveSvg.defaultProps = {
  props: null,
  _parentWidth: 0,
  _parentHeight: 0,
}

export default ProviderCurveSvg
