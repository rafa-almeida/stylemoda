import * as React from 'react';

import styles from '../../styles/Header.module.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Button, Typography } from '@material-ui/core';


export default function ButtonAppBar() {
 
  return(
    
    <div className= {styles.nav}>
      <div className= {styles.logo}>
      <Typography component="h2" variant="h3" >Style Moda</Typography>
      </div>
      <Button href='#pesquisa' >Pesquisa</Button>
      <Button href='#Login' >Iniciar Sessão</Button>
      <Button href='#Ajuda' >Ajuda</Button>
    </div>
    
  );
 }