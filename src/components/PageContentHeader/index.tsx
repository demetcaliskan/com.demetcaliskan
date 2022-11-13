import { PageContentHeaderDivider, PageContentHeaderTitle } from './styles'

interface PageContentHeaderProps {
  title: string
}

const PageContentHeader = ({ title }: PageContentHeaderProps) => {
  return (
    <>
      <PageContentHeaderTitle>{title}</PageContentHeaderTitle>
      <PageContentHeaderDivider />
    </>
  )
}

export default PageContentHeader
