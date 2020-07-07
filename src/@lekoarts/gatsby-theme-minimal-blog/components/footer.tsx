/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import useSiteMetadata from "../hooks/use-site-metadata"

const Footer = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by 
        {` `}
        <Link aria-label="우성짱의 홈페이지 링크" 
          href="https://www.wsgvet.com"
          target="_blank"
          rel="noopener noreferrer"          
        >
          {siteTitle}
        </Link>
        . All rights reserved.
      </div>
      <div>
        <Link
          aria-label="Link to the theme's GitHub repository"
          href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          Theme
        </Link>
        {` `}
        by
        {` `}
        <Link aria-label="Link to the theme author's website" 
          href="https://www.lekoarts.de/en"
          target="_blank"
          rel="noopener noreferrer"          
        >
          LekoArts
        </Link>
      </div>
    </footer>
  )
}

export default Footer
