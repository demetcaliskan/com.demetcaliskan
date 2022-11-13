import styled from 'styled-components'

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 44px;
`

export const HomePageDetailTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  margin-top: 44px;
`

export const HomePageDetailTitleName = styled.h1`
  font-size: 36px;
  line-height: 50px;
  text-align: center;
  color: white;
  margin-bottom: 8px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 2px;
  font-weight: 100;
  @media (max-width: 767px) {
    font-size: 32px;
    line-height: 42px;
  }
`
export const HomePageDetailTitleColored = styled.p`
  font-size: 42px;
  line-height: 50px;
  text-align: center;
  color: #ffc4e1;
  margin-top: 8px;
  margin-bottom: 8px;
  font-family: 'Italiana', serif;
  letter-spacing: 2px;
  @media (max-width: 767px) {
    font-size: 36px;
    line-height: 42px;
  }
`
export const HomePageDetailTitleCity = styled.p`
  font-size: 36px;
  line-height: 50px;
  text-align: center;
  color: white;
  margin-bottom: 44px;
  margin-top: 8px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 2px;
  font-weight: 100;
  @media (max-width: 767px) {
    font-size: 32px;
    line-height: 42px;
  }
`

export const HomePageDetailImageContainer = styled.div`
  width: 248px;
  height: 248px;
  border: 2px solid #ffc4e1;
  border-radius: 50%;
  padding: 8px;
  position: relative;
  display: block;
  @media (max-width: 767px) {
    width: 180px;
    height: 180px;
  }
`
