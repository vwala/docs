import React from 'react';
import { Spirit } from '../../styles/spirit-styles';
import { NavBar } from '../common';
import { SearchModal } from '../common/search';
import HomeHeaderBox from './HomeHeaderBox';


// Custom headings must be React components. You should include the <NavBar /> component
// somewhere in it. You can optionally set the theme of the navbar to `dark` or `light`.
const HomeHeader = () => (
    <div className="gh-bg-home bb b--whitegrey">
        <header className="top-0 left-0 right-0 z-9999">
            <NavBar theme="light" />
        </header>
        <div className={`${Spirit.page.xl} pb5 pt10 pt15-ns pt20-l pb10-ns pb15-l flex flex-column items-center bt bn-ns b--white-10`}>
            <h1 className="ma0 pa0 f2 f1-ns f-headline-l white header-heading-shadow">Need help?</h1>
            <SearchModal isHome />

            <section className="grid-12 gutter-row-20 gutter-36-ns mt10 mt20-ns mt25-l miw-100 miw-auto-ns home-main-box-margin-ns z-999">
                <HomeHeaderBox
                    to="/merchant/getting-started"
                    title="Merchant help"
                    icon="rocket"
                    color="purple"
                >
                    Everything a merchant needs to know
                </HomeHeaderBox>

                <HomeHeaderBox
                    to="/influencer/getting-started"
                    title="Influencer help"
                    icon="rocket"
                    color="blue"
                >
                    Everything an influencer needs to know
                </HomeHeaderBox>

                <HomeHeaderBox
                    to="/releases/2019-01-31"
                    title="Product releases"
                    icon="blocks"
                    color="midgrey"
                >
                    Keep up to date with our releases
                </HomeHeaderBox>
            </section>
        </div>
    </div>
)

export default HomeHeader
