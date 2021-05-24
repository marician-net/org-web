import styled from 'styled-components'

const CurveSVG = styled.svg`
    border-radius: 5px;
    z-index: 100;
    min-width: 100%;
    display: flex;
    transform: translate(0%; -0%);
    & g {
        height: 100%;
    };
    & g .curveTracingCircle {
        fill: #a9cade;
        };
    & g .controlPoint {
        fill: white;
        stroke: #0078fe96;
        cursor: move;
        stroke-width: 4;
      };
    & g .path {
      fill: none;
      stroke-width: 3;
      stroke: #0078fe;
    };
    & g .previewPath {
      fill: none;
      stroke-width: 1;
      stroke: steelblue;
    };
    & g .savedPath {
      fill: none;
      stroke-width: 1;
      stroke: black;
    };
    & text {
      fill: ${({ theme }) => theme.colors.primary};
      font-size: 8px;
      font-family: Helvetica;
      font-weight: bolder;
      user-select: none;
      ${({ theme }) => theme.mediaQueries.sm}{
        font-size: 14px;
      }
    };
    & g .bondedDotsLine {
      stroke-dasharray: 2.5;
      stroke-width: 3;
    };
    & g .newBondedDotsLine {
      stroke-dasharray: 2.5;
      stroke-width: 3;
    };
    & g .axisText {
        fonst-size: smaller;
      ${({ theme }) => theme.mediaQueries.xs}{
        font-size: small;
      }
      ${({ theme }) => theme.mediaQueries.sm}{
        font-size: medium;
      }
    };
    
`

export default CurveSVG
