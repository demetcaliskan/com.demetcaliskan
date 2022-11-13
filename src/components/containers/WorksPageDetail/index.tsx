import PageContentHeader from '@/components/PageContentHeader'
import ProjectDisplayCard from '@/components/ProjectDisplayCard'
import WorksPageDetailStyles, {
  WorksPageDetailProjectCardWrapper,
  WorksPageDetailSubtitle,
  WorksPageProjectDisplayContainer,
} from './styles'

const WorksPageDetail = () => {
  return (
    <WorksPageDetailStyles>
      <PageContentHeader title={'Works'} />
      <WorksPageDetailSubtitle>Personal Projects</WorksPageDetailSubtitle>
      <WorksPageProjectDisplayContainer>
        <WorksPageDetailProjectCardWrapper>
          <ProjectDisplayCard
            title='Personal Website Project'
            description='Personal website built with Next.js and TypeScript. Also the current website :) Deployed on November 2022.'
            imageRoute='/images/personal-website-preview.png'
            githubPath='https://github.com/demetcaliskan/com.demetcaliskan'
            isComplete={false}
          />
        </WorksPageDetailProjectCardWrapper>
        <WorksPageDetailProjectCardWrapper>
          <ProjectDisplayCard
            title='Rick and Morty Project'
            description='Single page application which shows locations and residents that live in that specific location from Rick And Morty Universe, built with React, Context API and Tailwind CSS. Data was taken from Rick And Mort API. Completed on February 2022.'
            imageRoute='/images/rick-and-morty-preview.png'
            githubPath='https://github.com/demetcaliskan/rick-and-morty-api-project'
            isComplete={true}
          />
        </WorksPageDetailProjectCardWrapper>
      </WorksPageProjectDisplayContainer>
      <WorksPageDetailSubtitle>Company Projects</WorksPageDetailSubtitle>
      <WorksPageProjectDisplayContainer>
        <WorksPageDetailProjectCardWrapper>
          <ProjectDisplayCard
            title='Aposto Web'
            description='This project Next.js based web application. This project, which continues to be developed every day, was implemented in September 2022 together with the Aposto Frontend team.'
            imageRoute='/images/aposto-preview.png'
            isComplete={false}
            websitePath={'https://www.aposto.com'}
          />
        </WorksPageDetailProjectCardWrapper>
      </WorksPageProjectDisplayContainer>
    </WorksPageDetailStyles>
  )
}

export default WorksPageDetail
