import React from 'react'
import { IPositions } from '../../Types/Positions'
import { ContainerDote } from './Dote'

export const DoteCLick = ({ positionX, positionY }: IPositions) => {
  return <ContainerDote positionX={positionX} positionY={positionY} />
}

export default DoteCLick
