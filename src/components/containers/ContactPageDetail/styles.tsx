import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1080px;
  justify-content: center;
  align-items: center;
  @media (max-width: 1080px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

export const TitleDivider = styled.div`
  display: flex;
  height: 0.5px;
  background: ${(p) => p.theme.colors.secondary};
  width: 100%;
  max-width: 900px;
  margin-bottom: 44px;
`

export const ContactPageTitle = styled.h1`
  font-family: ${(p) => p.theme.fonts.tertiary};
  cursor: pointer;
  font-size: 42px;
  line-height: 42px;
  font-weight: 200;
  color: #0000;
  text-shadow: 0 0 ${(p) => p.theme.colors.secondary},
    0 42px ${(p) => p.theme.colors.primary};
  overflow: hidden;
  transition: 0.3s;
  :hover {
    text-shadow: 0 -42px ${(p) => p.theme.colors.secondary},
      0 0 ${(p) => p.theme.colors.primary};
  }
`

export const ContactPageDetailItemText = styled.p`
  font-family: ${(p) => p.theme.fonts.primary};
  font-size: 22px;
  line-height: 26px;
  font-weight: 100;
  max-width: 900px;
  text-align: center;
  a {
    color: ${(p) => p.theme.colors.secondary};
    text-shadow: none;
    transition: 0.5s text-shadow ease;
    :hover {
      text-shadow: 0px 1px 12px rgba(244, 234, 241, 0.85);
    }
  }
`
