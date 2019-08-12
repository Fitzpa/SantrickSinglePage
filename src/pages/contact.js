import React from "react"
import Layout from "../components/Layout.js"
import Head from "../components/head"
import Envelope from "../images/icons/envelope.svg"
import Instagram from "../images/icons/instagram.svg"
import Twitter from "../images/icons/twitter.svg"
import contactStyles from "./contact.module.scss"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      {/* /////////////////////////////////////////////////// */}
      <div className={contactStyles.texture_container}>
        <div className={contactStyles.container}>
          <form
            className={contactStyles.contactForm}
            name="contact"
            method="POST"
            data-netlify-recaptcha="true"
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
            <div data-netlify-recaptcha="true"></div>
            <p className={contactStyles.submitBtnContainer}>
              <button className={contactStyles.submitBtn} type="submit">
                Send
              </button>
            </p>
          </form>

          {/* <form
          class={contactStyles.contactForm}
          action="POST"
          method="post"
          enctype="multipart/form-data"
        >
          <input type="hidden" name="form-name" value="form 1" />
          <div className="fields">
            <div className={contactStyles.Contact_halfField}>
              <label className="Contact-labels">Enter Name:</label>
              <input
                className={contactStyles.Contact_inputs}
                type="text"
                name="name"
                id="name"
                placeholder="Name"
              />
            </div>
            <div className={contactStyles.Contact_halfField}>
              <label className="Contact-labels">Enter Email:</label>
              <input
                className={contactStyles.Contact_inputs}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className={contactStyles.Contact_fullField}>
              <label className="Contact-labels">Enter Message:</label>
              <textarea
                className={contactStyles.Contact_inputs}
                type="message"
                name="message"
                id="message"
                placeholder="Message"
                rows="7"
              ></textarea>
            </div>

            <div className={contactStyles.Contact_fullField}>
              <div id="robotCheck">
                <script src="https://www.google.com/recaptcha/api.js"></script>
                <div
                  className="g-recaptcha"
                  data-sitekey="6LdAvUIUAAAAAHjrjmjtNTcXyKm0WKwefLp-dQv9"
                ></div>
                <noscript>
                  <div>
                    <div
                      style={{
                        width: "302px",
                        height: "422px",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          width: "302px",
                          height: "422px",
                          position: "absolute",
                        }}
                      >
                        <iframe
                          src="https://www.google.com/recaptcha/api/fallback?k=6LdAvUIUAAAAAHjrjmjtNTcXyKm0WKwefLp-dQv9"
                          frameborder="0"
                          scrolling="no"
                          style={{
                            width: "302px",
                            height: "422px",
                            borderStyle: "none",
                          }}
                        ></iframe>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "300px",
                        height: "60px",
                        borderStyle: "none",
                        bottom: "12px",
                        left: "25px",
                        margin: "0px",
                        padding: "0px",
                        right: "25px",
                        background: "#f9f9f9",
                        border: "1px solid #c1c1c1",
                        borderRadius: "3px",
                      }}
                    >
                      <textarea
                        id="g-recaptcha-response"
                        name="g-recaptcha-response"
                        className="g-recaptcha-response"
                        style={{
                          width: "250px",
                          height: "40px",
                          border: "1px solid #c1c1c1",
                          margin: "10px 25px",
                          padding: "0px",
                          resize: "none",
                        }}
                      ></textarea>
                    </div>
                  </div>
                </noscript>
              </div>
            </div>
          </div>
          <div>
            <input
              id="submitBtn"
              type="submit"
              className={contactStyles.Contact_sendBtn}
              value="Send Message"
            />
          </div>
        </form> */}
          {/* /////////////////////////////////////////////////// */}
          <div className={contactStyles.contacts_container}>
            <ul className={contactStyles.ul_container}>
              {/* <li className={contactStyles.li_container}><FontAwesomeIcon icon={faPhoneSquare} />:xxx-xxx-xxxx</li> */}
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
      </div>
    </Layout>
  )
}

export default ContactPage
