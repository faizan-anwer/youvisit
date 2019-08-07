import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import "./home-page.css"
import { userActions } from '../actions';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="col-md-9 col-md-offset-3">
                <h1>Welcome {user.firstName}!</h1>
                <p className="alert alert-success">Login Success</p>
                <p>Username: {user.username}</p>
                <p>Name: {user.firstName} {user.lastName}</p>
                <p>UserID: {user.id}</p>
                <h3>All registered users:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                <div className="container">
                    {users.items &&

                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>UserID</th>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Password</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>

                                {users.items.map((user, index) =>
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.firstName + ' ' + user.lastName}</td>
                                        <td>{user.username}</td>
                                        <td>{user.password}</td>
                                        <td>{
                                            user.deleting ? <em> - Deleting...</em>
                                                : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                                    : <span> <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                        }</td>

                                    </tr>
                                )}

                            </tbody>
                        </table>
                    }
                </div>
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };