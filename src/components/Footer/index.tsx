import ExternalLinks from '../ExternalLinks'
import FooterStyles, {
  FooterContentWrapper,
  FooterCopyrightText,
  FooterExternalLinksWrapper,
  FooterItem,
  FooterItemsColumnWrapper,
} from './styles'

const Footer = () => {
  return (
    <FooterStyles>
      <FooterContentWrapper>
        <FooterItemsColumnWrapper>
          <FooterItem>
            Contact me from:{' '}
            <a href='mailto:demetcaliskann@icloud.com'>
              demetcaliskann@icloud.com
            </a>
          </FooterItem>
          <FooterCopyrightText copyrightPlacement='top'>
            Built from scratch by Demet Çalışkan 🤍 2022
          </FooterCopyrightText>
        </FooterItemsColumnWrapper>
        <FooterExternalLinksWrapper>
          <ExternalLinks themeColor={'dark'} />
        </FooterExternalLinksWrapper>
        <FooterCopyrightText copyrightPlacement='bottom'>
          Built from scratch by Demet Çalışkan 🤍 2022
        </FooterCopyrightText>
      </FooterContentWrapper>
    </FooterStyles>
  )
}
export default Footer
