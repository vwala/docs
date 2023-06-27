import styled from '@emotion/styled'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { graphql } from 'gatsby'
import * as React from "react"
import Collapsible from '../../components/common/FormCollapse'
import HGroup from '../../components/common/HGroup'
import { Link } from '../../components/common/Link'
import Toc from '../../components/common/Toc'
import VGroup from '../../components/common/VGroup'
import Layout from '../../components/common/layout/Layout'
import { PrevNextSection } from '../../components/common/prev-next'
import { SidebarNav } from '../../components/common/sidebar'
import useMediaQuery, { MEDIA_QUERY_TABLET } from '../../hooks/useMediaQuery'
import { MdxProps } from '../../queries/queries'
import { capitalise } from '../../utils/string'

import { MuiIcon } from '../../components/common/Icon'
import Header from '../../components/common/layout/Header'
import backgroundImage from "../../images/home-hero.png"

const Hero = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  width: 100%;
  height: 15vh;
`

const Heading = styled.h1`
  margin-top: 0px;
  margin-bottom: 0px;
`

const LongText = styled.div`
    white-space: nowrap;      /* Prevents the text from wrapping into multiple lines */
    overflow: hidden;         /* Hides the overflow */
    text-overflow: ellipsis;  /* Adds the ellipsis at the end */
    width: 200px;   
`

interface DataProps {
    location
    data: {
        mdx: MdxProps // & MxdFrontmatterImageBytes
    }
    children
    pageContext: {
        slug: string
        section: string
        previous: {
            id
        }
        next: {
            id
        }
    }
}


export function Page(props: DataProps) {

    const { data, children, location, pageContext } = props

    const sidebar = data.mdx.frontmatter.sidebar
    const isTabletOrLarger = useMediaQuery(MEDIA_QUERY_TABLET)
    const section = pageContext.section

    const hasToc = data?.mdx?.tableOfContents?.items?.length > 0

    const renderToc = () => {
        return hasToc
            ? <Toc items={data?.mdx?.tableOfContents?.items || []} />
            : null
    }

    return (
        <Layout style={{ background: "#eee" }}>
            {/* <MetaData
                data={data}
                location={location}
                type="article"
                image={imageUrl}
            /> */}
            {/* <PostHeader location={location} /> */}
            {/* <Hero2 imageBytes={data.mdx.frontmatter.image.childImageSharp.gatsbyImageData}>
          <HeroText>{data.mdx.frontmatter.title}</HeroText>
        </Hero2> */}
            <Hero>
                <Header location={location} />
            </Hero>
            <div style={{
                marginTop: -30,
                position: "relative",
                margin: "-60px 20px 0px 20px",
                background: "#fff",
                padding: isTabletOrLarger ? "30px" : "30px",
                borderRadius: "20px 20px 0px 0px"
            }}>
                <HGroup style={{ alignItems: "center" }}>
                    <Link to="/">Home</Link>
                    <MuiIcon><KeyboardArrowRightIcon /></MuiIcon>
                    <Link to={`/${section}`}>{capitalise(section)}</Link>
                    <MuiIcon><KeyboardArrowRightIcon /></MuiIcon>
                    <LongText>{data.mdx.frontmatter.title}</LongText>
                </HGroup>
                {isTabletOrLarger
                    ? <HGroup>
                        <SidebarNav
                            location={location}
                            sidebar={sidebar}
                            style={{ minWidth: "25%", marginRight: 20 }}
                        />
                        <div style={{
                            minWidth: "50%",
                            marginRight: 30
                        }}>
                            <Heading>{data.mdx.frontmatter.title}</Heading>
                            {/* <HGroup>
                                <img src={imported image} style={{ filter: "greyscale(100%)", height: "30px", width: "30px", borderRadius: "50%" }} />
                                <div>{data.mdx.frontmatter.date}</div>
                            </HGroup> */}
                            <VGroup>
                                {children}
                                <div style={{ marginTop: 30 }}>
                                    <PrevNextSection
                                        location={location}
                                        sidebar={sidebar}
                                        next={pageContext.next}
                                    />
                                </div>
                            </VGroup>
                        </div>
                        {hasToc
                            ? <div style={{ minWidth: "25%" }}>
                                <div style={{ position: "sticky", top: 30 }}>
                                    {renderToc()}
                                </div>
                            </div>
                            : null
                        }
                    </HGroup>
                    : <VGroup>
                        <div style={{ margin: "30px 0px" }}>
                            <Collapsible header={<strong>Other pages</strong>}>
                                <SidebarNav location={location} sidebar={sidebar} />
                            </Collapsible>
                        </div>
                        <Heading>{data.mdx.frontmatter.title}</Heading>
                        <VGroup>
                            {children}
                            <div style={{ marginTop: 30 }}>
                                <PrevNextSection
                                    location={location}
                                    sidebar={sidebar}
                                    next={pageContext.next}
                                />
                            </div>
                        </VGroup>
                    </VGroup>
                }
            </div>
        </Layout>
    )
}

export default Page

export const query = graphql`
    query($id: String!) {
        site {
            ...SiteMetaFields
        }
        mdx(id: { eq: $id }) {
            ...MarkdownFields
        }
    }
  `
