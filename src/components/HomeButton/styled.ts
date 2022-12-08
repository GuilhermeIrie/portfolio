import styled from 'styled-components'

export const ButtonContainer = styled.div`
  cursor: pointer;
  padding: 8px 24px;
  margin-top: -465px;
  a {
    text-decoration: none;
    color: inherit;
  }
  outline: none;
  user-select: none;
`

export const TextLink = styled.div`
  font-size: 20px;
  text-align: center;
  color: inherit;
  outline: none;
  user-select: none;
  margin-top: 8px;
`

export const Button = styled.div`
  position: relative;
  padding: 8px 24px;
  color: inherit;
  text-transform: uppercase;
  transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
  cursor: pointer;
  user-select: none;
  background-color: #ffffff50;
  //border: 1px solid${props => props.theme.colors.text};
  border-radius: 48px;

  &:after {
    content: '';
    position: absolute;
    transition: inherit;
    z-index: -1;
  }
  &:before {
    content: '';
    position: absolute;
    transition: inherit;
    z-index: -1;
  }

  &:hover {
    span {
      background-image: linear-gradient(90deg, red, blue, orange, purple);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      transition-delay: 0.5s;
    }
    transition-delay: 0.5s;
    &:after {
      background: ${props => props.theme.colors.text};

      transition-delay: 0.35s;
    }
    &:before {
      transition-delay: 0s;
    }
  }
`

export const ButtonDlc = styled(Button)`
  &:before {
    top: 0;
    left: 50%;
    height: 100%;
    width: 0;
    border-radius: '50%';
    border: 1px solid ${props => props.theme.colors.text};
    border-left: 0;
    border-right: 0;
  }
  &:after {
    bottom: 0;
    left: 0;
    height: 0;
    width: 100%;
    background: ${props => props.theme.colors.text};
  }
  &:hover {
    border-radius: '50%';
    background-color: ${props => props.theme.colors.text};
    &:before {
      left: 0;
      width: 100%;
    }
    &:after {
      top: 0;
      height: 100%;
    }
  }
`
