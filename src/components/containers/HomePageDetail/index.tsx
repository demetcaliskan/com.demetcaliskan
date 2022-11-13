import Image from 'next/image'
import HomePageDetailStyles, {
  HomePageDetailTitleWrapper,
  HomePageDetailTitleCity,
  HomePageDetailTitleColored,
  HomePageDetailTitleName,
  HomePageDetailImageContainer,
} from './styles'
import profilePic from '/public/images/demet-caliskan-profile.png'
import profilePic3 from '/public/images/profile-pic.png'

const HomePageDetail = () => {
  return (
    <HomePageDetailStyles>
      <HomePageDetailTitleWrapper>
        <HomePageDetailTitleName>Demet Çalışkan</HomePageDetailTitleName>
        <HomePageDetailTitleColored>
          Frontend Developer
        </HomePageDetailTitleColored>
        <HomePageDetailTitleCity>Based in İstanbul</HomePageDetailTitleCity>
        <HomePageDetailImageContainer>
          <Image
            src={profilePic}
            style={{ borderRadius: '50%', padding: '12px' }}
            fill
            objectFit='cover'
            alt='demet-caliskan'
          />
        </HomePageDetailImageContainer>
      </HomePageDetailTitleWrapper>
    </HomePageDetailStyles>
  )
}

export default HomePageDetail
