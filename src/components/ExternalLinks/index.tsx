import { ExternalLinkItem, ExternalLinkItemLogo } from './styles'

interface ExternalLinksProps {
  themeColor: string
}

const ExternalLinks = ({ themeColor }: ExternalLinksProps) => {
  return (
    <>
      <ExternalLinkItem
        href='https://github.com/demetcaliskan'
        target={'_blank'}
      >
        <ExternalLinkItemLogo
          src={
            themeColor === 'dark'
              ? '/icons/github-black-logo.svg'
              : '/icons/github-white-logo.svg'
          }
          alt='Icon by <a href="https://freeicons.io/profile/3">icon king1</a> on <a href="https://freeicons.io">freeicons.io</a>'
          width={25}
          height={25}
        />
      </ExternalLinkItem>
      <ExternalLinkItem
        href='https://www.linkedin.com/in/demet-%C3%A7al%C4%B1%C5%9Fkan-98a1001a4/'
        target={'_blank'}
      >
        <ExternalLinkItemLogo
          src={
            themeColor === 'dark'
              ? '/icons/linkedin-black-logo.svg'
              : '/icons/linkedin-white-logo.svg'
          }
          alt='Icon by <a href="https://freeicons.io/profile/3">icon king1</a> on <a href="https://freeicons.io">freeicons.io</a>'
          width={25}
          height={25}
        />
      </ExternalLinkItem>
      <ExternalLinkItem
        href='https://www.instagram.com/demetcaliskann/'
        target={'_blank'}
      >
        <ExternalLinkItemLogo
          src={
            themeColor === 'dark'
              ? '/icons/instagram-black-logo.svg'
              : '/icons/instagram-white-logo.svg'
          }
          alt='Icon by <a href="https://freeicons.io/profile/3">icon king1</a> on <a href="https://freeicons.io">freeicons.io</a>'
          width={25}
          height={25}
        />
      </ExternalLinkItem>
      <ExternalLinkItem
        href='https://open.spotify.com/user/demetcaliskann?si=326ed441f3814342&nd=1'
        target={'_blank'}
      >
        <ExternalLinkItemLogo
          src={
            themeColor === 'dark'
              ? '/icons/spotify-black-logo.svg'
              : '/icons/spotify-white-logo.svg'
          }
          alt='Icon by <a href="https://freeicons.io/profile/3">icon king1</a> on <a href="https://freeicons.io">freeicons.io</a>'
          width={25}
          height={25}
        />
      </ExternalLinkItem>
    </>
  )
}

export default ExternalLinks
