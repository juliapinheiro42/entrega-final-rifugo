import React from 'react';
import './style.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import refugee from '../../assets/img.svg';
import logo2 from '../../assets/logo2.svg';
import { Link } from 'react-router-dom';


export default function Home() {
 return (
   <div>
    <Header/>
    <div className='animation'>
    <div className='frase'>
        <h1> Ajude na quebra <br/>da barreira linguística</h1>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Clique aqui
          </a>
       </div>
       <div  className='circle'></div>
       <svg className='d-none d-md-flex'>
         <filter id="wavy">
           <feTurbulence x="0" y="0" baseFrequency="0.009" numOctaves="5" seed="2">
            <animate attributeName="baseFrequency" dur="60s" values="0.02;0.005;0.02" repeatCount="indefinite"></animate>
             </feTurbulence>
             <feDisplacementMap in="SourceGraphic" scale="30"></feDisplacementMap>
           </filter>
       </svg>
       
    </div>
    <div className='cardes'>
        <div  class="card1 mb-sm-3 m-2 mb-lg-4 d-block">
       <Link to='/documents'><img src={refugee} alt='refugiados'/></Link> 
        </div>
        <div class="card2 mb-sm-3 m-2 d-none d-md-block mb-lg-4">
        <Link to='/duvidas'><img src={refugee} alt='refugiados'/></Link>
        </div>
        <div class="card3 mb-sm-3 m-2 d-none d-lg-block mb-lg-4 ">
        <Link to='/tradutors'><img src={refugee} alt='refugiados'/></Link>
        </div>
        
    </div>

    <div className=' words'>
      <h2>Conheça Rifuĝo</h2>
      <div>
      <h5>Rifuĝo significa Refúgio em Esperanto</h5>
      <span>Esperanto foi criado com a intenção<br/> de gerar
     maior entendimento entre os<br/> povos que quebraria a 
     barreira linguística. <br/>
     O termo esperanto significa "aquele que tem esperança".<br/> </span>
      <span>Rifugô é um site com o foco na documentação <br/>
      dos refugiados e no combate da barreira linguística <br/>
      que atinge esse grupo minoritário.</span> <br/>
      <span>Com o design totalmente pensado nos refugiados,<br/>
      as cores são em homenagem a bandeira apresentada <br/>
      nas Olimpíadas.
       </span>
       <div className='button'>
       <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Saiba mais
          </a>
          </div>
       </div>
       <div className='logo2'>
       <img src={logo2}/>
       </div>
     
    </div>
   
   <Footer/>
   </div>
 );
}