import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ReactCardFlip from 'react-card-flip'
import ZapLabToken from 'entities/zapLabToken'
import { useSingleLabToken } from 'hooks/useZapTokens'
import { updateOne } from 'state/zaplabs/actions'
import { useDispatch } from 'react-redux'
import useWeb3 from 'hooks/useWeb3'
import { getBondageContract, getRegistryContract } from 'utils/contractHelpers'
import DetailsCard from './DetailsCard'
import BondUICard from './BondUICard'

export interface BondCardProps {
  token: ZapLabToken
}

const CenterFlip = styled(ReactCardFlip)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const Size = styled.div`
  max-width: 550px;
  width: 90%;
  margin: auto;
`

const BondCard: React.FC<BondCardProps> = ({ token }) => {
  const [flipped, setFlipped] = useState(false)

  const handleFlip = () => {
    setFlipped(!flipped)
  }

  const web3 = useWeb3()
  const chainId = parseInt(((web3.currentProvider as unknown) as { [key: string]: string }).chainId, 16)
  const registry = getRegistryContract(web3, chainId)
  const bondage = getBondageContract(web3, chainId)
  console.log('CONTRACTS', registry, bondage, chainId)

  const dispatch = useDispatch()

  const refresh = () => {
    useSingleLabToken(token.providerAddress, token.name, registry, bondage, web3).then((r) => {
      dispatch<any>(updateOne({ one: r.getObject() }))
    })
  }

  useEffect(() => {
    refresh()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Size>
      <CenterFlip isFlipped={flipped}>
        <BondUICard token={token} handleFlip={handleFlip} refresh={refresh} />
        <DetailsCard handleFlip={handleFlip} token={token} />
      </CenterFlip>
    </Size>
  )
}

export default BondCard
