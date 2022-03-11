import React from 'react';
import Header from '../../components/Header';
import { Link} from 'react-router-dom';

export default function Login() {
    
    return (
      <div className="container-sign">
        <Header/>
        <div className="login">
          <div className="login-area">
            <h1>RIFUĜO</h1>
           
          </div>
  
          <form >
            <h1>Entrar</h1>
            <input type='text'placeholder="seu nome" />
            <input type="email" placeholder="email@email.com"/>
            <input type="password" placeholder="*******" />
            <div className='frase'>
            <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
         Acessar
          </a>
          </div>
          </form>  
  
          <Link to="/login">Já tem uma conta? Login</Link>
        </div>
      </div>
    );
  }