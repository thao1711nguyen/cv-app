import PropTypes from 'prop-types'

export function FormExperience(props) {
    return(
        <section>
            <h2>Work experience</h2>
            <label htmlFor="company">Company name</label>
            <input type="text" id="company" onChange={(e) => props.handleChange(e.target.id, e.target.value)}/>
            <label htmlFor="position">Position title</label>
            <input type="text" id="position" onChange= {(e) => props.handleChange(e.target.id, e.target.value)} />
            <label htmlFor="responsibility">Main responsibilities</label>
            <textarea name="responsibility" id="responsibility" cols="30" rows="10" 
                     onChange={(e) => props.handleChange(e.target.id, e.target.value)}></textarea>
            <div>
                <div>
                    <label htmlFor="from">From</label>
                    <input type="date" id="from" onChange={(e) => props.handleChange(e.target.id, e.target.value)}/>

                </div>
                <div>
                    <label htmlFor="to">To</label>
                    <input type="date" id="to" onChange = {(e)=> props.handleChange(e.target.id, e.target.value)}/>

                </div>
            </div>
        </section>
    )
}
FormExperience.propTypes = {
    handleChange: PropTypes.func,
}