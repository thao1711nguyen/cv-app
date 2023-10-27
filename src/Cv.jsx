import { useState } from "react";
import { Form } from "./components/form/form";
import { Display } from "./components/display/display";
import "./styles/main.css"
import "./styles/form.css"
export function Cv() {
    const [enterData, setEnterData] = useState(true)
    const [data, setData] = useState({})
    function handleSubmit(e) {
        e.preventDefault()
        setEnterData(false)
    }   
    function handleChange(field, value) {
        const newData = {...data}
        newData[field] = value
        setData(newData)
    }
    function handleEdit() {
        setEnterData(true)
    }
    return(
        <>
            <h1>CV Application</h1>
            <Form handleSubmit={handleSubmit}
                handleChange={handleChange}
                appear={enterData} />
            <Display appear={!enterData} data = {data}
                    handleEdit={handleEdit}/>
        </>
    )
}