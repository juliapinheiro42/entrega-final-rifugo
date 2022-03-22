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
        <a href='https://www.gov.br/pf/pt-br' target='_blank'>Polícia federal</a>
        <a  href='https://www.cami.org.br/' target='_blank'>CAMI</a>
        <a  href='https://adus.org.br/?gclid=Cj0KCQjw5-WRBhCKARIsAAId9FmTVeapq-a_pEKxhB_CUayRDysOExzEaCfu0DLrYL83OLpjdu_HclIaAp-GEALw_wcB' target='_blank'>Adus</a>
        <a  href='https://refugio343.org/' target='_blank'>Refúgio343</a>
        <a  href='https://doar.acnur.org/acnur/donate.html' target='_blank'>ACNUR</a>
        <a  href='https://www.unhcr.org/' target='_blank'>UNHCR</a>
        <a  href='https://portaldeimigracao.mj.gov.br/pt/' target='_blank'>Portal de imigração</a>
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
        <a  href='' target='_blank'>Suporte</a>
        <a  href='' target='_blank'>FAQs</a>
    </div>
    <div className='logos'>
        <h4>Siga nossas redes sociais</h4>
    <InstagramIcon  href='https://www.instagram.com/rifugosocial/' fontSize="large" target='_blank'/>
    <FacebookIcon  href='https://www.facebook.com/profile.php?id=100079766552504' fontSize="large" target='_blank'/>
    <LinkedInIcon  href='' fontSize="large" target='_blank'/>
    <YouTubeIcon  href='https://youtu.be/56l3gqoDmdI' fontSize="large" target='_blank'/>
        </div>
   </div>
 );
}