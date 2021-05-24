/* eslint-disable no-return-assign */
/* eslint-disable func-names */
/* eslint-disable no-bitwise */
/* eslint-disable no-unused-expressions */
/* eslint-disable operator-assignment */
/* eslint-disable @typescript-eslint/no-shadow */


import { ethers } from "ethers";

function removeExponents(num) {
  const data = String(num).split(/[eE]/);
  if (data.length === 1) return data[0];

  let restOfNumber = ''; const operation = num < 0 ? '-' : '';
  const str = data[0].replace('.', '');
  let magnitude = Number(data[1]) + 1;

  if (magnitude < 0) {
    restOfNumber = `${operation}0.`;
    while (magnitude++) restOfNumber += '0';
    // eslint-disable-next-line
    return restOfNumber + str.replace(/^\-/, '');
  }
  magnitude -= str.length;
  while (magnitude--) restOfNumber += '0';
  return str + restOfNumber;
}

export const prepNumToStr = (num, decimal) => {
  /* Remove exponents, default from JS */
  return removeExponents(reduceDecimalLength(removeExponents(num), decimal));
  function reduceDecimalLength(num, decimal) {
    if (String(num).indexOf('.') < 0 || !decimal) return num;

    const numAsString = String(num);
    let tempNumString = String(num);
    const decimalIndex = numAsString.indexOf('.');
    tempNumString = tempNumString.slice(decimalIndex);
    let numberOfZeroesAfterDecimal = 0;

    while ((tempNumString[numberOfZeroesAfterDecimal + 1]) === '0') {
      numberOfZeroesAfterDecimal += 1;
    }

    const lengthBeforeDecimal = numAsString.slice(0, decimalIndex).length;
    let lastNonZeroIndex = tempNumString.length - 1;
    if (tempNumString.indexOf('.') >= 0) {
      while (tempNumString[lastNonZeroIndex] === '0' && lastNonZeroIndex > decimalIndex) {
        lastNonZeroIndex -= 1;
      }

      const sliceValue = 1 + Math.min(lastNonZeroIndex, (decimal + numberOfZeroesAfterDecimal + lengthBeforeDecimal) || lastNonZeroIndex);
      tempNumString = tempNumString.slice(0, sliceValue);
      tempNumString = numAsString.slice(0, decimalIndex).concat(tempNumString)
    }
    const decimalsToRoundTo = Math.min(numberOfZeroesAfterDecimal + decimal, lastNonZeroIndex + lengthBeforeDecimal + numberOfZeroesAfterDecimal);
    return Number(Number(tempNumString).toFixed(decimalsToRoundTo));
  }

  // if (num === 0) {
  //   return 0;
  // } else if (num > 0) {
  //   //  return +(Math.round(num + "e+0")  + "e-0");
  //   num = Number(
  //     num.toFixed(
  //       Math.max(-Math.log10(Math.abs(num)) + decimal + 2, decimal + 2)
  //     )
  //   );
  //   if (num < 1 * Math.pow(1, -1000)) {
  //     num = Number(1 * num.toPrecision(decimal + 1)).toExponential(decimal);
  //   } else {
  //     num = +(Math.round(num + `e+${decimal}`) + `e-${decimal}`);
  //   }
  //   return num;
  // } else if (num < 0) {
  //   //  return +(Math.round((-1*num) + "e+0")  + "e-0");
  //   num = Number(
  //     -1 *
  //       Math.abs(num).toFixed(
  //         Math.max(-Math.log10(Math.abs(num)) + decimal + 2, decimal + 2)
  //       )
  //   );
  //   if (num > -1 * Math.pow(1, -1000)) {
  //     num = Number(1 * num.toPrecision(decimal + 1)).toExponential(decimal);
  //   } else {
  //     num = +(Math.round(num + `e+${decimal}`) + `e-${decimal}`);
  //   }
  //   return num;
  // }
  // return num
};

export const formulaMapping = (formula, xLimit) => {
  if (formula.length === 0) return "";
  const coeffMap = { "0": 0, "1": 0, "2": 0, "3": 0 }
  const noSpace = formula.replace(/\s+/g, '').toLowerCase().replace(/^[a-z](\(x\))?/g, '').replace(/[a-wyzA-WYZ ]/g, "").replace(/[!*@#$%&_`~?<>()]/g, '')
  const formulaArray = noSpace.split(/[=+-]/)
  const filtered = formulaArray.filter(string => string !== "y").filter(string => string !== "")

  // eslint-disable-next-line consistent-return
  const switchCases = (action, object, key, value) => {
    // key or statement
    if (!["0", "1", "2", "3"].includes(key)) return null;
    switch (action) {
      case "+":
        object[key] = object[key] + parseFloat(value)
        break
      case "-":
        object[key] = object[key] + parseFloat(value * -1)
        break
      default:
        object[key] = object[key] + parseFloat(value)
    }
  }

  for (let i = 0; i < filtered.length; i++) {
    const action = noSpace[noSpace.indexOf(filtered[i]) - 1]
    if (filtered[i].includes("x^")) {
      const splitSub = filtered[i].split("x^")
      if (splitSub[0] === "") {
        splitSub[0] = "1"
      }
      switchCases(action, coeffMap, splitSub[1], splitSub[0])
    }
    else if (filtered[i].includes("x")) {
      const splitSub = filtered[i].split("x")
      if (splitSub[0] === "") { // y = 5 + 4x + 3x^2
        splitSub[0] = "1"
      }
      if (splitSub[1] === "") {
        splitSub[1] = "1"
      }
      switch (splitSub[1]) {
        case "\u2070":
          splitSub[1] = "0";
          break;
        case "\u00B9":
          splitSub[1] = "1";
          break;
        case "\u00B2":
          splitSub[1] = "2";
          break;
        case "\u00B3":
          splitSub[1] = "3";
          break;
        case '⁰':
          splitSub[1] = "0";
          break;
        case '¹':
          splitSub[1] = "1";
          break;
        case '²':
          splitSub[1] = "2";
          break;
        case '³':
          splitSub[1] = "3";
          break;
        default:
          break;

      }
      switchCases(action, coeffMap, splitSub[1], splitSub[0])
    } else {
      switchCases(action, coeffMap, '0', filtered[i])
    }

  }
  const coeffArray = Object.values(coeffMap);
  let zeroesCounter = 0;
  let i = coeffArray.length - 1
  while (coeffArray[i] === 0) {
    zeroesCounter++
    i--;
  }

  const numberOfTerms = coeffArray.length - zeroesCounter;
  switch (numberOfTerms) {
    case 1:
      return [numberOfTerms + 1, ...coeffArray.slice(0, numberOfTerms), 0, xLimit]
    default:
      return [numberOfTerms, ...coeffArray.slice(0, numberOfTerms), xLimit];
  }
}

export const calculateIntegralForZap = (coefficientArray, xStart, xEnd) => {
  let sumA = 0;
  let sumB = 0;
  let power = 1; // increase power by 1 for integral
  const _coefficientArray = Array.from(coefficientArray);
  _coefficientArray.shift();
  while (_coefficientArray.length > 1) {
    sumA = sumA + (_coefficientArray[0] * (xEnd ** power)) / power;
    sumB = sumB + (_coefficientArray[0] * (xStart ** power)) / power;
    _coefficientArray.shift();
    power++;
  }
  return sumA - sumB;
};

export const calculateMaximumOfFunction = (
  coefficientArray,
  prevXLimit,
  index
) => {
  let _coefficientArray = coefficientArray;
  if (index !== 0) {
    _coefficientArray = coefficientArray;
    _coefficientArray[_coefficientArray.length - 1] =
      _coefficientArray[_coefficientArray.length - 1] - prevXLimit;
  }
  let xValue = 0;
  let xValueAlt = null;
  switch (_coefficientArray[0]) {
    // set derivative to 0 to find points where slope = 0;
    case 2:
      // y = 100 +200x =>  y = 200*1 =>
      // Slope greater than 0, then xValue of max peak found
      // Slope less than or equal to 0, then return yValue when x is 0
      if (_coefficientArray[2] > 0) {
        xValue = _coefficientArray[3];
        break;
      } else {
        xValue = 0;
        return _coefficientArray[1];
      }
    case 3:
      // y = 100 +200x +300x^2 => y = 200*1 + 300*2*x
      xValue = (0 - _coefficientArray[2]) / _coefficientArray[3] / 2;
      xValue <= 0 ? (xValue = _coefficientArray[4]) : (xValue = xValue + 0);
      break;
    case 4:
      // y = 100 +200x +300x^2 -400x^3 => y = 200*1 + 300*2*x - 400*3x^2
      const c = _coefficientArray[2] * 1;
      const b = _coefficientArray[3] * 2;
      const a = _coefficientArray[4] * 3;
      // assume sqroot must exist as imported curve exists
      const _xValue1 = (0 - b + Math.sqrt((b ** 2) - 4 * a * c)) / (2 * a);
      const _xValue2 = (0 - b - Math.sqrt((b ** 2) - 4 * a * c)) / (2 * a);

      xValue = _xValue1;
      xValueAlt = _xValue2;
      break;
    default:
  }
  let power = -1;
  let yMax = 0;
  let tempSumA = 0;
  let tempSumB = 0;
  _coefficientArray.forEach((ele, i) => {
    if (!xValueAlt) {
      if (
        ![0, _coefficientArray.length - 1].includes(i) &&
        xValue >= prevXLimit &&
        xValue <= _coefficientArray[_coefficientArray.length - 1]
      ) {
        yMax = yMax + ele * (xValue ** power);
      }
    } else if (![0, _coefficientArray.length - 1].includes(i)) {
      if (
        xValue >= prevXLimit &&
        xValue <= _coefficientArray[_coefficientArray.length - 1]
      )
        tempSumA = tempSumA + ele * (xValue ** power);
      if (
        xValueAlt >= prevXLimit &&
        xValueAlt <= _coefficientArray[_coefficientArray.length - 1]
      )
        tempSumB = tempSumB + ele * (xValueAlt ** power);
    }
    power++;
  });
  return Math.max(yMax, tempSumA, tempSumB);
};

export function calculateYChange(coeffArr, prevXLimit = 0) {
  switch (coeffArr[0]) {
    case 2:
      // yChange = ∆x^0 * coeffArray[1] + ∆x^1 * coeffArr[2]
      return coeffArr[1] + coeffArr[2] * (coeffArr[3] - prevXLimit);
    case 3:
      return (
        coeffArr[1] +
        coeffArr[2] * (coeffArr[4] - prevXLimit) +
        coeffArr[3] * (coeffArr[4] - prevXLimit) ** 2
      );
    case 4:
      return (
        coeffArr[1] +
        coeffArr[2] * (coeffArr[5] - prevXLimit) +
        coeffArr[3] * (coeffArr[5] - prevXLimit) ** 2 +
        coeffArr[4] * (coeffArr[5] - prevXLimit) ** 3
      );
    default:
      return null;
  }
}

export function generateUUID() {
  // Public Domain/MIT: https://www.ietf.org/rfc/rfc4122.txt
  let d = new Date().getTime(); // Timestamp
  let d2 =
    (performance && performance.now && window.performance.now() * 1000) || 0; // Time in microseconds since page-load or 0 if unsupported
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    let r = Math.random() * 16; // random number between 0 and 16
    if (d > 0) {
      // Use timestamp until depleted
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      // Use microseconds since page-load if supported
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

export function checkPiecewiseFunction(coefficientArray) {
  const coeffPiecewiseMap = {};
  let curveGroup = 0;
  function convertCoefficientArrayWithOneTerm(coefficientArray) {
    let changedCoefficientArray = coefficientArray;
    if (coefficientArray[0] === 1) {
      changedCoefficientArray = [
        2,
        coefficientArray[1],
        0,
        coefficientArray[2],
      ];
    }
    return changedCoefficientArray;
  }
  if (!coefficientArray[coefficientArray[0] + 2]) {
    coeffPiecewiseMap[curveGroup] = convertCoefficientArrayWithOneTerm(
      coefficientArray
    );
  }

  while (coefficientArray[coefficientArray[0]] || coefficientArray[coefficientArray[0]] === 0n || coefficientArray[coefficientArray[0]] === 0) {
    coeffPiecewiseMap[curveGroup] = convertCoefficientArrayWithOneTerm(
      coefficientArray.slice(0, coefficientArray[0] + 2)
    );
    coefficientArray = convertCoefficientArrayWithOneTerm(
      coefficientArray.slice(coefficientArray[0] + 2)
    );
    curveGroup = curveGroup + 1;
  }
  return [coeffPiecewiseMap, curveGroup];
}

export function pointsToCoeff(pointsOriginal, margin, dotSupplyScale, zapCostScale, _maxReserve, previousXLimit = 0) {
  const coefficientArray = [];
  let x1; let x2; let x3;
  let y0; let y1; let y2; let y3;
  let index0; let index1; let index2; let index3;
  // let _x0, _x1, _x2, _x3;
  // let _y0, _y1, _y2, _y3;

  switch (pointsOriginal.length) {
    case 4:

      index0 = pointsOriginal[0]
      // x0 = index0[0]
      y0 = index0[1]
      index1 = pointsOriginal[1]
      x1 = index1[0]
      y1 = index1[1]
      index2 = pointsOriginal[2]
      x2 = index2[0]
      y2 = index2[1]
      index3 = pointsOriginal[3]
      x3 = index3[0]
      y3 = index3[1]

      coefficientArray[0] = 4;
      coefficientArray[1] = y0;
      coefficientArray[2] = (y1 - y0) / x1;
      coefficientArray[3] = (y2 - (2 * y1) + y0) / (3 * (x1, 2));
      coefficientArray[4] = ((y3 - y0) - (3 * y2) + (3 * y1)) / (27 * (x1 ** 3));
      coefficientArray[5] = x3 - previousXLimit;

      return coefficientArray;
    case 3:
      index0 = pointsOriginal[0]
      // x0 = index0[0]
      y0 = index0[1]
      index1 = pointsOriginal[1]
      x1 = index1[0]
      y1 = index1[1]
      index2 = pointsOriginal[2]
      x2 = index2[0]
      y2 = index2[1]

      coefficientArray[0] = 3;
      coefficientArray[1] = y0;
      coefficientArray[2] = (y1 - y0) / x1;
      coefficientArray[3] = (y2 - (2 * y1) + y0) / (4 * (x1 ** 2));
      coefficientArray[4] = x2 + previousXLimit

      return coefficientArray

    case 2:
      index0 = pointsOriginal[0]
      // x0 = index0[0]
      y0 = index0[1]
      index1 = pointsOriginal[1]
      x1 = index1[0]
      y1 = index1[1]

      coefficientArray[0] = 2;
      coefficientArray[1] = y0;
      coefficientArray[2] = (y1 - y0) / x1;
      coefficientArray[3] = x1 + previousXLimit

      return coefficientArray
    case 1:
      const index = pointsOriginal
      // x0 = index[0]
      y0 = index[1]

      coefficientArray[0] = 1;
      coefficientArray[1] = y0;

      return coefficientArray;
    default:
      return null;

  }

  // function adjCoord){
  //     let coordX = (adjCoord[0] - margin.left) * dotSupplyScale;
  //   let coordY = (-adjCoord[1] + margin.bottom) * zapCostScale * _maxReserve;
  //     return [coordX, coordY]
  // }
}

export const convertFromZapToWeiZap = (coefficientArray) => {
  return coefficientArray.map((ele, i) => {
    if (![0, coefficientArray.length - 1].includes(i)) {
      const stringValue = String(removeExponents(ele)).includes('.') ? String(removeExponents(ele).slice(0, 19)) : String(removeExponents(ele)).slice(0, 18);
      ele = ethers.utils.parseEther(stringValue);
      return ele;
    }
    return ele;
  })
}

export const convertFromWeiZapToZap = (coefficientArray) => {
  return coefficientArray.map((ele, i) => {
    if (![0, coefficientArray.length - 1].includes(i)) {
      return ele = Number(ele) * (10 ** -18);
    }
    return ele;

  })
}
