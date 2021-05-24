import { Contract } from '@ethersproject/contracts'
import Web3 from 'web3'

export type Actions =
  | { type: 'set_value'; key: string; value: any | null }
  | { type: 'handle_drag_curve'; dragArgs: Array<number> }
  | {type: 'handle_next'}
  | {type: 'handle_prev'}
  | {type: 'jump_step'; step: number}
  | {type: "next_contract"; value: number}
  | {type: "pending"}
  | {type: "max_supply", newVal:number, empty:boolean}
  | {type: "token_name", newVal: string, empty: boolean, uniqueName: boolean}
  | {type: "token_symbol", newVal: string, empty:boolean, uniqueSymbol:boolean}
  | {type: "default_change", newVal: string, empty: boolean, inputField: string, inputFieldEmpty: string}
  | {type: "checked", key: string, value: boolean }
  | {type: 'handle_axes_args', xAxis: number, yAxis: number, curveArray: number[]}
  | {type: "set_title", title: string}

export interface State {
  tokenAddress: string,
  publicKey: string,
  providerTitle: string,
  currentStep : number,
  tokenName: string,
  tokenNameEmpty: boolean,
  tokenSymbol: string,
  tokenSymbolEmpty: boolean,
  previousContract: string,
  curveFormula: string,
  curveEmpty: boolean,
  maxSupply: number,
  maxSupplyEmpty: boolean,
  coeffArray: Array<number>,
  noEdit: boolean,
  noChange: boolean,
  uniqueName: boolean,
  uniqueSymbol: boolean,
  contractStep: number,
  pending: boolean,
  xAxis: number,
  yAxis: number,
  xAxisEmpty: boolean,
  yAxisEmpty: boolean,
  invalidArray: boolean,
  registryContract: Contract | null,
  totalSteps: number,
}

export interface ContextType extends State {
  tokenWizardActions: {
    setValue: (key: string, value: any | null) => void
    handleDragCurve: (dragArgs: Array<number>) => void
    handleNext: () => void
    handlePrev: () => void
    ContractClick: (context: State, account: string, web3: Web3, chainId: number) => void
    jumpStep: (step: number) => void
    handleChange: (inputField: string, inputFieldEmpty: string, empty: boolean, newString?: string, newNum?: number) => void
    handleCheckBox: (key: string, value: boolean) => void
    handleAxesArgs: (maxXAxis: number, maxYAxis: number, curveArray: number[]) => void
    handleSetTitle: (title: string) => void
  }
}
