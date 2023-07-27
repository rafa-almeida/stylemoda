import styled  from 'styled-components'

export const General = styled.body`
    
    
    
`;

/* Header*/
export const Logo = styled.h1`
    font-family: 'Cinzel';
    font-weight:800;
    font-size: 90px;
    text-transform: uppercase;
    color: #fff;
    display: flex;
    z-index: 1;
    padding-left: 80px;
    margin-top: 60px;
    

`;

export const Nav = styled.nav`
    z-index: 1;
    position: absolute;
    width: 100vw;
    
`;

export const Principal = styled.a`
    
    display: flex;
    text-decoration: none; 
    align-items: end;
    justify-content: end;
    text-transform: uppercase;
    color: #fff;    
    padding-right: 30px;
    margin-top: -120px;

    a{
    color: #fff;    
    }
`;


/* Index*/
export const Video = styled.header`
    opacity: 0.6;
    height: 108vh;
    width: 100rem;
    margin-bottom: 25px;
    video{
        position: absolute; 
        width: 100rem;
        z-index: -1;
        margin-bottom: 50px;
        margin-left:0;
    }
`;


export const Sale = styled.h1`
   
   background-image:url('https://www.correiodopovo.com.br/image/policy:1.1063962:1689615761/.jpg?f=2x1&$p$f=7d891a5&w=2400&$w=d2ad2f2');
    color:#ffc600 ;
    padding:80px 0 0 50px;
    margin-top:0;
    height: 100vh;
    font-size: ${props => `${props.fontSize}px`};
    width:100rem;
    span {
        display: block;
        font-size:40px;
        
    };

    img{
        width:100rem;
        margin:0;
        
    }
`;

export const Category = styled.h3`
    font-size: 50px;
    margin-bottom: 0;
    font-family: 'Cinzel';
    font-weight:400;

`;

export const Gallery = styled.div `
   display: flex;
   
   img {
    width: 300px;
    padding:15px 15px 0 0 ;
    align-items: center;
    justify-content: center;
    } 

`;

export const Title = styled.span `
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 20px;
    font-family: 'Cinzel';
    font-weight:400;
    color: #000000;
    margin-right:50px;
    
`;


/* FOOTER*/

export const News = styled.footer `
    margin-top:100px;
    height: 40vh;
    padding-top: 200px;
    text-align: center;
    font-size: 20px;
    font-weight: 300;

`;

export const Social = styled.div `
    padding-top: 100px;
   

    a{
    font-size: 15px;
    font-weight: 100;
    padding-right: 40px;
    }
`;

export const Condition = styled.div `
    padding: 200px 0 100px 0;
    font-size: 5px;
    font-weight: 100;

    a{
    font-size: 10px;
    font-weight: 100;
    padding-right: 40px;
    }
`;













