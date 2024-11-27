import styles from './style/UserLogin.module.css'
import PropTypes from 'prop-types'

function UserLogin(props) {
    const welcomeMessage = <h2 className={styles.success}>Welcome {props.username}</h2>;

    const errorMessage = <h2 className={styles.failed}>Provide the correct information</h2>;

    return (
        props.isLoggedIn ? welcomeMessage : errorMessage
    );
}

// PropTypes ensure that the any props inputs are in a valid datatype.
UserLogin.propTypes = {
    username: PropTypes.string,
    isLoggedIn: PropTypes.bool
}

export default UserLogin