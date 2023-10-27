import PropTypes from 'prop-types'

export function DisplayGeneralInfo({name, email, phone}) {
    return(
        <section>
            <h2>General Information</h2>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone number: {phone}</p>
        </section>
    )
}
DisplayGeneralInfo.propTypes = {
    name: PropTypes.string, 
    email: PropTypes.string, 
    phone: PropTypes.string
}