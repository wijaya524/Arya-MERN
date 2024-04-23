import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {  Container } from '@mui/system';
const LayoutsDiv = (props) => {
    const { children} = props
    return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        {children}
      </Container>
    </React.Fragment>
    )
}

export default LayoutsDiv