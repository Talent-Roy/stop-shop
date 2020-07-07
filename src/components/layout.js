import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { theme } from "../styles/theme"
import { GlobalStyle } from "../styles/globalStyle"

// import HeaderMain from "./Headers/HeaderMain"
import HeaderMinor from "./Headers/HeaderMinor"
import { Helmet } from "react-helmet"

const PageWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  width: 90%;
`

const MainSection = styled.main`
  margin: 30px 0;
  width: 100%;
`

const FooterStyled = styled.footer`
  width: 100%;
  padding: 20px;
  text-align: right;

  @media (max-width: 600px) {
    text-align: center;
  }
`
const ExternalLink = styled.a`
  color: #c59fc5;
`

class Layout extends React.Component {
  componentDidMount() {
    if (window.Snipcart) {
      window.Snipcart.api.configure("show_continue_shopping", true)
    }
  }

  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const siteName = "Kemadu Styles"
    let header

    if (location.pathname === rootPath) {
      header = <HeaderMinor shopName={siteName}></HeaderMinor>
    } else {
      header = <HeaderMinor shopName={siteName}></HeaderMinor>
    }

    return (
      <>
        <Helmet>
          <link
            href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/flatly/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-mhpbKVUOPCSocLzx2ElRISIORFRwr1ZbO9bAlowgM5kO7hnpRBe+brVj8NNPUiFs"
            crossorigin="anonymous"
          />
          <script
            src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
            integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
            crossorigin="anonymous"
          ></script>
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
            integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
            crossorigin="anonymous"
          ></script>
          <script
            src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
            integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
            crossorigin="anonymous"
          ></script>
        </Helmet>

        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />
            <PageWrapper>
              {header}
              <MainSection>{children}</MainSection>
              <FooterStyled>
                <strong>
                  Desinged by{" "}
                  <ExternalLink
                    href="https://www.issydennis.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Drums media
                  </ExternalLink>
                </strong>
              </FooterStyled>
            </PageWrapper>
          </>
        </ThemeProvider>
      </>
    )
  }
}

export default Layout
