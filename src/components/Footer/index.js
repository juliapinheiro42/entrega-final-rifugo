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
        <h3 className='pr-3'>informações</h3>
        <a href=''>Polícia federal</a>
        <a  href=''>CAMI</a>
        <a  href=''>Adus</a>
        <a  href=''>Refúgio343</a>
        <a  href=''>ACNUR</a>
        <a  href=''>UNHCR</a>
        <a  href=''>Portal de imigração</a>
    </div>
    <div className='about-footer'>
        <h3>Sobre</h3>
        <Link to='/aboutus'>Quem somos</Link>
        <Link to='/'>Home</Link>
        <Link to='/documents'>Documentação</Link>
        <Link to='/duvidas'>Duvidas</Link>
        
    </div>
    <div className='help'>
        <h3>AJUDA</h3>
        <a  href=''>Suporte</a>
        <a  href=''>FAQs</a>
    </div>
    <div className='logos'>
        <h4>Siga nossas redes sociais</h4>
    <InstagramIcon  href='' fontSize="large"/>
    <FacebookIcon  href='' fontSize="large"/>
    <LinkedInIcon  href='' fontSize="large"/>
    <YouTubeIcon  href='' fontSize="large"/>
        </div>
   </div>
 );
}