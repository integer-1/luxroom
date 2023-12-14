import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { EmailIcon, PhoneIcon, InstagramIcon } from '../Icon'
import { Link } from 'react-router-dom'

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null)

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // const result = await emailjs
    //   .send(
    //     'service_7sox6rw',
    //     'template_y16c80k',
    //     form.current,
    //     'biIaEEGdP4KjPGqXR'
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text)
    //     },
    //     (error) => {
    //       console.log(error.text)
    //     }
    //   )

    e.currentTarget.reset()

    // console.log(result.text)
  }

  return (
    <section>
      <div className="container">
        <h2>Contact Us</h2>
        <div>
          <PhoneIcon />
          <h4>Phone</h4>
          <p>09 181 818</p>
        </div>
        <EmailIcon />
        <h4>Email us</h4>
        <InstagramIcon />
        <Link to="https://www.instagram.com/luxloom_project/">
        <h4>Instagram</h4>
        </Link>
        <form ref={form} onSubmit={sendEmail} className="email" action="">
          <input
            type="text"
            placeholder="Full Name"
            name="user_name"
            required
          />
          <input type="email" placeholder="Email" name="user_email" required />
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
    </section>
  )
}
export default Contact
