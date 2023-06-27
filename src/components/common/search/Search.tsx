// import PropTypes from 'prop-types'
// import React from 'react'
// import Autosuggest from 'react-autosuggest'
// import { Configure, connectAutoComplete, Highlight, Index, Snippet } from 'react-instantsearch-dom'
// import { SearchConfig } from '../../../../utils/algolia-queries'
// import { Link } from '../Link'

// const HitTemplate = ({ hit }) => (
//     <Link to={hit.url} >
//         <h4>
//             <Highlight attribute="title" hit={hit} tagName="mark" />
//         </h4>
//         <p>
//             <Snippet attribute="html" hit={hit} />
//             ...
//         </p>
//     </Link>
// )

// HitTemplate.propTypes = {
//     hit: PropTypes.shape({
//         url: PropTypes.string.isRequired,
//     }).isRequired,
// }

// class Results extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             value: this.props.currentRefinement,
//         }

//         this.onChange = this.onChange.bind(this)
//         this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this)
//         this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this)
//         this.getSuggestionValue = this.getSuggestionValue.bind(this)
//         this.renderSuggestion = this.renderSuggestion.bind(this)
//         this.renderSectionTitle = this.renderSectionTitle.bind(this)
//         this.getSectionSuggestions = this.getSectionSuggestions.bind(this)
//     }

//     onChange(event, { newValue }) {
//         this.setState(() => {
//             return { value: newValue }
//         })
//     }

//     onSuggestionsFetchRequested({ value }) {
//         this.props.refine(value)
//     }

//     onSuggestionsClearRequested() {
//         this.props.refine()
//     }

//     getSuggestionValue(hit) {
//         return hit.title
//     }

//     renderSuggestion(hit) {
//         return <HitTemplate hit={hit} />
//     }

//     renderSectionTitle({ index }) {
//         const labelClass = {
//             merchant: `merchant-color b--merchant-color`,
//             influencer: `influencer-color b--influencer-color`,
//             user: `user-color b--user-color`
//         }

//         return <span>{SearchConfig[index]}</span>
//     }

//     getSectionSuggestions(section) {
//         return section.hits
//     }

//     render() {
//         // Don't show sections with no results
//         const hits = this.props.hits.filter(hit => hit.hits && hit.hits.length !== 0)

//         const { value } = this.state
//         const inputProps = {
//             placeholder: `Search`,
//             onChange: this.onChange,
//             value,
//             autoFocus: true,
//             "data-cy": `search-input`,
//         }

//         const inputTheme = `input-reset form-text b--transparent search-modal-field-bg br-pill flex-auto whitney lh-normal pa2 pl8 plr3 w-100 dark-placeholder`

//         const theme = {
//             input: inputTheme,
//             inputOpen: inputTheme,
//             inputFocused: inputTheme,
//             suggestionsContainerOpen: `pa11 pt3 pb3 mt10 bt b--whitegrey nl10 nr10 nb10 search-modal-result-container`,
//             suggestionsList: `list pa0 ma0 pt1 search-modal-suggestion-list flex-auto ml11`,
//             sectionContainer: `pb4`,
//             sectionTitle: `f8 lh-h4 fw5 midgrey w30 tr mt2 sticky top-2 pr2`,
//         }

//         return (
//             <>
//                 <Configure hitsPerPage="5" />
//                 <Autosuggest
//                     suggestions={hits}
//                     onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
//                     onSuggestionsClearRequested={this.onSuggestionsClearRequested}
//                     getSuggestionValue={this.getSuggestionValue}
//                     renderSuggestion={this.renderSuggestion}
//                     inputProps={inputProps}
//                     multiSection={true}
//                     theme={theme}
//                     renderSectionTitle={this.renderSectionTitle}
//                     getSectionSuggestions={this.getSectionSuggestions}
//                 />
//                 <Index indexName="merchant" />
//                 <Index indexName="influencer" />
//                 {/* <Index indexName="user" /> */}
//             </>
//         )
//     }
// }

// // Results.propTypes = {
// //     hits: PropTypes.arrayOf(
// //         PropTypes.object.isRequired,
// //     ).isRequired,
// //     currentRefinement: PropTypes.string.isRequired,
// //     refine: PropTypes.func.isRequired,
// // }

// const AutoComplete = connectAutoComplete(Results)

// export default AutoComplete
