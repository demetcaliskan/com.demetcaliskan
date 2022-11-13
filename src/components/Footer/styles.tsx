import styled from 'styled-components'

interface FooterStyleProps {
  copyrightPlacement: string
}

export default styled.footer`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100px;
  background: ${(p) => p.theme.colors.secondary};
  @media (max-width: 767px) {
    height: 160px;
  }
`

export const FooterContentWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1080px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 1080px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
  }
`
export const FooterItem = styled.p`
  font-family: ${(p) => p.theme.fonts.secondary};
  font-weight: 400;
  margin-bottom: 12px;
  font-size: 14px;
  color: ${(p) => p.theme.colors.tertiary};
  a {
    font-weight: 400;
    font-family: ${(p) => p.theme.fonts.secondary};
  }
  @media (max-width: 767px) {
    text-align: center;
    margin-top: 0px;
  }
`

export const FooterExternalLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`

export const FooterItemsColumnWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`

export const FooterCopyrightText = styled.p<FooterStyleProps>`
  font-family: ${(p) => p.theme.fonts.secondary};
  font-weight: 400;
  color: ${(p) => p.theme.colors.primary};
  font-size: 12px;
  background: ${(p) => p.theme.colors.tertiary};
  padding: 2px 8px;
  margin: 0px;
  display: ${({ copyrightPlacement }) =>
    copyrightPlacement === 'top' ? 'flex' : 'none'};
  @media (max-width: 767px) {
    margin-top: 8px;
    display: ${({ copyrightPlacement }) =>
      copyrightPlacement === 'bottom' ? 'flex' : 'none'};
  }
`
