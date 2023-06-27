import * as React from "react";

// export interface IntercomChatProps {
//     config: Config
//     user: UserStore
// }

// export interface IntercomChatState {
// }

// export interface IntercomUser {
//     user_id: string
//     email: string
//     name: string
//     avatar: {
//         type: "avatar",
//         image_url: string
//     }
//     custom_attributes: {
//         user_type: string
//     }
//     companies?: {
//         company_id: string
//         name: string
//     }[]
// }

export default class IntercomChat extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {

        // if (this.props.user.IsStoreOwner) {

        // let intercomUser = {
        //     user_id: this.props.user.Id,
        //     email: this.props.user.Email,
        //     name: this.props.user.Name,
        //     avatar: {
        //         type: "avatar",
        //         image_url: this.props.user.PictureUrl
        //     },
        //     custom_attributes: {
        //         user_type: UserAccountType[this.props.user.Type]
        //     }
        // }

        // intercomUser.companies = this.props.user.Stores.map(s => {
        //     return {
        //         company_id: s.id,
        //         name: s.name
        //     }
        // })

        // if (!isProduction()) {
        //     log(intercomUser)
        // }

        // let intercom_app_id = "dmj68kq8"

        // return <Intercom
        //     appID={intercom_app_id}
        // />

        // }

        return null
    }
}
