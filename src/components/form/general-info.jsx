import PropTypes from 'prop-types'

export function FormGeneralInfo({handleChange}) {
    return(
        <section>
            <h2>General Information</h2>
            <label htmlFor="name">Name</label>
            <input autoFocus type="text" id="name" onChange={(e) => handleChange(e.target.id, e.target.value)} />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={(e) => handleChange(e.target.id, e.target.value)}/>
            <label htmlFor="phone">Phone number</label>
            <input type="tel" id="phone" onChange={(e) => handleChange(e.target.id, e.target.value)}/>
        </section>
    )
}
FormGeneralInfo.propTypes = {
    handleChange: PropTypes.func,
}