import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ExternalLinks from '../ExternalLinks'
import HamburgerMenu from '../HamburgerMenu'
import HeaderStyles, {
  HeaderContentWrapper,
  HeaderHamburgerMenuWrapper,
  HeaderItem,
  HeaderLogo,
  HeaderMenuItemsWrapper,
} from './styles'

const Header = () => {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setHamburgerMenuOpen(false)
  }, [router])

  return (
    <HeaderStyles>
      <HeaderContentWrapper>
        <HeaderHamburgerMenuWrapper>
          <HamburgerMenu
            open={hamburgerMenuOpen}
            setOpen={setHamburgerMenuOpen}
          />
        </HeaderHamburgerMenuWrapper>
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
          <ExternalLinks themeColor='light' />
        </HeaderMenuItemsWrapper>
      </HeaderContentWrapper>
    </HeaderStyles>
  )
}

export default Header
