import PropTypes from 'prop-types'
import React from 'react'


const FeedbackForm = ({ location }) => {
    const formTarget = `https://teamghost.typeform.com/to/NcHfDI?page=` + location.href

    return (
        <div>
            <h4>Hey! 👋 Was this page helpful?</h4>
            <div>
                <div>
                    <p>We&apos;re always looking to make our docs better, please let us know if you have any suggestions or advice about what&apos;s working and what&apos;s not!</p>
                </div>
                <div>
                    <a

                        href={formTarget}
                        data-mode="popup"
                        data-hide-headers="true"
                        data-hide-footer="true"
                        data-submit-close-delay="5"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Send Feedback
                    </a>
                    <script src="https://embed.typeform.com/embed.js"></script>
                </div>
            </div>
        </div>
    )
}

FeedbackForm.propTypes = {
    location: PropTypes.shape({
        href: PropTypes.string.isRequired,
    }).isRequired,
}
export default FeedbackForm
