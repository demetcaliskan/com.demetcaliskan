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
