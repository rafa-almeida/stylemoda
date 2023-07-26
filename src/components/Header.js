import * as React from 'react';
import { Button, Container, Typography } from '@material-ui/core';

import { Logo, Nav, Principal }from './styles'


export default function ButtonAppBar() {

  return(
    <Nav>     
      <Logo >Style Moda</Logo>
      <Principal>
      <Button href='#Pesquisa' >Pesquisa</Button>
      <Button href='#Login' >Iniciar Sessão</Button>
      <Button href='#Ajuda' >Ajuda</Button>
      </Principal>
    </Nav>
  );
 }
