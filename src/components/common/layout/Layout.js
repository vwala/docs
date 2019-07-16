import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
// Additional styles
import '../../../styles/app.css';
import { SearchWrapper } from '../search';
import Footer from './Footer';
import Header from './Header';



const DefaultLayout = ({ location, children, bodyClass, mainClass, header, headerDividerStyle }) => (
    <>
        <Helmet>
            <html lang="en" className="fs-base" />
            {/* <link type="text/css" href="https://cloud.typography.com/6076934/6704592/css/fonts.css" rel="stylesheet" /> */}
            <body className={`${bodyClass} flex flex-column whitney f7 fw4 darkgrey readability`} />
        </Helmet>

        <SearchWrapper>
            {header || <Header location={location} dividerStyle={headerDividerStyle} />}

            <main className={mainClass || `bg-whitegrey-l2 pb5 pb10-ns`}>
                {children}
            </main>

            <Footer />
        </SearchWrapper>

        {/* <IntercomChat /> */}
    </>
)

DefaultLayout.defaultProps = {
    headerDividerStyle: `shadow`,
    bodyClass: `bg-white`,
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    mainClass: PropTypes.string,
    header: PropTypes.element,
    headerDividerStyle: PropTypes.oneOf([`hairline`, `shadow`]),
}

export default DefaultLayout
