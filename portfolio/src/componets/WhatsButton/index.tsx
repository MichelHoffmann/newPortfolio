import { WhatsappLogo } from 'phosphor-react'
import { WhatsLink } from './WhatsLink.styled'

export function WhatsButton() {
  return (
    <WhatsLink
      href="https://wa.me/5568981141671"
      className="whats"
      target="_blank"
      rel="noreferrer"
    >
      <WhatsappLogo size={18} /> Vamos conversar
    </WhatsLink>
  )
}
