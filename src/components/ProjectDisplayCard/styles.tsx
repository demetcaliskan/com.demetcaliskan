import styled from 'styled-components'

interface ProjectDisplayCardProps {
  isComplete: boolean
}

export default styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${(p) => p.theme.colors.primary};
  border-radius: 16px;
  padding: 16px;
  justify-content: center;
  align-items: flex-start;
`

export const ProjectDisplayCardImageWrapper = styled.div`
  width: 100%;
  height: 240px;
  background: ${(p) => p.theme.colors.secondary};
  border-radius: 12px;
  margin-bottom: 8px;
  position: relative;
  @media (max-width: 821px) {
    height: 170px;
    margin-bottom: 0px;
  }
`
export const ProjectDisplayCardTitle = styled.p`
  font-family: ${(p) => p.theme.fonts.primary};
  font-size: 24px;
  line-height: 28px;
  font-weight: 200;
  letter-spacing: 2px;
  color: ${(p) => p.theme.colors.tertiary};
  margin-bottom: 16px;
  @media (max-width: 767px) {
    font-size: 22px;
    line-height: 24px;
  }
`

export const ProjectDisplayCardDescription = styled.p`
  font-family: ${(p) => p.theme.fonts.primary};
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
  letter-spacing: 1px;
  color: ${(p) => p.theme.colors.tertiary};
  margin-bottom: 8px;
  margin-top: 0px;
  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 20px;
  }
`

export const ProjectDisplayCardStatus = styled.p<ProjectDisplayCardProps>`
  font-family: ${(p) => p.theme.fonts.tertiary};
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
  letter-spacing: 3px;
  color: ${(p) =>
    p.isComplete ? p.theme.colors.primary : p.theme.colors.tertiary};
  align-self: center;
  background: ${(p) =>
    p.isComplete ? p.theme.colors.tertiary : p.theme.colors.secondary};
  width: 100%;
  text-align: center;
  border-radius: 5px;
`
