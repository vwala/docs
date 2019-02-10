import { Link } from 'gatsby';
import React from 'react';
import { Icon } from '../components/common';
import { Layout } from '../components/common/layout';
import { Spirit } from '../styles/spirit-styles';

const NotFoundPage = () => (
    <Layout headerDividerStyle="shadow">
        <div className={`${Spirit.page.m} pt-vw5 pb-vw5 flex flex-column items-center`}>
            <Icon name="four-o-four-icon" className="w15 h-auto stroke-lightgrey" />
            <h1 className={Spirit.h1}>404</h1>
            <p className={`${Spirit.p} midgrey`}>Whoops! That page does not exist</p>
            <div className="flex mt5">
                <Link to="/" className="pa2 dib blue hover-darkgrey link br b--whitegrey">Home</Link>
                <a href="https://vwa.la/" className="pa2 dib blue hover-darkgrey link">vwa.la</a>
            </div>
        </div>
    </Layout>
)

export default NotFoundPage
