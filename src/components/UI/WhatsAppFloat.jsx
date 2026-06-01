import { FaWhatsapp } from 'react-icons/fa'
import { CONTACT } from '../../data/restaurantData'

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${CONTACT.whatsapp}?text=Hello! I'd like to place an order from Minhas Pizza & Broast.`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Order on WhatsApp"
    >
      <FaWhatsapp size={28} color="white" />
    </a>
  )
}
