import React, { useState } from 'react'
import { ContainerApp } from './styles/ContainerApp'
import { IPositions } from './Types/Positions'
import DoteCLick from './components/Dote/DoteCLick'

import Button from './components/Buttons/Button'

function App() {
  const [positions, setPositions] = useState<IPositions[]>([])
  const [undonPositions, setUndonPositions] = useState<IPositions[]>([])

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setPositions(prev => {
      const newPrev = [
        ...prev,
        {
          positionX: e.clientX,
          positionY: e.clientY
        }
      ]

      return newPrev
    })

    setUndonPositions([]) // Se ele clicar limpa o array de desfeitos
  }

  const handleUndo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()

    if (positions.length === 0) {
      return
    }

    const lastPosition = positions.at(-1) as IPositions
    setUndonPositions(prev => {
      return [...prev, lastPosition]
    })

    setPositions(prev => {
      const newPrev = [...prev].slice(0, -1)
      return newPrev
    })
  }

  const handleRedo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()

    const lastItem = undonPositions.at(-1) as IPositions

    if (undonPositions.length === 0) {
      return
    }

    setUndonPositions(prev => {
      const newPrev = [...prev].slice(0, -1)
      return newPrev
    })

    setPositions(prev => [...prev, lastItem])
  }

  return (
    <ContainerApp onClick={handleClick}>
      <div className="buttons">
        <Button text="Redo" onClick={handleRedo} />
        <Button text="Undo" onClick={handleUndo} />
      </div>
      {positions.map(position => (
        <DoteCLick
          positionX={position.positionX}
          positionY={position.positionY}
        />
      ))}
    </ContainerApp>
  )
}

export default App
