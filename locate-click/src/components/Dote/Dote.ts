import styled from "styled-components";
import { IPositions } from "../../Types/Positions";

const setDot = (positionX: number, positionY: number) => {
  return `
    top: ${positionY}px;
    left: ${positionX}px;
  `
}

export const ContainerDote = styled.div<IPositions>`
  width: 10px;
  height: 10px;
  border-radius: 50%;

  background-color: white;

  position: absolute;


  ${({ positionX, positionY }) => setDot(positionX, positionY)};
`