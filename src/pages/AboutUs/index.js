import React from 'react';
import './style.css';
import Header from '../../components/Header'; 
import logo2 from '../../assets/logo2.svg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ReplayIcon from '@mui/icons-material/Replay';
import {Link} from 'react-router-dom';
import Footer from '../../components/Footer';

export default function AboutUs() {
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
       <svg>
         <filter id="wavy">
           <feTurbulence x="0" y="0" baseFrequency="0.009" numOctaves="5" seed="2">
            <animate attributeName="baseFrequency" dur="60s" values="0.02;0.005;0.02" repeatCount="indefinite"></animate>
             </feTurbulence>
             <feDisplacementMap in="SourceGraphic" scale="30"></feDisplacementMap>
           </filter>
       </svg>
    </div>
    <div className='who'>
        <h1 >Nosso propósito</h1>
        <h4>Para quem?</h4>
        <hr/>
        <span>Refugiados que não conseguem achar informações<br/> sobre como tirar a documentação no Brasil.</span>
        </div>
        <div  className='why'>
        <h4>Por quê?</h4>
        <hr/>
        <span> Por falta de informação para os refugiados sobre <br/>documentação, como por exemplo, o pedido de refúgio. <br className='d-block'/>
        Muitos refugiados não sabem como ou onde tirar<br/> esses documentos.
            Para isso criamos o rifugô. </span>
        </div>
        <div className='how'>
            <h4>Como?</h4>
        <hr/>
        <span> Rifugô foi o site que criamos para que a desinformação<br/> ou a barreira linguística não seja um problema para os refugiados.<br/>
         O site conta com APIs para geolocalização e tradução,<br/>
            também conta com tradutores voluntários<br /> para melhor comunicação. </span>
            </div>
            <div className='about-logo2'>
               <img src={logo2}/>
            </div>
            <div className='mor-div'>
       <h1 >Conheça a nossa equipe</h1>
   <div className=" rowcard">
   <div className="outer-div">
                <div className="inner-div">
                    <div className="front">
                        <div className="front__bkg-photo"></div>
                        <div className="front__face-photo">
                        <img src={`https://github.com/juliapinheiro42.png`}/>
                        </div>
                        <div className="front__text">
                            <h3 className="front__text-header">Julia Pinheiro</h3>
                         
                            <span className="text-muted">front-end developer</span>
                            <br/>
                            <span className="front__text-hover">
                    
                                Redes sociais
                                <ReplayIcon fontSize="small"/>
                            </span>
                        </div>
                    </div>
                    <div className="back">
                        <Link className='mr-2' href={`https://github.com/juliapinheiro42`}><GitHubIcon fontSize="large"/></Link>
                        <Link href={`https://www.linkedin.com/in/julia-pinheiro-992a59180/`}><LinkedInIcon fontSize="large"/></Link>
                    </div>

                </div>
            </div>

            <div className="outer-div">
                <div className="inner-div">
                    <div className="front">
                        <div className="front__bkg-photo"></div>
                        <div className="front__face-photo">
                        <img src={`https://github.com/LFC222.png`}/>
                        </div>
                        <div className="front__text">
                            <h3 className="front__text-header">Lucas Cavalcante</h3>
                          
                            <span className="text-muted">back-end developer</span>
                            <br/>
                            <span className="front__text-hover">
                    
                                Redes sociais
                                <ReplayIcon fontSize="small"/>
                            </span>
                        </div>
                    </div>
                    <div className="back">
                        <Link className='mr-2' href={`https://github.com/LFC222`}><GitHubIcon fontSize="large"/></Link>
                        <Link><LinkedInIcon fontSize="large"/></Link>
                    </div>
                </div>
            </div>
            <div className="outer-div">
                <div className="inner-div">
                    <div className="front">
                        <div className="front__bkg-photo"></div>
                        <div className="front__face-photo">
                        <img src={`https://github.com/Adc1986.png`}/>
                        </div>
                        <div className="front__text">
                            <h3 className="front__text-header">Alice Danyelle</h3>
                          
                            <span className="text-muted">Back-end developer</span>
                            <br/>
                            <span className="front__text-hover">
                    
                                Redes sociais
                                <ReplayIcon fontSize="small"/>
                            </span>
                        </div>
                    </div>
                    <div className="back">
                        <Link className='mr-2' href={`https://github.com/Adc1986`}><GitHubIcon fontSize="large"/></Link>
                        <Link><LinkedInIcon fontSize="large"/></Link>
                    </div>

                </div>
            </div>
                </div>
                </div>
                <div className='footer-about'>
                <Footer/>
                </div>
   </div>
 );
}