import React from 'react'
import {useStyles} from './Pagecontainer.style'
import {Container} from '@material-ui/core'


export const Pagecontainer : React.FC = ({children}) => { 
   const styles = useStyles();

    return(
      <Container maxWidth="xs" className={styles.containerstyle}>
        {children as React.ReactChildren}
      </Container>
      
    )
        

    
}