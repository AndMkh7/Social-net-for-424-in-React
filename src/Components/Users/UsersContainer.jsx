import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setUsers,
    unfollow,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching, toggleFollowingProgress
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/preloader";
import { usersAPI } from "../../api/api";

class UsersAPIComponent extends React.Component {

    componentDidMount() {

        this.props.toggleIsFetching(true);
        /*axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
*/
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);

            });

    }

    onPageChanged = (pageNumber) => {

        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        /*axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });*/

        usersAPI.getUsers(pageNumber,this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);

            });


    }

    render() {

        return <>
                    {this.props.isFetching ? <Preloader /> :null}

                    <Users totalUsersCount={this.props.totalUsersCount}
                                 pageSize={this.props.pageSize}
                                 currentPage={this.props.currentPage}
                                 onPageChanged={this.onPageChanged}
                                 users={this.props.users}
                                 follow={this.props.follow}
                                 unfollow={this.props.unfollow}
                                 toggleFollowingProgress = {this.props.toggleFollowingProgress}
                                 followingInProgress = {this.props.followingInProgress}

                    />
                </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress,
    }
}

export default connect(mapStateToProps, {
    follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount,toggleIsFetching,toggleFollowingProgress})
    (UsersAPIComponent);