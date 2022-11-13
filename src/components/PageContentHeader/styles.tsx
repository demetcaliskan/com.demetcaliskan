import styled from 'styled-components'

export const PageContentHeaderDivider = styled.div`
  display: flex;
  height: 0.5px;
  background: ${(p) => p.theme.colors.secondary};
  width: 100%;
  max-width: 900px;
  margin-bottom: 44px;
`

export const PageContentHeaderTitle = styled.h1`
  font-family: ${(p) => p.theme.fonts.tertiary};
  cursor: pointer;
  font-size: 42px;
  line-height: 42px;
  font-weight: 200;
  color: #0000;
  text-shadow: 0 0 ${(p) => p.theme.colors.secondary},
    0 42px ${(p) => p.theme.colors.primary};
  overflow: hidden;
  transition: 0.3s;
  :hover {
    text-shadow: 0 -42px ${(p) => p.theme.colors.secondary},
      0 0 ${(p) => p.theme.colors.primary};
  }
`
