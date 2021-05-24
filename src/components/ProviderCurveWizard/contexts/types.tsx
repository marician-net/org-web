export type Actions = { type: 'set_value'; key: string; value: any | null }

export interface State {
  margin: Record<string, any>
  width: any
  height: any
  pointsOriginal: Array<Array<number>>
  points: Array<Array<number>>
  coefficientArray: Array<number>
  k: number /// Tracks number of previous control points after adding subsequent curves, subtracting overlap
  numActivePoints: number
  initialCoefficientArrayInput: string
  previousNumActivePoints: number
  previewCurveOn: boolean /// Set default for preview curve feature to be false
  addCurveButtonDragging: boolean /// When true, click to add control point nullified
  mousePositionX: number | null
  freezeGraph: boolean
  axesInitialized: boolean
  inputChanging: boolean
  clickedCoordinates: Array<number> | null
  pointsPreview: Array<Array<number>>
  curveTracingCircleRadius: number
  dotSupplyScale: number
  zapCostScale: number
  zoomFitScaleX: number
  zoomFitScaleY: number
  formulaValue: string
  renderOnce: boolean
}

export interface ContextType extends State {
  bondingCurveActions: {
    setValue: (key: string, value: any | null) => void
  }
}
