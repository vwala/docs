import PropTypes from 'prop-types';
import React from "react";
import { Configure, InstantSearch } from 'react-instantsearch-dom';

const SearchWrapper = ({ children }) => (
    <InstantSearch
        appId="GD4R5A2X23"
        apiKey="dae857b1379eadf73aee6da0e8790c76"
        indexName="faq"
    >
        <Configure attributesToSnippet="html" />
        {children}
    </InstantSearch>
)

SearchWrapper.propTypes = {
    children: PropTypes.node.isRequired,
}

export default SearchWrapper
