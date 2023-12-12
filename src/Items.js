/* eslint-disable no-undef */
import chatIcon from '@/assets/chat-smile-2-line.svg'
import supportIcon from '@/assets/customer-service-2-fill.svg'
import faqIcon from '@/assets/questionnaire-line.svg'
import contactIcon from '@/assets/contacts-line.svg'

/* POC 1 */

export default [
  { name: 'Öppna Chatten', svgIcon: chatIcon, show: true, PostMessageEventName: 'openChat' },
  {
    name: 'Till Support Sidan',
    svgIcon: supportIcon,
    show: true,
    PostMessageEventName: 'toSupportPage'
  },
  { name: 'Till Frågor och Svar', svgIcon: faqIcon, show: true, PostMessageEventName: 'toFAQ' },
  { name: 'Kontakta Oss', svgIcon: contactIcon, show: true, PostMessageEventName: 'contactUs' }
]
