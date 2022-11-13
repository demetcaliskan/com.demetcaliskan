import Link from 'next/link'
import MobileHeaderMenuStyles, {
  MobileHeaderExternalLinkItem,
  MobileHeaderLinkItemLogo,
  MobileHeaderMenuContentWrapper,
  MobileHeaderMenuItem,
  MobileHeaderExternalLinksWrapper,
} from './styles'

interface MobileHeaderMenuProps {
  open: boolean
}

const MobileHeaderMenu = ({ open }: MobileHeaderMenuProps) => {
  return (
    <MobileHeaderMenuStyles open={open ? 'open' : 'close'}>
      <MobileHeaderMenuContentWrapper>
        <Link href={'/works'}>
          <MobileHeaderMenuItem>{'< Works />'}</MobileHeaderMenuItem>
        </Link>
        <Link href={'/about'}>
          <MobileHeaderMenuItem>{'< About Me />'}</MobileHeaderMenuItem>
        </Link>
        <Link href={'/contact'}>
          <MobileHeaderMenuItem>{'< Get In Touch />'}</MobileHeaderMenuItem>
        </Link>
        <MobileHeaderExternalLinksWrapper>
          <MobileHeaderExternalLinkItem
            href='https://github.com/demetcaliskan'
            target={'_blank'}
          >
            <MobileHeaderLinkItemLogo
              src='/icons/github-white-logo.svg'
              alt='deneme'
              width={50}
              height={50}
            />
          </MobileHeaderExternalLinkItem>
          <MobileHeaderExternalLinkItem
            href='https://www.linkedin.com/in/demet-%C3%A7al%C4%B1%C5%9Fkan-98a1001a4/'
            target={'_blank'}
          >
            <MobileHeaderLinkItemLogo
              src='/icons/linkedin-white-logo.svg'
              alt='deneme'
              width={50}
              height={50}
            />
          </MobileHeaderExternalLinkItem>
          <MobileHeaderExternalLinkItem
            href='https://www.instagram.com/demetcaliskann/'
            target={'_blank'}
          >
            <MobileHeaderLinkItemLogo
              src='/icons/instagram-white-logo.svg'
              alt='deneme'
              width={50}
              height={50}
            />
          </MobileHeaderExternalLinkItem>
        </MobileHeaderExternalLinksWrapper>
      </MobileHeaderMenuContentWrapper>
    </MobileHeaderMenuStyles>
  )
}

export default MobileHeaderMenu
