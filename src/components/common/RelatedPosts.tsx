// import { Link } from 'gatsby'
// import PropTypes from 'prop-types'
// import React from 'react'

// // TODO review
// const RelatedPosts = ({ relatedPosts, showImages }) => (
//     <ul >
//         {relatedPosts.map(({ node }, i) => (
//             <li key={i}>
//                 <Link to={node.url}  >
//                     {showImages && node.feature_image ?
//                         <div>
//                             <img

//                                 style={{ objectFit: `contain` }}
//                                 src={`https://res.cloudinary.com/tryghost/image/fetch/w_60,h_50,c_fit/` + node.feature_image}
//                                 alt={node.title}
//                             />
//                         </div>
//                         : null
//                     }
//                     <div>{node.title}</div>
//                 </Link>
//             </li>
//         ))}
//     </ul>
// )

// RelatedPosts.defaultProps = {
//     showImages: false,
// }

// RelatedPosts.propTypes = {
//     relatedPosts: PropTypes.arrayOf(
//         PropTypes.shape({
//             node: PropTypes.shape({
//                 title: PropTypes.string.isRequired,
//                 url: PropTypes.string.isRequired,
//                 feature_image: PropTypes.string,
//             }).isRequired,
//         })).isRequired,
//     showImages: PropTypes.bool,
// }

// export default RelatedPosts
