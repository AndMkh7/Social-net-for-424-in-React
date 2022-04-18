import React from "react";
import "./Profile.module.css";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { usersAPI } from "../../api/api";

/*Эту функцию я скинул сюда , чтобы не откатить версию react-router-dom. Потому что
в данный момент withRouter не используется и без этого не обойтись*/


function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.router.params.userId
        if (!userId) {
            /*userId =  23100*/
        }
      /*  axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
*/
        usersAPI.getProfile(userId)
            .then(data => {
                this.props.setUserProfile(data);
            });
    }

render ()
{
    return(
        <Profile {...this.props} profile ={this.props.profile} />
    )
}
}

    const mapStateToProps = (state) => ({
            profile: state.profilePage.profile
        });





export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));
