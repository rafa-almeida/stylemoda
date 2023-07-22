import * as React from 'react';

import styles from '../../styles/Header.module.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Button, Container, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import { Search } from '@material-ui/icons';




export default function ButtonAppBar() {
 
  return(
  
          
    <div className= {styles.nav}>
      <div className= {styles.logo}>
      <Typography component="h2" variant="h3" >Style Moda</Typography>
      </div>
      <Button href='#Pesquisa' >Pesquisa</Button>
      <Button href='#Login' >Iniciar Sessão</Button>
      <Button href='#Ajuda' >Ajuda</Button>
    </div>
    
   
  );
 }