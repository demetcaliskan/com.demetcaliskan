import { Dispatch, SetStateAction } from 'react'
import MobileHeaderMenu from '../MobileHeaderMenu'
import HamburgerMenuStyles, { HamburgerMenuLine } from './styles'

interface HamburgerMenuProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const HamburgerMenu = ({ open, setOpen }: HamburgerMenuProps) => {
  return (
    <>
      <HamburgerMenuStyles onClick={() => setOpen(!open)}>
        <HamburgerMenuLine state={open ? 'open' : 'close'} />
        <HamburgerMenuLine state={open ? 'open' : 'close'} />
        <HamburgerMenuLine state={open ? 'open' : 'close'} />
        <HamburgerMenuLine state={open ? 'open' : 'close'} />
      </HamburgerMenuStyles>
      <MobileHeaderMenu open={open} />
    </>
  )
}

export default HamburgerMenu
