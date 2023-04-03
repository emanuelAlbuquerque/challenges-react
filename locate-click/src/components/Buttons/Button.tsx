import React from 'react'
import { ContainerButton } from './style'

interface IButton {
  text: string
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button = ({ onClick, text }: IButton) => {
  return <ContainerButton onClick={onClick}>{text}</ContainerButton>
}

export default Button
