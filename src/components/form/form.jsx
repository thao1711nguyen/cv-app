import PropTypes from 'prop-types'
import { FormEducation } from "./education" 
import { FormGeneralInfo } from "./general-info"
import { FormExperience } from "./experience"
export function Form({handleSubmit, handleChange, appear}) {
    return(
        
        <form action="" style={{display: appear ? 'flex' : 'none'}}>
            <FormGeneralInfo handleChange={handleChange}/>
            <FormEducation handleChange={handleChange}/>
            <FormExperience handleChange={handleChange}/>
            <button onClick={handleSubmit}>Submit</button>
        </form> 

    
    )
}
Form.propTypes = {
    handleSubmit: PropTypes.func, 
    handleChange: PropTypes.func,
    appear: PropTypes.bool,
}