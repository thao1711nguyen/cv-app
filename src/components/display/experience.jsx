import PropTypes from 'prop-types'
import { formatDate } from '../helpers'
export function DisplayExperience({company, position, responsibility, from, to}) {
    
    return(
        <section>
            <h2>Experience</h2>
            <p>Company name: {company} </p>
            <p>Position title: {position}</p>
            <p>Main responsibilities: {responsibility}</p>
            <p>Duration: {formatDate(from)} - {formatDate(to)}</p>
        </section>
    )
}
DisplayExperience.propTypes = {
    company: PropTypes.string, 
    position: PropTypes.string, 
    responsibility: PropTypes.string, 
    from: PropTypes.string, 
    to: PropTypes.string,
}