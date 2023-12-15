import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { EmailIcon, PhoneIcon, InstagramIcon } from '../Icon'
import { Link } from 'react-router-dom'

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null)

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (form.current) {
      emailjs
        .sendForm(
          'service_7sox6rw',
          'template_y16c80k',
          form.current,
          'biIaEEGdP4KjPGqXR'
        )
        .then((result) => {
          console.log(result.text)
          console.log('message sent')
        })
        .catch((error) => {
          console.log(error.text)
        })
    } else {
      console.log('Form is null')
    }

    e.currentTarget.reset()
  }

  return (
    <section>
      <div className="contact-container">
        <h3>Contact Us</h3>
        <div className="contact-box">
          <div className="phone">
            <PhoneIcon />
            <p>Phone 09 181 818</p>
          </div>
          <div className="instagram">
            <InstagramIcon />
            <Link to="https://www.instagram.com/luxloom_project/">
              luxloom_project
            </Link>
          </div>
          <div className="email">
            <EmailIcon />
            <p>Email us</p>
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="email-form"
            action=""
          >
            <input
              type="text"
              placeholder="Full Name"
              name="user_name"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              name="user_subject"
              required
            />
            <textarea name="message" />
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
export default Contact
