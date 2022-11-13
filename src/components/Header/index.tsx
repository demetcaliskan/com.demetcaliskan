import Link from 'next/link'
import HeaderStyles, {
  HeaderContentWrapper,
  HeaderExternalLinkItem,
  HeaderItem,
  HeaderLinkItemLogo,
  HeaderLogo,
  HeaderMenuItemsWrapper,
} from './styles'

const Header = () => {
  return (
    <HeaderStyles>
      <HeaderContentWrapper>
        <HeaderMenuItemsWrapper>
          <Link href={'/works'}>
            <HeaderItem>Works</HeaderItem>
          </Link>
          <Link href={'/about'}>
            <HeaderItem>About Me</HeaderItem>
          </Link>
          <Link href={'/contact'}>
            <HeaderItem>Get In Touch</HeaderItem>
          </Link>
        </HeaderMenuItemsWrapper>
        <HeaderLogo>
          <Link href={'/'}>{'<👩🏻‍💻>'}</Link>
        </HeaderLogo>
        <HeaderMenuItemsWrapper>
          <HeaderExternalLinkItem
            href='https://github.com/demetcaliskan'
            target={'_blank'}
          >
            <HeaderLinkItemLogo
              src='/icons/github-white-logo.svg'
              alt='deneme'
              width={25}
              height={25}
            />
          </HeaderExternalLinkItem>
          <HeaderExternalLinkItem
            href='https://www.linkedin.com/in/demet-%C3%A7al%C4%B1%C5%9Fkan-98a1001a4/'
            target={'_blank'}
          >
            <HeaderLinkItemLogo
              src='/icons/linkedin-white-logo.svg'
              alt='deneme'
              width={25}
              height={25}
            />
          </HeaderExternalLinkItem>
          <HeaderExternalLinkItem
            href='https://www.instagram.com/demetcaliskann/'
            target={'_blank'}
          >
            <HeaderLinkItemLogo
              src='/icons/instagram-white-logo.svg'
              alt='deneme'
              width={25}
              height={25}
            />
          </HeaderExternalLinkItem>
        </HeaderMenuItemsWrapper>
      </HeaderContentWrapper>
    </HeaderStyles>
  )
}

export default Header
