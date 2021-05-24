import { useCallback, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useActiveWeb3React } from 'hooks'
import { addPopup, PopupContent, removePopup, toggleWalletModal, toggleSettingsMenu } from './actions'
import { AppState } from '../index'

export function useBlockNumber(): number | undefined {
    let account; let chainId; let library;
  try{
    ({account} = useActiveWeb3React())
  }catch(error){
    account = null 
    console.log(error)
  }
  try{
    ({chainId} = useActiveWeb3React())
  }catch(error){
    chainId = null 
    console.log(error)
  }
  try{
    ({library} = useActiveWeb3React())
  }catch(error){
    library = null 
    console.log(error)
  }


  return useSelector((state: AppState) => state.application.blockNumber[chainId ?? -1])
}

export function useWalletModalOpen(): boolean {
  return useSelector((state: AppState) => state.application.walletModalOpen)
}

export function useWalletModalToggle(): () => void {
  const dispatch = useDispatch()
  return useCallback(() => dispatch(toggleWalletModal()), [dispatch])
}

export function useSettingsMenuOpen(): boolean {
  return useSelector((state: AppState) => state.application.settingsMenuOpen)
}

export function useToggleSettingsMenu(): () => void {
  const dispatch = useDispatch()
  return useCallback(() => dispatch(toggleSettingsMenu()), [dispatch])
}

// returns a function that allows adding a popup
export function useAddPopup(): (content: PopupContent, key?: string) => void {
  const dispatch = useDispatch()

  return useCallback(
    (content: PopupContent, key?: string) => {
      dispatch<any>(addPopup({ content, key }))
    },
    [dispatch]
  )
}

// returns a function that allows removing a popup via its key
export function useRemovePopup(): (key: string) => void {
  const dispatch = useDispatch()
  return useCallback(
    (key: string) => {
      dispatch<any>(removePopup({ key }))
    },
    [dispatch]
  )
}

// get the list of active popups
export function useActivePopups(): AppState['application']['popupList'] {
  const list = useSelector((state: AppState) => state.application.popupList)
  return useMemo(() => list.filter(item => item.show), [list])
}
