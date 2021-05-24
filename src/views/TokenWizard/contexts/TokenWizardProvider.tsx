
import React, { useReducer, createContext, useMemo } from 'react'
import { AbiItem } from 'web3-utils'
import Web3 from 'web3'
import { Actions, State, ContextType } from './types'
import { abi, tokenBytes} from '../constants/constants'



const initialState: State = {
    currentStep : 0,
    providerTitle: "",
    tokenName: "",
    tokenNameEmpty: true,
    tokenSymbol: "",
    totalSteps: 1,
    tokenSymbolEmpty: true,
    previousContract: "",
    curveFormula: "y = x",
    curveEmpty: false,
    maxSupply: 10000,
    maxSupplyEmpty: false,
    coeffArray: [2, 0, 1000000000000000000, 10000],
    noEdit: false,
    noChange: false,
    uniqueName: true,
    uniqueSymbol: true,
    contractStep: 0,
    pending:false,
    xAxis: 10000,
    yAxis:10000,
    xAxisEmpty:false,
    yAxisEmpty:false,
    invalidArray:false,
    publicKey: "",
    registryContract: null,
    tokenAddress: ""
}

const SampleNames = ["Test Token", "Token", "Sample Token"]
const SampleSymbols = ["TT", "TKN", "SAMP", "STKN"]

const factory = {
    1:  "0xe13fef4c8e75c12f9706e8bdf28fe847ce99cb42",
    42: "0xeC97E4896cF9f067a9dD428760316024EA0cfc12",
    31337: "0x36c02da8a0983159322a80ffe9f24b1acff8b570",

}

const coordinator = {
    1: "0xb007eca49763f31edff95623ed6c23c8c1924a16",
    42: "0xAE00FCD8044dAB86b583896e8d1A078D9416c06d",
    31337: "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512"
}

const reducer = (state: State, action: Actions): State => {
    switch(action.type) {
        case 'set_value' : 
            return {
                ...state,
                [action.key]: action.value
        }
        case 'handle_drag_curve':
            return {
                ...state, 
                coeffArray: action.dragArgs, 
                invalidArray: false
            }
        case "handle_next": 
            return {
                ...state,
                currentStep: state.currentStep + 1,
                totalSteps: state.totalSteps + 1,
            }
        case "handle_prev": 
            return {
                ...state,
                currentStep: state.currentStep - 1
            }
        case "jump_step": 
            return {
                ...state,
                currentStep: action.step
            }
        case "max_supply":
            if(state.xAxis >= action.newVal){
                const array = state.coeffArray
                array[array.length - 1] = action.newVal
                return {
                    ...state,
                    maxSupply: action.newVal,
                    maxSupplyEmpty: action.empty,
                    coeffArray: array
                }
            }
                return {
                    ...state,
                    maxSupply: state.maxSupply,
                    maxSupplyEmpty: state.maxSupplyEmpty,
                    coeffArray: state.coeffArray,
                }
            
        case "checked":
            return {
                ...state,
                [action.key]: action.value
            }
        case "token_name":
            return {
                ...state,
                tokenName: action.newVal,
                tokenNameEmpty: action.empty,
                uniqueName: action.uniqueName
            }
        case "token_symbol":
            return {
                ...state,
                tokenSymbol: action.newVal,
                tokenSymbolEmpty: action.empty,
                uniqueSymbol: action.uniqueSymbol
            }
        case "default_change":
            return {
                ...state,
                [action.inputField]: action.newVal, 
                [action.inputFieldEmpty]: action.empty
            }
        case "handle_axes_args":
            return {
                ...state,
                xAxis: action.xAxis,
                yAxis: action.yAxis,
                coeffArray: action.curveArray
            }
        case "next_contract":
            return {
                ...state,
                contractStep: action.value,
                pending: false
            }
        case "pending":
            return {
                ...state,
                pending: true,
            }
        case "set_title":
            return {
                ...state,
                providerTitle: action.title
            }
        default:
            return state
    }
}

export const TokenWizardContext = createContext<ContextType>(null)

const TokenWizardProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const tokenWizardActions: ContextType['tokenWizardActions'] = useMemo(
        () => ({
            setValue: (key: string, value: any | null) => dispatch({type: 'set_value', key, value}),

            handleDragCurve: (dragArgs: Array<number>) => dispatch({type: 'handle_drag_curve', dragArgs}),

            handleAxesArgs: (maxXAxis: number, maxYAxis: number, curveArray: number[]) => {
                dispatch({type: 'handle_axes_args', xAxis: maxXAxis, yAxis: maxYAxis, curveArray})
            },

            handleNext: () => dispatch({type: 'handle_next'}),

            handlePrev: () => dispatch({type: 'handle_prev'}),

            jumpStep: (step: number) => dispatch({type: 'jump_step', step}),
            
            handleChange: (inputField: string, inputFieldEmpty: string, empty: boolean, newString?: string, newNum?: number) => {
                let newVal
                switch(inputField){
                    case "maxSupply":
                        newVal = parseInt(newString)
                        dispatch({type: "max_supply", newVal, empty})
                        break
                    case "tokenName":
                        newVal = newString
                        const uniqueName = !SampleNames.includes(newVal)
                        dispatch({type: "token_name", newVal, empty, uniqueName})
                        break
                    case "tokenSymbol":
                        newVal = newString.toUpperCase()
                        const uniqueSymbol = !SampleSymbols.includes(newVal)
                        dispatch({type: "token_symbol", newVal, empty, uniqueSymbol})
                        break
                    default:
                        newVal = newString
                        dispatch({type: "default_change", newVal, empty, inputField, inputFieldEmpty})
                }
            },

            handleCheckBox: (key: string, value: boolean) => {
                dispatch({type: "checked", key, value})
            },

            handleSetTitle: (title: string) => {
                dispatch ({type: "set_title", title})
            },

            ContractClick: async (context: State, account: string, web3: Web3, chainId: number) => {
                dispatch({type: "pending"})
                switch(context.contractStep){
                    case 0:
                        const deployToken = new web3.eth.Contract(abi as AbiItem[])

                        const gasPrice = await web3.eth.getGasPrice()

                        const estimateGas = await deployToken.deploy({
                            // eslint-disable-next-line prefer-template
                            data: tokenBytes,
                            arguments: [coordinator[chainId], factory[chainId], context.publicKey, context.providerTitle],
                        }).estimateGas({from: account})

                        await deployToken.deploy({
                            // eslint-disable-next-line prefer-template
                            data: tokenBytes,
                            arguments: [coordinator[chainId], factory[chainId], context.publicKey, context.providerTitle],
                          }).send({
                            from: account,
                            gasPrice,
                            // 1000000000
                            gas: estimateGas,
                          })
                          .on('error', (error) => {
                            console.log(error)
                          })
                          .on('transactionHash', (transactionHash) => {
                            console.log(transactionHash, "factory transaction hash")
                          })
                          .on('confirmation', (confirmationNumber, receipt) => {
                            dispatch({type: "set_value", key:"previousContract", value: receipt.contractAddress})
                            dispatch({type:"next_contract", value: 1})
                          });
                        break
                    case 1:
                        console.log(context)
                        const contract = new web3.eth.Contract((abi as unknown) as AbiItem, context.previousContract)
                        const symbol = web3.utils.asciiToHex(context.tokenSymbol)
                        const name = web3.utils.asciiToHex(context.tokenName)
                        contract.methods.initializeCurve(name, symbol, context.coeffArray).send({from:account})
                        .on("confirmation", (confirmationNumber, receipt)=>{
                            console.log(receipt)
                            dispatch({type:"next_contract", value: 2}) 
                        })
                        break
                    default: 
                }
            }


        }),[dispatch]
    )

    return <TokenWizardContext.Provider value ={{...state, tokenWizardActions}}>{children}</TokenWizardContext.Provider>
}

export default TokenWizardProvider