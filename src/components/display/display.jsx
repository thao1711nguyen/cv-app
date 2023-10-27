import PropTypes from 'prop-types'

import { DisplayEducation } from "./education"
import { DisplayExperience } from "./experience"
import { DisplayGeneralInfo } from "./general-info"
export function Display({data, appear, handleEdit}) {
    return(
        <div style={{display: appear ? 'block' : 'none'}}>
            <button type='button' onClick={handleEdit}>Edit</button>
            <DisplayGeneralInfo name={data.name} email={data.email} phone={data.phone} />
            <DisplayEducation school={data.school} study={data.study} date={data.date} />
            <DisplayExperience company={data.company} position={data.position} responsibility={data.responsibility} from={data.from} to={data.to} />
        </div>
    )
}
Display.propTypes = {
    data: PropTypes.object,
    appear: PropTypes.bool,
    handleEdit: PropTypes.func,
}

