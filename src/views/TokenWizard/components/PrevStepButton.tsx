import React from 'react'
import { ArrowBackIcon, Button, ButtonProps } from 'toolkitUI'

const PrevStepButton: React.FC<ButtonProps> = (props) => {
  return <Button startIcon={<ArrowBackIcon color="currentColor" />} {...props} />
}

export default PrevStepButton