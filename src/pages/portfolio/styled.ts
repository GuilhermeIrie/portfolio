import styled from 'styled-components'

export const SwitchComponent = styled.div`
  width: auto;
  background: #ffdede;
  border: 1px solid #eb1d36;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;
  padding: 4px 8px 4px 0;
  transform: scale(0.75);
`
export const ControlsWrapper = styled.div`
  display: flex;
  position: absolute;
  z-index: 50;
  max-width: 350px;
  transform: scale(0.9);
  align-items: center;
  justify-content: center;
`
