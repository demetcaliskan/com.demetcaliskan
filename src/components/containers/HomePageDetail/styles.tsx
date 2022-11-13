import styled from 'styled-components'

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 44px;
  padding-top: 144px;
  min-height: calc(100vh - 180px);
  @media (max-width: 767px) {
    min-height: calc(100vh - 240px);
  }
`

export const HomePageDetailTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`

export const HomePageDetailTitleName = styled.h1`
  font-size: 36px;
  line-height: 50px;
  text-align: center;
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 8px;
  font-family: ${(p) => p.theme.fonts.primary};
  letter-spacing: 2px;
  font-weight: 100;
  animation: slide-in 0.5s ease;
  @media (max-width: 767px) {
    font-size: 32px;
    line-height: 42px;
  }
`
export const HomePageDetailTitleColored = styled.p`
  font-size: 42px;
  line-height: 50px;
  text-align: center;
  color: ${(p) => p.theme.colors.secondary};
  margin-top: 8px;
  margin-bottom: 8px;
  font-family: ${(p) => p.theme.fonts.tertiary};
  letter-spacing: 2px;
  animation: slide-in 0.7s ease;
  @media (max-width: 767px) {
    font-size: 36px;
    line-height: 42px;
  }
`
export const HomePageDetailTitleCity = styled.p`
  font-size: 36px;
  line-height: 50px;
  text-align: center;
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 44px;
  margin-top: 8px;
  font-family: ${(p) => p.theme.fonts.primary};
  letter-spacing: 2px;
  font-weight: 100;
  animation: slide-in 1s ease;
  @media (max-width: 767px) {
    font-size: 32px;
    line-height: 42px;
  }
`

export const HomePageDetailImageContainer = styled.div`
  width: 248px;
  height: 248px;
  border: 2px solid ${(p) => p.theme.colors.secondary};
  border-radius: 50%;
  padding: 8px;
  position: relative;
  display: block;
  transition: border 0.5s ease;
  animation: fade-in 1s ease;
  :hover {
    border-width: 10px;
  }
  @media (max-width: 767px) {
    width: 180px;
    height: 180px;
  }
`
