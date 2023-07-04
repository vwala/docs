import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import React from 'react'
import VGroup from '../components/common/VGroup'
import Header from '../components/common/layout/Header'
import Layout from '../components/common/layout/Layout'
import { MetaData } from '../components/common/meta'
import { SearchModal } from '../components/common/search'
import HomeHeaderBox from '../components/home/HomeHeaderBox'
import { CurrentRelease, EnableSearch, PageContainerOffset } from '../constants'
import backgroundImage from "../images/home-hero.png"
import { isProduction } from '../utils/environment'

const Hero = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  width: 100%;
  // height: 25vh;
  height: 15vh;
  // filter: hue-rotate(-399deg);
  // animation: 10s ease-in-out infinite;
  // animation-name: emotion;
  // @keyframes emotion {
  //   0% { filter: hue-rotate(0deg); }
  //   25% { filter: hue-rotate(90deg); }
  //   50% { filter: hue-rotate(180deg); }
  //   75% { filter: hue-rotate(270deg); }
  //   100% { filter: hue-rotate(360deg); }
  // }

  // Position children
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
`

const HomeSectionGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 10px;
`

const SubHeading = styled.h1`
  text-shadow: 0 5px 18px rgba(0,0,0,.07);
`



interface HomePageProps {
  data: {
    site: {
      // TODO valid?
      siteMetadata: {
        siteUrl: string
        title: string
        description: string
      }
    }
  }
  location: {
    pathname: string
  }
}

const HomePage: React.FC<HomePageProps> = ({ data, location }) => {

  const title = 'vwa.la help'
  const description = 'Everything you need to know about the vwa.la influencer marketing platform.'
  // const imageUrl = getMetaImageUrls()

  return (
    <>
      <MetaData
        data={data}
        location={location}
        type="website"
        title={title}
        description={description}
        image={"../images/meta/hero.png"}
      />
      <Layout>
        <Hero>
          <Header location={location} />
          <VGroup style={{ justifyContent: "center", alignItems: "center", color: "#FFF", }}>
            {/* <SubHeading>Need help?</SubHeading> */}
            {/* <SubHeading>
              <HGroup>
                <AnimatedString x={["Merchant", "Influencer"]}></AnimatedString>
                &nbsp;
                Help
              </HGroup>
            </SubHeading> */}
            {!isProduction() && EnableSearch
              ? <SearchModal isHome={true} />
              : null
            }
          </VGroup>
        </Hero>
        <div style={{ marginTop: PageContainerOffset, zIndex: 100 }}>
          <HomeSectionGrid>
            <HomeHeaderBox
              to="/merchant/welcome/"
              title="Merchant help"
              icon="Rocket"
              colour="purple"
            >
              Everything a merchant needs to know
            </HomeHeaderBox>
            <HomeHeaderBox
              to="/influencer/getting-started/"
              title="Influencer help"
              icon="Rocket"
              colour="#0dd"
            >
              Everything an influencer needs to know
            </HomeHeaderBox>
            <HomeHeaderBox
              to={`/releases/${CurrentRelease}/`}
              title="Product releases"
              icon="Blocks"
              colour="darkgray"
            >
              Keep up to date with our releases
            </HomeHeaderBox>
            <HomeHeaderBox
              to="/user"
              title="Account help"
              icon="Blocks"
              colour="darkgray">
              Login/password issues
            </HomeHeaderBox>
          </HomeSectionGrid>
        </div>
      </Layout>
    </>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    site {
      ...SiteMetaFields
    }
  }
`
