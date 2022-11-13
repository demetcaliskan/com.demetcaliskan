import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Theme from 'styles/Theme'

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
      font-weight: 200;
  } 
`

export const GeneralWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  width: 100%;
  min-height: fit-content;
  position: relative;
`

export const MainContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 144px;
  padding-bottom: 44px;
  min-height: calc(100vh - 100px);
  @media (max-width: 767px) {
    min-height: calc(100vh - 160px);
  }
`

const BasicLayout = ({ children }: { children: any }) => {
  return (
    <Theme>
      <GeneralWrapper>
        <GlobalStyle />
        <Header />
        <MainContentWrapper>{children}</MainContentWrapper>
        <Footer />
      </GeneralWrapper>
    </Theme>
  )
}

export default BasicLayout
