require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    // 사이트 이름 설정, 첫 화면 왼쪽 위에 붙는 사이트 이름입니다.
    siteTitle: `Woosung blog`,
    // 페이지의 기본 타이틀 이름 설정, 웹브라우저에 붙는 사이트 이름과 내용입니다.
    siteTitleAlt: `Woosung blog - sand.ga`,
    // JSONLD에서 사용되는 내용
    siteHeadline: `Woosung blog - sand.ga`,
    // og:image의 절대경로설정 관련에 쓰입니다. 홈페이지의 정확한 URL을 입력하세요.
    siteUrl: `https://sand.ga`,
    // SEO에 들어가는 사이트 설정입니다.
    siteDescription: `Gatsby js로 만든 우성짱의 미니멀 블로그입니다. 정적사이트 생성기 Gatsby로 꾸미고 있습니다.`,
    // 사이트 언어를 설정합니다.
    siteLanguage: `ko`,
    // og:image에 쓰이며, 반드시 `static` 폴더에 있어야 합니다. 사이트 대표이미지라고 보시면 됩니다.
    siteImage: `/profile.png`,
    // 트위터 계정을 넣으면 됩니다. 없어도 될 것 같네요.
    author: `@solut2000`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `블로그`,
            slug: `/blog`,
          },
        ],
        externalLinks: [
          {
            name: `Homepage`,
            url: `https://www.wsgvet.com`,
          },
        ],
        formatString: `YYYY.MM.DD`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-42656743-3",
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Woosung blog - sand.ga`,
        short_name: `Woosung-blog`,
        description: `Gatsby js로 만든 우성짱의 미니멀 블로그입니다. 정적사이트 생성기 Gatsby로 꾸미고 있습니다.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
