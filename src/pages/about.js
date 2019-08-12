import React from "react"
import Layout from "../components/Layout.js"
import Head from "../components/head"
import aboutStyles from "./about.module.scss"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />

      <div className={aboutStyles.container}>
        <h1 className={aboutStyles.title}>Team</h1>
        <div className={aboutStyles.team_container}>
          <div className={aboutStyles.abe_container}>
            <div className={aboutStyles.box}>
              <h2>Abe Sanchez</h2>
              <p>
                Hey I am Abe Sanchez and I am the Co-Founder and CEO of Santrick
                Digital. My primary focus is giving people and businesses a
                platform to tell their story to the audience that they seek to
                communicate with; helping to inspire the actioins and create the
                change they desire. For years I have worked with brands to grow
                their audience and reach through social media strategies
                including digital ads, captivating photos and videos, as well as
                social media consulting. I have had the unique opportunity to
                work with international brands like Schwarzkpof Got2B, and
                Orient Watches, as well as local businesses like The Victoria
                Burrow and Maynards on Lake Minnetonka and e-commerce startups
                like Stick It To Winter.
              </p>
              <p>
                Growing up in a big family has made me value respect for others,
                empathy, gratitude, and hard work because nothing was ever given
                to me without having to work for it, or beat my siblings to it.
                I can thank being one of the youngest for my competitive nature,
                hunger to achieve more, and my willingness to communicate to
                attain what I desire. That same competitiveness, hunger,
                empathy, and communication follows me in everthing that I do. In
                my free time you can find me serving in my local church as the
                Director of Connections, spending time with family and friends,
                playing the drums and going out for runs all over town.
              </p>
            </div>
          </div>
          <div className={aboutStyles.louie_container}>
            <div className={aboutStyles.box}>
              <h2>Louie Fitzpatrick</h2>
              <p>
                My name is Louie Fitzpatrick, I am the Co-founder and CTO of
                Santrick Digital. I am ver good at finding what can be improved
                in a company's brand image. My background is in developing
                full-stack web applications and company websites. Give me an
                idea of what you want and I can create something high-quality
                from scratch using the latest web technologies to deliver a fast
                and efficient browsing experience that will keep your customers
                on your sites longer and keep them coming back for more. I have
                an excellent understanding of SEO and how to improve your
                website's reach.
              </p>
              <p>
                Both of my parents are graphic designers and have always been
                very critical of anything I have ever produced. I have basically
                been getting little lessons on design ever since I was a child.
                Their influence resulted in deepening the way I look at the
                world. I can't not analyze every graphic, web site,
                advertizement, or creative work and think about how they could
                be improved. This turned out to be very helpful in the career
                path I have chosen. In my free time I enjoy running, rock
                climbing, spending time with Future-Wife and creating fun web
                applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
