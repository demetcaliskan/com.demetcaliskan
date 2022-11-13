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

export const WorksPageDetailSubtitle = styled.p`
  font-family: ${(p) => p.theme.fonts.primary};
  font-size: 32px;
  line-height: 36px;
  font-weight: 200;
  letter-spacing: 4px;
  text-align: center;
  @media (max-width: 767px) {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 28px;
    line-height: 36px;
  }
`

export const WorksPageProjectDisplayContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 767px) {
    margin-bottom: 32px;
    margin-top: 16px;
  }
`

export const WorksPageDetailProjectCardWrapper = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: center;
  width: 450px;
  margin-right: 12px;
  margin-left: 12px;
  margin-bottom: 12px;
  margin-top: 12px;
  @media (max-width: 821px) {
    width: 45%;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`
