import React from 'react'
import styled from 'styled-components'
import {
  ChevronRightIcon,
  Button as UIKitButton,
  AutoRenewIcon,
  ChevronDownIcon,
  Box,
  Flex,
} from 'toolkitUI'
import useI18n from 'hooks/useI18n'

interface ApproveConfirmButtonsProps {
  isApproveDisabled: boolean
  isApproving: boolean
  onApprove: () => void
}

const StyledApproveConfirmButtons = styled.div`
  margin-right: 30px
`
// const StyledApproveConfirmButtons = styled.div`
//   align-items: center;
//   display: grid;
//   grid-template-columns: 1fr;
//   justify-content: center;

//   ${({ theme }) => theme.mediaQueries.md} {
//     grid-template-columns: 1fr 24px 1fr;
//   }
// `

const Button = styled(UIKitButton)`
  width: 100%;
  background: ${({ disabled, theme }) => disabled ? null : theme.colors.gradients.buttongum};

  ${({ theme }) => theme.mediaQueries.md} {
    min-width: 160px;
  }
`

const spinnerIcon = <AutoRenewIcon color="white" />

const ApproveConfirmButtons: React.FC<ApproveConfirmButtonsProps> = ({
  isApproveDisabled,
  isApproving,
  onApprove,
}) => {
  const TranslateString = useI18n()

  return (
    <StyledApproveConfirmButtons>
      <Box>
        <Button
          disabled={isApproveDisabled}
          onClick={onApprove}
          endIcon={isApproving ? spinnerIcon : undefined}
          // isLoading={isApproving}
        >
          {isApproving ? TranslateString(800, 'Approving') : TranslateString(564, 'Approve')}
        </Button>
      </Box>
      {/* <Flex justifyContent="center">
        <ChevronRight />
        <ChevronBottom />
      </Flex>
      <Box>
        <Button
          onClick={onConfirm}
          disabled={isConfirmDisabled}
          isLoading={isConfirming}
          endIcon={isConfirming ? spinnerIcon : undefined}
        >
          {isConfirming ? TranslateString(802, 'Confirming') : TranslateString(464, 'Confirm')}
        </Button>
      </Box> */}
    </StyledApproveConfirmButtons>
  )
}

export default ApproveConfirmButtons