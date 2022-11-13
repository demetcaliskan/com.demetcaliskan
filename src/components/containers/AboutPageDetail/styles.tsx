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
