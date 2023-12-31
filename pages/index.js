import React from 'react'
import '../styles/Index.module.css'
import { Container } from '@material-ui/core'
import TemplateDefault from '../src/templates/Default'
import { Sale, Gallery, Category, Title, Video, General  } from '../src/components/styles'

export default function Home() { 

  return (
    <TemplateDefault>
      <General>
        <Video >
          <video loop autoPlay controls >
            <source autoplay loop src = "/video/video1.mp4" />
          </video> 
        </Video>
      </General>
                  
      <Sale fontSize={80}>
        SALDO
        <span>ONLINE E NAS LOJAS</span>
      </Sale>
        
      <Container>
        <Category>
          Categorias
        </Category>
          
        <Gallery>
          <a href='#Feminina' >
          <img src="https://images.pexels.com/photos/1805412/pexels-photo-1805412.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
          </a>     
          
          <a href='#Masculino'>
          <img src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
          </a>
          

          <a href='#Infantil' >
          <img src="https://images.pexels.com/photos/10508388/pexels-photo-10508388.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
          </a>
          

          <a href='#modaIntima' >
          <img src="https://images.pexels.com/photos/5938392/pexels-photo-5938392.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
          </a>
        </Gallery>
         
        <Title>
          <span>Feminina</span>
          <span>Masculina</span>
          <span>Infantil</span>
          <span>Íntima</span>
        </Title>
      </Container>

    </TemplateDefault>
  )
}
