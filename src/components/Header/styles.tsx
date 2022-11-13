import Image from 'next/image'
import styled from 'styled-components'

export default styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  position: fixed;
  background-image: linear-gradient(
    180deg,
    #000,
    rgba(0, 0, 0, 0.8) 59%,
    transparent
  );
  z-index: 10;
`
export const HeaderContentWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1080px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1080px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

export const HeaderMenuItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  @media (max-width: 821px) {
    display: none;
  }
`

export const HeaderItem = styled.p`
  font-weight: light;
  letter-spacing: 1.5px;
  font-size: 16px;
  line-height: 18px;
  margin-right: 18px;
  text-decoration: none;
  :hover {
    text-decoration: underline 0.5px solid #fff;
    text-underline-offset: 8px;
  }
`

export const HeaderLogo = styled.div`
  font-size: 36px;
  line-height: 36px;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  font-family: 'Red Hat Mono', monospace;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
  :hover {
    animation: buzz-out-on-hover 0.75s;
  }
`

export const HeaderHamburgerMenuWrapper = styled.div`
  display: none;
  @media (max-width: 821px) {
    display: block;
  }
`
