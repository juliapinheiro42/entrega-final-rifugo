import React from 'react';
import './style.css';
import { Link} from 'react-router-dom';
import axios from 'axios';
class Login extends React.Component {
    
  state = {
    email: '',
    password: '',
    errorMsg: null
  }
  entrar = async () => {
   await axios
   .post('https://rifugo-application.herokuapp.com/api/users/auth', {
    email:  this.state.email,
    password: this.state.password 
   }).then(response => {
     localStorage.setItem('user_log', JSON.stringify(response.data))
     
     this.props.history.push('/tradutors')
   }).catch(error =>{
     this.setState({errorMsg: error.response.data})
    
   })
   
  
  }



render(){
    return (
      <div className="container-sign ">
       
        <div className="login">
          <div className="login-area">
            <h1>RIFUĜO</h1>
           
          </div>
  
          <form >
            <h1>Entrar</h1>
            <input type="email" placeholder="email@email.com" value={this.state.email} onChange={e => this.setState({email: e.target.value})}/>
            <input type="password" placeholder="********" value={this.state.password} onChange={e => this.setState({password: e.target.value})}/>
            <div className='frase'>
            <a onClick={this.entrar}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
         Acessar
          </a>
          </div>
          </form>  
  
          <Link to="/register">Criar uma conta</Link>
          <Link to="/">Cancelar</Link>
        </div>
      </div>
    );
  }
}
  export default Login;