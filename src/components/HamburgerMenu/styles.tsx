import styled from 'styled-components'

interface Props {
  state: string
}

export default styled.div`
  width: 40px;
  height: 30px;
  padding: 0;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
`

export const HamburgerMenuLine = styled.span<Props>`
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: #fff;
  border-radius: 3px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
  :nth-child(1) {
    top: ${({ state }) => (state === 'open' ? '12px' : '0px')};
    width: ${({ state }) => (state === 'open' ? '0%' : 'undefined')};
    left: ${({ state }) => (state === 'open' ? '50%' : 'undefined')};
  }
  :nth-child(2) {
    top: 12px;
    -webkit-transform: ${({ state }) =>
      state === 'open' ? 'rotate(45deg)' : 'undefined'};
    -moz-transform: ${({ state }) =>
      state === 'open' ? 'rotate(45deg)' : 'undefined'};
    -o-transform: ${({ state }) =>
      state === 'open' ? 'rotate(45deg)' : 'undefined'};
    transform: ${({ state }) =>
      state === 'open' ? 'rotate(45deg)' : 'undefined'};
  }
  :nth-child(3) {
    top: 12px;
    -webkit-transform: ${({ state }) =>
      state === 'open' ? 'rotate(-45deg)' : 'undefined'};
    -moz-transform: ${({ state }) =>
      state === 'open' ? 'rotate(-45deg)' : 'undefined'};
    -o-transform: ${({ state }) =>
      state === 'open' ? 'rotate(-45deg)' : 'undefined'};
    transform: ${({ state }) =>
      state === 'open' ? 'rotate(-45deg)' : 'undefined'};
  }
  :nth-child(4) {
    top: ${({ state }) => (state === 'open' ? '12px' : '24px')};
    width: ${({ state }) => (state === 'open' ? '0%' : 'undefined')};
    left: ${({ state }) => (state === 'open' ? '50%' : 'undefined')};
  }
`
