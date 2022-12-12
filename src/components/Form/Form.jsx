import { Container } from "@mui/material"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as Styled from "./style"
import { getTracking } from "../../services/api";
import { useContext, useState } from "react";
import { TrackingContext } from "../../contexts/TrackingContext";

export const Form = () => {

    const { setData } = useContext(TrackingContext)

    const [input, setInput] = useState('')

    async function fetchData() {
        const tracking = await getTracking(input)
        setData(tracking)
    }

    return (
        <Container>
            <Styled.Content>
                <div className="form-header">
                    <h2>Rastrear encomenda</h2>
                </div>
                <div className="form-body">
                    <TextField
                        id="standard-basic"
                        label="Digite o código de rastreio"
                        variant="standard"
                        placeholder="AA1234456789BR"
                        fullWidth
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button 
                        variant="contained"
                        onClick={fetchData}
                    >
                        Rastrear
                        </Button>
                </div>
            </Styled.Content>
        </Container>
    )
}