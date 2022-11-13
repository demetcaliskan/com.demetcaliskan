import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import Header from '@/components/Header'

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
      font-weight: 200;
  } 
`

export const GeneralWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: fit-content;
`

const BasicLayout = ({ children }: { children: any }) => {
  return (
    <GeneralWrapper>
      <GlobalStyle />
      <Header />
      {children}
    </GeneralWrapper>
  )
}

export default BasicLayout
