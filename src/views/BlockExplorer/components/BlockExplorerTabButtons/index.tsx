import React from 'react'
import styled from 'styled-components'
import { useRouteMatch, Link, matchPath, useLocation } from 'react-router-dom'
import useI18n from 'hooks/useI18n'
import { ButtonMenu, ButtonMenuItem } from 'toolkitUI'

const FarmTabButtons = () => {
  const { url, isExact } = useRouteMatch()
  const TranslateString = useI18n()
  const { pathname } = useLocation()
  let activeIndex = 0
  switch (true) {
    case pathname.includes('bonded'):
      activeIndex = 1
      break
    case pathname.includes('burned'):
      activeIndex = 2
      break
    default:
      activeIndex = 0
      break
  }

  return (
    <Wrapper>
      <ButtonMenu activeIndex={activeIndex} scale="sm" variant="subtle">
        <ButtonMenuItem as={Link} to={`${url}`}>
          {TranslateString(1198, 'All')}
        </ButtonMenuItem>
        <ButtonMenuItem as={Link} to={`${url}/bonded`}>
          {TranslateString(1198, 'Bonded')}
        </ButtonMenuItem>
        <ButtonMenuItem as={Link} to={`${url}/burned`}>
          {TranslateString(388, 'Burned')}
        </ButtonMenuItem>
      </ButtonMenu>
    </Wrapper>
  )
}

export default FarmTabButtons

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    padding-left: 12px;
    padding-right: 12px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 16px;
  }
`
