import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { Input } from 'toolkitUI'

const StyledInput = styled(Input)`
  border-radius: 16px;
  margin-left: auto;
  box-shadow: none;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: unset;
  color: ${({ theme }) => theme.colors.primary};
  &::placeholder {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.sm} {
    display: block;
  }
`

const Container = styled.div<{ toggled: boolean }>``

interface Props {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchInput: React.FC<Props> = ({ value, onChange }) => {
  const [toggled, setToggled] = useState(false)
  const inputEl = useRef(null)

  return (
    <Container toggled={toggled}>
      <InputWrapper>
        <StyledInput
          ref={inputEl}
          value={value}
          onChange={onChange}
          placeholder="Search for Tokens"
          onBlur={() => setToggled(false)}
        />
      </InputWrapper>
    </Container>
  )
}

export default SearchInput
