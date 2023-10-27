import PropTypes from 'prop-types'
export function FormEducation(props) {
    return(
        <section>
            <h2>Educational experience</h2>
            <label htmlFor="school">School</label>
            <input type="text" id="school" onChange = {(e) => props.handleChange(e.target.id, e.target.value)}/>
            <label htmlFor="study">Title of study</label>
            <input type="text" id="study" onChange = {(e) => props.handleChange(e.target.id, e.target.value)}/>
            <label htmlFor="date">Date of study</label>
            <input type="date" id='date' onChange = {(e) => props.handleChange(e.target.id, e.target.value)}/>
        </section>
    )
}
FormEducation.propTypes = {
    handleChange: PropTypes.func,
}