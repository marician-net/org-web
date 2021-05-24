import React, { useReducer, createContext, useMemo, useEffect, useState } from 'react'
import { Actions, State, ContextType } from './types'

const initialState: State = {
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
  pointsOriginal: [],
  points: [],
  width: 0,
  height: 0,
  coefficientArray: [],
  k: 0, /// Tracks number of previous control points after adding subsequent curves, subtracting overlap
  numActivePoints: 0,
  initialCoefficientArrayInput: '',
  previousNumActivePoints: 0,
  previewCurveOn: false, /// Set default for preview curve feature to be false
  addCurveButtonDragging: false, /// When true, click to add control point nullified
  mousePositionX: null,
  freezeGraph: false,
  axesInitialized: false,
  inputChanging: false,
  clickedCoordinates: null,
  pointsPreview: [],
  curveTracingCircleRadius: 6,
  dotSupplyScale: 1,
  zapCostScale: 1,
  zoomFitScaleX: 1,
  zoomFitScaleY: 1,
  formulaValue: 'y = x',
  renderOnce: false,
}

const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case 'set_value':
      return {
        ...state,
        [action.key]: action.value,
      }
    default:
      return state
  }
}

export const BondingCurveContext = createContext<ContextType>(null)

const BondingCurveProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const bondingCurveActions: ContextType['bondingCurveActions'] = useMemo(
    () => ({
      setValue: (key: string, value: any | null) => dispatch({ type: 'set_value', key, value }),
    }),
    [dispatch],
  )

  return (
    <BondingCurveContext.Provider value={{ ...state, bondingCurveActions }}>{children}</BondingCurveContext.Provider>
  )
}

export default BondingCurveProvider
