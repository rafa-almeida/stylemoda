import React from 'react'
import { Box, Container, Typography } from '@material-ui/core'
import index from '../styles/Index.module.css'
import TemplateDefault from '../src/templates/Default'



export default function Home() {
  return (
    <TemplateDefault>
      <video autoPlay loop controls  className= {index.main} >
        <source src = "/video/video1.mp4" />
      </video>         
        
        
        
    </TemplateDefault>
  )
}