module.exports = {
  siteMetadata: {
    title: `Santrick`,
    subtitle: `Digital`,
    description: `Web Development & digital & social advertising`,
    author: `Santrick Digital`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `quicksand`,
          `source sans pro\:300,400,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: "100%",
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: "100%", // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SANTRICK digital`,
        short_name: `SANTRICK digital`,
        start_url: `/`,
        theme_color: `#a2466c`,
        background_color: `#31708e`,
        display: `standalone`,
        icon: `src/images/favicon-32x32.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-145000399-1",
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "2406786669645761",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `abesanchez7`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
}
