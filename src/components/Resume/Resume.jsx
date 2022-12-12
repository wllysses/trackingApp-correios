import { Container } from "@mui/material"
import React, { useContext, useEffect, useState } from "react"
import { TrackingContext } from "../../contexts/TrackingContext"
import * as Styled from "./style"

export const Resume = () => {

    const { data } = useContext(TrackingContext)
    const [trackingEvents, setTrackingEvents] = useState([])

    useEffect(() => {
        Object.keys(data).length !== 0 && setTrackingEvents(data.eventos)
    }, [data])

    return (
        <Container>
            {
                trackingEvents.map((data, index) => {
                    return (
                        <Styled.Content key={index}>
                            <div className="resume-header">
                                <h4>{data.local}</h4>
                            </div>
                            <div className="resume-body">
                                <ul>
                                    <li>
                                        <strong>Data</strong>: {data.data} às {data.hora}
                                    </li>
                                    <li>
                                        <strong>Status</strong>: {data.status}
                                    </li>
                                    <li>
                                        {
                                            data.subStatus.map((stat, index) => {
                                                return (
                                                    <React.Fragment key={index}>
                                                        {stat} <br />
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                    </li>
                                </ul>
                            </div>
                        </Styled.Content>
                    )
                })
            }
        </Container>
    )
}