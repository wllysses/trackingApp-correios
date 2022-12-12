import { Header } from "../components/Header/Header"
import { Form } from "../components/Form/Form"
import { Resume } from "../components/Resume/Resume"
import { TrackingContext } from "../contexts/TrackingContext"
import { useState } from "react"

export const Home = () => {

    const [data, setData] = useState({})

    return (
        <TrackingContext.Provider value={{data, setData}}>
            <Header />
            <Form />
            <Resume />
        </TrackingContext.Provider>
    )
}