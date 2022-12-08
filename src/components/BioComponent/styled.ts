import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  background: #eb1d3660;
  width: 100%;
  padding: 16px;
  font-size: 16px;
`

export const Wrapper = styled.div`
  width: 100%;
  height: 350px;
  background: #00000090;
  border-radius: 8px;
  padding: 16px;
  color: #fff;
`
export const Content = styled.div`
  margin: auto;
  max-width: 1024px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  text-align: justify;
`

export const ImageWrapper = styled.div`
  width: 250px;
  min-width: 250px;
  margin-left: 32px;
  height: 300px;
  border: 1px solid #fff;
  border-radius: 8px;
  overflow: hidden;
  filter: grayscale(1);
  transition: all 1s;
  user-select: none;
  &:hover {
    filter: none;
    transition: all 1s;
  }
  img {
    background-color: #0f0f0f;
  }
`
