import Image from 'next/image'
import styled from 'styled-components'

export const ExternalLinkItem = styled.a`
  display: flex;
`

export const ExternalLinkItemLogo = styled(Image)`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 0px;
  transition: margin-top 0.2s ease;
  :hover {
    margin-top: -10px;
  }
`
