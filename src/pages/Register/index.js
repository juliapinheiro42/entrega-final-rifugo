import React from 'react';
import Header from '../../components/Header';
import { Link} from 'react-router-dom';
import axios from 'axios';

class Register extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    errorMsg: null
  }
  entrar = async () => {
   await axios
   .post('http://localhost:8080/api/users', {
     name:  this.state.name,
    email:  this.state.email,
    password: this.state.password 
   }).then(response => {

    this.props.history.push('/login')
  }).catch(error => {
    this.setState({errorMsg: error.response.data})
  })
 
  
  }
  render(){
    return (
      <div className="container-sign">
        <div className="login">
          <div className="login-area">
            <h1>RIFUĜO</h1>
           
          </div>
  
          <form >
            <h1>Entrar</h1>
            <input type='text'placeholder="seu nome" value={this.state.name} onChange={e => this.setState({name: e.target.value})} />
            <input type="email" placeholder="email@email.com" value={this.state.email} onChange={e => this.setState({email: e.target.value})}/>
            <input type="password" placeholder="*******" value={this.state.password} onChange={e => this.setState({password: e.target.value})}/>
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
  
          <Link to="/login">Já tem uma conta? Login</Link>
        </div>
      </div>
    );
  }
}
export default Register;