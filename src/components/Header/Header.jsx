import * as Styled from './style'
import { Typography } from '@mui/material'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

export const Header = () => {
    return (
        <Styled.Content>
            <header>
                <AddLocationAltIcon 
                sx={{color: 'var(--yellow)', fontSize: 80}}
                />
                <Typography variant='h1'><span>MyTracking</span>App</Typography>
            </header>
        </Styled.Content>
    )
}