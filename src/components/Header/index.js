import React from 'react';
import logo from '../../assets/logo1.svg';
import {Link} from 'react-router-dom';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import './style.css';

export default function Header() {
 return (
   <header className='header'>
       <div className='logo'>
       <Link to='/'><img src={logo}/></Link>
       </div>
       <div className='links'>
           <ul>
           <Link to='/aboutus' > Sobre nós</Link>
           <Link to='/documents'>Documentação</Link>
           <Link to='/duvidas'>Dúvidas</Link>
          <Link to='/login'>Login</Link>
          <Link to='/tradutors'> <ChatBubbleIcon  size={10}/></Link>

           </ul>
          
       </div>
       </header>
 );
}