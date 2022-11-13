import PageContentHeader from '@/components/PageContentHeader'
import ContactPageDetailStyles, { ContactPageDetailItemText } from './styles'

const ContactPageDetail = () => {
  return (
    <ContactPageDetailStyles>
      <PageContentHeader title={'Get In Touch'} />
      <ContactPageDetailItemText>
        You can use{' '}
        <a href='mailTo:demetcaliskann@icloud.com'>demetcaliskann@icloud.com</a>{' '}
        e-mail address or website links located in the header and footer to
        reach out to me about work or any other subject.
      </ContactPageDetailItemText>
      <ContactPageDetailItemText>
        Feel free to contact me :)
      </ContactPageDetailItemText>
    </ContactPageDetailStyles>
  )
}

export default ContactPageDetail
