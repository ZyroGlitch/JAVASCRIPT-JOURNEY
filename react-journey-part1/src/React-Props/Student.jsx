import PropTypes from 'prop-types'

function Student(props) {
    return (
        <div>
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Are you a college student? : {props.college ? "Yes" : "No"}</p>
            <hr />
        </div>
    );
}

// PropTypes ensure that the any props inputs are in a valid datatype.
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    college: PropTypes.bool
}

// This set the any no input props to default value
Student.defaultProps = {
    name: "Guest",
    age: 0,
    college: false
}

export default Student