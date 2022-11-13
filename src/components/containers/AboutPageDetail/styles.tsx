import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1080px;
  max-width: 900px;
  justify-content: center;
  align-items: center;
  @media (max-width: 1080px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

export const AboutPageText = styled.p`
  font-family: ${(p) => p.theme.fonts.primary};
  font-weight: 100;
  font-size: 16px;
  line-height: 22px;
  align-self: flex-start;
  text-align: justify;
`
