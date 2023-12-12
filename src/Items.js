/* eslint-disable no-undef */
import chatIcon from '@/assets/chat-smile-2-line.svg'
import supportIcon from '@/assets/customer-service-2-fill.svg'
import faqIcon from '@/assets/questionnaire-line.svg'
import contactIcon from '@/assets/contacts-line.svg'

/* POC 1 */
export default [
  {
    name: 'Öppna Chatten',
    nameEn: 'OpenChat',
    svgIcon: chatIcon,
    show: true,
    PostMessageEventName: 'openChat'
  },
  {
    name: 'Till Support Sidan',
    nameEn: 'ToSupportPage',
    svgIcon: supportIcon,
    show: true,
    PostMessageEventName: 'toSupportPage'
  },
  {
    name: 'Till Frågor och Svar',
    nameEn: 'ToQuestionsandAnswers',
    svgIcon: faqIcon,
    show: true,
    PostMessageEventName: 'toFAQ'
  },
  {
    name: 'Kontakta Oss',
    nameEn: 'ContactUs',
    svgIcon: contactIcon,
    show: true,
    PostMessageEventName: 'contactUs'
  }
]
