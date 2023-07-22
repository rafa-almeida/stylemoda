import React, { Component }from 'react'
import '../styles/Index.module.css'
import { Container, Grid, Box, Typograghy, Chip, Card, CardHeader, CardMedia } from '@material-ui/core'
import TemplateDefault from '../src/templates/Default'
import Carousel from 'react-material-ui-carousel'

import {motion, useScroll, useTransform} from 'framer-motion'
import { Sale, Gallery } from '../src/components/styles'



export default function Home() {
  const [move, setMove]= React.useState(false);

    

 
  return (
    <TemplateDefault>
      <video autoPlay loop controls  className= 'main' >
        <source src = "/video/video1.mp4" />
      </video> 
       
        <motion.div 
          animate={{x: move ? 0 : 0 }}
          transition={{ delay: 2 }}
          onScroll={() => {
            setMove(!move);
          }}
        >
          
          <Sale fontSize={80}>
            
            SALDO
            <span>ONLINE E NAS LOJAS</span>
            
          </Sale>
        </motion.div>

        <Gallery>
        <img src="https://i.pinimg.com/564x/36/7c/a1/367ca1dc6397d8e7e2f6d489efb34bcc.jpg"></img>
        <img src="https://images.pexels.com/photos/1805412/pexels-photo-1805412.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
        <img src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
        <img src="https://images.pexels.com/photos/10508388/pexels-photo-10508388.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
        </Gallery>
  


        
      
      
      
    
      
    
      

                    
                    
           
        





        
       
    </TemplateDefault>
  )
}
/*
  <Container className= {index.carousel}>
        <Box className= {index.carouselBox} >
          <Carousel
          className= {index.carousel1}
          stopAutoPlayOnHover={true}
            navButtonsAlwaysInvisible='true'
            indicatorsInvisible='true'
            
                  >
            
            <h2>Saldo <br></br> ONLINE E NA LOJAS</h2>
            <h4></h4>
            
          </Carousel>
        </Box>
      </Container>
        */