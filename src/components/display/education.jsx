import PropTypes from 'prop-types'
import { formatDate } from '../helpers'
export function DisplayEducation({school, study, date}) {
    
    return(
        <section>
            <h2>Education</h2>
            <p>School name: {school}</p>
            <p>Title of study: {study}</p>
            <p>Date of study: {formatDate(date)}</p>
        </section>
    )
}
DisplayEducation.propTypes = {
    school: PropTypes.string, 
    study: PropTypes.string,
    date: PropTypes.string,
}