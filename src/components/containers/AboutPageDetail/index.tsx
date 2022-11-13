import PageContentHeader from '@/components/PageContentHeader'
import AboutPageDetailStyles, { AboutPageText } from './styles'

const AboutPageDetail = () => {
  const text = `
    Hello! I am Demet, a fourth-year computer engineering student at Mef
  University, I am also working as a full-time frontend developer at
  Aposto.
  My working life started 2 years ago, in 2020, as an SEO Specialist. I worked in this role for about 1 year in a digital marketing agency and provided consultancy services to more than 30 brands with a small and solid team. Later, within the same agency, I started to deal with ASO and worked as an ASO and SEO Analyst for about 3 months. During this process, with my programming knowledge that I learned from school, I became interested in Frontend Development. I was exploring this field, trying various languages ​​and frameworks between mobile and web. I was interested in Swift for a short time, then I did my first project with React. In this process, I applied for the internship position of many companies, and finally I started to work as an intern at Aposto. Thanks to the startup spirit here and the warmth of my team, I started doing something right away. I was writing code more actively than I could be anywhere else. At the end of my 4-month internship period, I started to work full time. I have been working here since July.
  `
  const text2 = `
  During this process, I took part in many project groups and personal projects at school. Together with my group at school, we developed a chess game in Unity, a database project with SQL, developed projects with ARM assembly, and developed several amateur React projects. At the same time, I have personally developed Java and Python projects that include OOP, implement and compare search algorithms in school.
  `

  const text3 = `
  At the moment, I started to watch courses on iOS development again, and I want to improve myself also in that field. At the same time, as someone who has always used JavaScript, I am working on using TypeScript in my new projects and learning it.
  `

  const text4 = `
  I move forward with the aim of learning more and constantly improving myself. Hope the future brings goodness to all of us 🤍
  `

  return (
    <AboutPageDetailStyles>
      <PageContentHeader title={'About Me'} />
      <AboutPageText>{text}</AboutPageText>
      <AboutPageText>{text2}</AboutPageText>
      <AboutPageText>{text3}</AboutPageText>
      <AboutPageText>{text4}</AboutPageText>
    </AboutPageDetailStyles>
  )
}

export default AboutPageDetail
