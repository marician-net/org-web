import React, { useContext } from 'react'
import styled from 'styled-components'
import BondingCurveProvider from './contexts/BondingCurveWizardProvider'
import ProviderCurveSvg from './components/ProviderCurveSvg'

const PCurveCont = styled.div`
  width: 248px;
  height: 248px;
  ${({ theme }) => theme.mediaQueries.xs} {
    width: 275px;
    height: 275px;
    margin: auto;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 560px;
    height: 560px;
    & svg {
      position: relative;
      left: 15px;
    }
  }
`

const ProviderCurveThumbnail: React.FC<{ thumbnailParams: any }> = ({ thumbnailParams }) => {
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
  return (
    <>
      <BondingCurveProvider>
        <PCurveCont ref={parent}>
          {curveWidth ? (
            <ProviderCurveSvg props={thumbnailParams} _parentHeight={curveHeight} _parentWidth={curveWidth} />
          ) : null}
        </PCurveCont>
      </BondingCurveProvider>
    </>
  )
}

ProviderCurveThumbnail.defaultProps = {}

export default ProviderCurveThumbnail
