import PropTypes from 'prop-types'
// import { Configure, InstantSearch } from 'react-instantsearch-dom'

// TODO restore search
const SearchWrapper = ({ children }) => (
    children
    // <InstantSearch
    //     appId="GD4R5A2X23"
    //     apiKey="dae857b1379eadf73aee6da0e8790c76"
    //     indexName="merchant"
    // >
    //     <Configure attributesToSnippet="html" />
    //     {children}
    // </InstantSearch>
)

SearchWrapper.propTypes = {
    children: PropTypes.node.isRequired,
}

export default SearchWrapper
