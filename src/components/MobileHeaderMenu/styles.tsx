import Image from 'next/image'
import styled from 'styled-components'

interface MobileHeaderMenuStyleProps {
  open: string
}

export default styled.div<MobileHeaderMenuStyleProps>`
  display: flex;
  opacity: ${({ open }) => (open === 'open' ? '0.92' : '0')};
  height: ${({ open }) => (open === 'open' ? '100vh' : '0px')};
  position: fixed;
  top: 80px;
  left: 0;
  overflow: hidden;
  width: 100%;
  background: black;
  justify-content: center;
  align-items: flex-start;
  z-index: ${({ open }) => (open === 'open' ? '10' : '0')};
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 30px;
  transition: all 0.5s ease;
`

export const MobileHeaderMenuContentWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const MobileHeaderMenuItem = styled.p`
  font-size: 34px;
  line-height: 38px;
  font-weight: 400;
  font-family: ${(p) => p.theme.fonts.secondary};
  @media (max-width: 767px) {
    font-size: 28px;
    line-height: 32px;
  }
`

export const MobileHeaderExternalLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`

export const MobileHeaderExternalLinkItem = styled.a`
  margin-left: 10px;
  margin-right: 10px;
`

export const MobileHeaderLinkItemLogo = styled(Image)``
