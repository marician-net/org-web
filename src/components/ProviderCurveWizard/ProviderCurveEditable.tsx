import React, { useContext } from 'react'
import styled from 'styled-components'
import { TokenWizardContext } from 'views/TokenWizard/contexts/TokenWizardProvider'
import BondingCurveProvider from './contexts/BondingCurveWizardProvider'
import ProviderCurveSvg from './components/ProviderCurveSvg'

const TemplateCont = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: column;
    width: 25%;
    justify-content: center;
  }
`

const TemplateButton = styled.button`
  width: 50px;
  height: 50px;
  margin: 10px;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 100px;
    height: 100px;
  }
  ${({ theme }) => theme.mediaQueries.xs} {
    width: 90px;
    height: 90px;
  }
`
const Curve = styled.img`
  width: 95%;
  height: 95%;
  margin: 2.5%;
`
const FieldCont = styled.div`
  width: 100%;
  display: flex;
  justify-contents: center;
  flex-direction: column;
`

const CurveInput = styled.input<{ error?: boolean }>`
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 100%;
  }
  font-size: 1.25rem;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 20px;
  text-align: center;
  align-self: center;
  width: 100%;
  max-width: 200px;
  background-color: ${({ theme }) => theme.colors.input};
  transition: color 300ms ${({ error }) => (error ? 'step-end' : 'step-start')};
  color: ${({ error, theme }) => (error ? theme.colors.failure : theme.colors.text)};
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  ::placeholder {
    color: ${({ theme }) => theme.colors.textDisabled};
  }
  padding: 10px;
  -webkit-appearance: textfield;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.textDisabled};
  }
`

const Info = styled.h4`
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 16px;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 24px;
  }
`

const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
  }
  ${FieldCont}:nth-child(1) {
    margin: 0px 0px 10px 0px;
    ${({ theme }) => theme.mediaQueries.sm} {
      margin: 0px 10px 0px 0px;
    }
  }
  ${FieldCont}:nth-child(2) {
    margin: 0px 0px 10px 0px;
    ${({ theme }) => theme.mediaQueries.sm} {
      margin: 0px 10px 0px 0px;
    }
  }
`

const CurveBox = styled(Box)`
  width: 248px;
  ${({ theme }) => theme.mediaQueries.xs} {
    width: 294px;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 746px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    width: 1152px;
    max-width: 1152px;
  }
`

const PCurveCont = styled.div`
  width: 248px;
  height: 248px;
  & svg {
    position: relative;
    left: -15px;
  }
  ${({ theme }) => theme.mediaQueries.xs} {
    width: 294px;
    height: 294px;
    & svg {
      left: 0px;
    }
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 560px;
    height: 560px;
    & svg {
      left: 0px;
    }
  }
  ${({ theme }) => theme.mediaQueries.md} {
    width: 864px;
    height: 864px;
    & svg {
      left: 0px;
    }
  }
`

const ProviderCurveWizard: React.FC = () => {
  const context = useContext(TokenWizardContext)
  const [curveHeight, setCurveHeight] = React.useState(null)
  const [curveWidth, setCurveWidth] = React.useState(null)
  const parent = React.useRef()
  React.useEffect(() => {
    if (parent.current) {
      // @ts-ignore: Object is possibly 'null'
      const rect = parent.current.getBoundingClientRect()
      if (window.innerWidth < 415) {
        setCurveHeight(rect.height - 30)
        setCurveWidth(rect.height - 30)
      } else {
        setCurveHeight(rect.height)
        setCurveWidth(rect.height)
      }
    }
  }, [parent])

  const thumbnailParams = {
    key: context.tokenName,
    existingCoefficientArray: context.coeffArray,
    editable: true,
    bonded: false,
    bonding: false,
    axesOptions: {
      xAxisTicks: 3,
      yAxisTicks: 3,
      showLabels: true,
      tickSize: 1,
    },
    zoomFit: 1,
    tokenSymbol: context.tokenSymbol,
  }

  const changed = (key: string, value: string) => (e) => {
    const newVal = e.target.value.trim()
    const empty = newVal.length <= 0
    context.tokenWizardActions.handleChange(key, value, empty, newVal)
  }

  return (
    <>
      <BondingCurveProvider>
        <CurveBox>
          <PCurveCont ref={parent}>
            {curveWidth ? (
              <ProviderCurveSvg props={thumbnailParams} _parentHeight={curveHeight} _parentWidth={curveWidth} />
            ) : null}
          </PCurveCont>

          <TemplateCont id="sidebar">
            <TemplateButton value="stable-graph">
              <Curve src="/static/images/Stable.svg" alt="stable template" id="templateA" />
            </TemplateButton>
            <TemplateButton value="linear-positive">
              <Curve src="/static/images/linear.svg" alt="stable template" id="templateB" />
            </TemplateButton>
            <TemplateButton value="incentivize-early-adoption">
              <Curve src="/static/images/earlyAdoption.svg" alt="stable template" id="templateC" />
            </TemplateButton>
          </TemplateCont>
        </CurveBox>
        <Box style={{ margin: '24px 0px' }}>
          <FieldCont>
            <Info>Curve Formula</Info>
            <CurveInput id="curveFormulaInput" placeholder="Enter Curve Here" />
          </FieldCont>
          <FieldCont>
            <Info>X Axis</Info>
            <CurveInput placeholder="Enter X Axis Here" defaultValue={context.xAxis} id="maxXAxis" type="number" />
          </FieldCont>
          <FieldCont>
            <Info>Y Axis</Info>
            <CurveInput placeholder="Enter Y Axis Here" defaultValue={context.yAxis} id="maxYAxis" type="number" />
          </FieldCont>
        </Box>
        <Box style={{ display: 'none' }}>
          <CurveInput
            onChange={changed('coeffArray', 'coeffArrayEmpty')}
            id="coefficientArrayInput"
            placeholder="Enter Coeff Array Here"
            defaultValue={context.coeffArray.toString()}
          />
        </Box>
      </BondingCurveProvider>
    </>
  )
}

export default ProviderCurveWizard
