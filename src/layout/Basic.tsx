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

const BasicLayout = ({ children }: { children: any }) => {
  return (
    <Theme>
      <GeneralWrapper>
        <GlobalStyle />
        <Header />
        {children}
        <Footer />
      </GeneralWrapper>
    </Theme>
  )
}

export default BasicLayout
