import styled  from 'styled-components'

export const General = styled.body`
    z-index: 1;
    
    
    width: 100%;
    
`;

/* Header*/
export const Logo = styled.h1`
    
    text-transform: uppercase;
    color: #ffffff;
    display: flex;
    z-index: 1;
    padding-left: 80px;
    margin-top: 60px;
    font-size: 60px;

`;

export const Nav = styled.nav`
 
    z-index: 1;
    position: absolute;
    
    width: 100vw;
    
`;

export const Principal = styled.a`
    
    display: flex;
    text-decoration: none; 
    align-items: center;
    justify-content: end;
    text-transform: uppercase;
    color: #fff;    
    z-index: 1;
    margin-top: -120px;

    a{
    color: #fff;    
  
    }
`;


/* Index*/
export const Video = styled.header`
     position: relative;
    z-index: -1;
    opacity: 0.7;
    width: 50%;
    
    source{
        width: 50%;
        
    }
`;


export const Sale = styled.h1`
   
   background-image:url('https://www.correiodopovo.com.br/image/policy:1.1063962:1689615761/.jpg?f=2x1&$p$f=7d891a5&w=2400&$w=d2ad2f2');
    color:#ffc600 ;
    padding:80px 0 0 50px;
    margin-top:0;
    height: 100vh;
    font-size: ${props => `${props.fontSize}px`};
    
    span {
        display: block;
        font-size:40px;
        
    };

    img{
        width:100%;
        margin:0;
        
       
    }
`;

export const Category = styled.h3`
    font-size: 50px;
    margin-bottom: 0;

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
    color: #000000;
    margin-right:50px;
       
        
      

`;

