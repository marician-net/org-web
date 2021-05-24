import React, { useEffect, useCallback, useState } from 'react'
import styled from 'styled-components'
import Page from 'components/layout/Page'
import { Image, Text } from 'toolkitUI'
import { useZapLabTokens } from 'hooks/useZapTokens'
import { useDispatch, useSelector } from 'react-redux'
import { getNames, updateOne, clear } from 'state/zaplabs/actions'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { AppState } from 'state/index'
import ZapLabToken from 'entities/zapLabToken'
import BondCard from './components/BondCard/BondCard'

export interface BondPagePops extends RouteComponentProps<{ key?: string }> {
  address?: string
  endpoint?: string
}

const ControlContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;

  justify-content: space-between;
  flex-direction: column;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 16px 32px;
  }
`

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;

  ${Text} {
    margin-left: 8px;
  }
`

const LabelWrapper = styled.div`
  > ${Text} {
    font-size: 12px;
  }
`

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 0px;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: auto;
    padding: 0;
  }
`

const ViewControls = styled.div`
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
  align-items: center;
  width: 100%;

  > div {
    padding: 8px 0px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: flex-start;
    width: auto;

    > div {
      padding: 0;
    }
  }
`

const StyledImage = styled(Image)`
  margin-left: auto;
  margin-right: auto;
  margin-top: 58px;
`

const Header = styled.div`
  padding: 32px 0px;
  background: ${({ theme }) => theme.colors.gradients.bubblegum};

  padding-left: 16px;
  padding-right: 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Bond: React.FC<BondPagePops> = ({ match }) => {
  const key = decodeURIComponent(match.params.key)

  const registered = useSelector<AppState, AppState['zapLabs']['registered']>((state) => state.zapLabs.registered)
  const selected = registered[key]

  let token = new ZapLabToken()

  token = { ...token, ...selected }

  return (
    <>
      <Page>
        <BondCard token={token} />
      </Page>
    </>
  )
}

export default withRouter(Bond)
