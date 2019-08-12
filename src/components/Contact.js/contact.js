import React from "react"
import Envelope from "../../images/icons/envelope.svg"
import Instagram from "../../images/icons/instagram.svg"
import Twitter from "../../images/icons/twitter.svg"
import contactStyles from "./contact.module.scss"

const ContactPage = () => {
  return (
    <section id="contact" className={contactStyles.texture_container}>
      <div className={contactStyles.container}>
        <form
          className={contactStyles.contactForm}
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <h1 className={contactStyles.contact_title}>Contact</h1>
          <p>
            <label className={contactStyles.label_container}>
              Name:{" "}
              <input
                className={contactStyles.input_container}
                type="text"
                name="name"
                required
              />
            </label>
          </p>
          <p>
            <label className={contactStyles.label_container}>
              Email:{" "}
              <input
                className={contactStyles.input_container}
                type="email"
                name="email"
                required
              />
            </label>
          </p>
          <p>
            <label className={contactStyles.label_container}>
              Message:{" "}
              <textarea
                className={contactStyles.textarea_container}
                name="message"
                required
              ></textarea>
            </label>
          </p>
          <p className={contactStyles.submitBtnContainer}>
            <button className={contactStyles.submitBtn} type="submit">
              Send
            </button>
          </p>
        </form>
        <div className={contactStyles.contacts_container}>
          <ul className={contactStyles.ul_container}>
            <li className={contactStyles.li_container}>
              <a
                className={contactStyles.linkBtns}
                href="mailto:Santrick.digital@gmail.com"
                target="_top"
              >
                <div className={contactStyles.circleFill}>
                  <Envelope className={contactStyles.icons} />
                </div>

                <h3 className={contactStyles.caption}>
                  Santrick.digital@gmail.com
                </h3>
              </a>
            </li>

            <li className={contactStyles.li_container}>
              <a
                className={contactStyles.linkBtns}
                href="https://instagram.com/santrick.digital/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={contactStyles.circleFill}>
                  <Instagram className={contactStyles.icons} />
                </div>

                <h3 className={contactStyles.caption}>Instagram</h3>
              </a>
            </li>

            <li className={contactStyles.li_container}>
              <a
                className={contactStyles.linkBtns}
                href="https://twitter.com/SantrickDigital"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={contactStyles.circleFill}>
                  <Twitter className={contactStyles.icons} />
                </div>
                <h3 className={contactStyles.caption}>Twitter</h3>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
