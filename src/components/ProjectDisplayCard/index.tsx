import Image from 'next/image'
import ProjectDisplayCardStyles, {
  ProjectDisplayCardDescription,
  ProjectDisplayCardImageWrapper,
  ProjectDisplayCardStatus,
  ProjectDisplayCardTitle,
} from './styles'

interface ProjectDisplayCardProps {
  title: string
  description: string
  imageRoute: string
  githubPath?: string
  websitePath?: string
  isComplete: boolean
}

const ProjectDisplayCard = ({
  title,
  description,
  imageRoute,
  githubPath,
  websitePath,
  isComplete,
}: ProjectDisplayCardProps) => {
  return (
    <ProjectDisplayCardStyles>
      <ProjectDisplayCardStatus isComplete={isComplete}>
        {isComplete ? 'COMPLETE' : 'CONTIUNING '}
      </ProjectDisplayCardStatus>
      <ProjectDisplayCardImageWrapper>
        <Image
          src={imageRoute}
          style={{ borderRadius: '12px' }}
          fill
          objectFit={'cover'}
          alt={title}
        />
      </ProjectDisplayCardImageWrapper>
      <ProjectDisplayCardTitle>{title}</ProjectDisplayCardTitle>
      <ProjectDisplayCardDescription>
        {description}
      </ProjectDisplayCardDescription>
      {githubPath && (
        <ProjectDisplayCardDescription>
          <a href={githubPath} target={'_blank'} rel='noreferrer'>
            Github link
          </a>
        </ProjectDisplayCardDescription>
      )}
      {websitePath && (
        <ProjectDisplayCardDescription>
          <a href={websitePath} target={'_blank'} rel='noreferrer'>
            Website link
          </a>
        </ProjectDisplayCardDescription>
      )}
    </ProjectDisplayCardStyles>
  )
}

export default ProjectDisplayCard
