
import React from 'react'
import { Button } from '@material-ui/core'
import { News, Social, Condition } from './styles'


export default function Footer() {
        
    return (
        <News>
            
            <div>
                RECEBA A NOSSA NEWSLETTER
            </div>
            <Social>
                <Button href='#Tiktok'>TIKTOK</Button>
                <Button href='#Instagram'>INSTAGRAM</Button>
                <Button href='#Facebook'>FACEBOOK</Button>
                <Button href='#Twitter'>TWITTER</Button>
                <Button href='#Pinterest'>PINTEREST</Button>
                <Button href='#Youtube'>YOUTUBE</Button>
                <Button href='#Spotfy'>SPOTIFY</Button>
            </Social>
        
            <Condition >
                <Button href='#Cookies'>DEFINIÇÕES DE COOKIES</Button>
                <Button href='#Privacidade'>POLÍTICA DE PRIVACIDADE E COOKIES</Button>
                <Button href='#Condições'>CONDIÇÕES DE COMPRA</Button>
            </Condition>
           
        </News>
    )
}
