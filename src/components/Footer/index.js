import React from 'react';
import './style.css';
import img from '../../assets/img.svg';
import {Link} from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
export default function Footer() {
 return (
   <div className='footer'>
       <div className='logo-footer'>
    <img src={img}/>
    <hr/>
   <h1> RIFUĜO</h1>
    </div>
    <div className='explore'>
        <h3 className='pr-3  '>informações</h3>
        <a>Polícia federal</a>
        <a>CAMI</a>
        <a>Adus</a>
        <a>Refúgio343</a>
        <a>ACNUR</a>
        <a>UNHCR</a>
        <a>Portal de imigração</a>
    </div>
    <div className='about-footer'>
        <h3>Sobre</h3>
        <a>Quem somos</a>
        <a>Home</a>
        <a>Documentação</a>
        <a>Duvidas</a>
        
    </div>
    <div className='help'>
        <h3>AJUDA</h3>
        <a>Suporte</a>
        <a>FAQs</a>
    </div>
    <div className='logos'>
        <h4>Siga nossas redes sociais</h4>
    <InstagramIcon fontSize="large"/>
    <FacebookIcon fontSize="large"/>
    <LinkedInIcon fontSize="large"/>
    <YouTubeIcon fontSize="large"/>
        </div>
   </div>
 );
}