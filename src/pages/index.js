import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Layout } from '../components/common/layout';
import { getMetaImageUrls, MetaData } from '../components/common/meta';
import { HomeAPIBox, HomeHeader } from '../components/home';
import { Spirit } from '../styles/spirit-styles';


const HomePage = ({ data, location }) => {
    // Add meta title and description for this page here to overwrite the site meta data as set in the config
    const title = `vwa.la help`
    const description = `Everything you need to know about the vwa.la influencer marketing platform.`
    const imageUrl = getMetaImageUrls()

    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="website"
                title={title}
                description={description}
                image={imageUrl}
            />
            <Layout
                headerDividerStyle="shadow"
                bodyClass="bg-white"
                mainClass="bg-whitegrey-l2 pb-vw6 pb-vw3-ns"
                header={<HomeHeader />}
            >
                <div className="pt-vw3 home-main-box-padding-ns">
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className={`${Spirit.page.xl}`}>
                            <HomeAPIBox
                                to="/user"
                                title="Account help"
                                icon="sdks"
                            >
                                Account management help
                        </HomeAPIBox>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

HomePage.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                siteUrl: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
}

export default HomePage

export const pageQuery = graphql`
    query {
        site {
            ...SiteMetaFields
        }
    }
`
