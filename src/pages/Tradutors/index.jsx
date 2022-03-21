import React, { Component } from 'react'
import './style.css';
import TradutorService from '../../services/TradutorService';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import img from '../../assets/img.svg';
class TradutorComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                tradutor: []
        }
        this.addTradutor = this.addTradutor.bind(this);
        this.editTradutor = this.editTradutor.bind(this);
        this.deleteTradutor = this.deleteTradutor.bind(this);
    }

    deleteTradutor(id){
        TradutorService.deleteTradutor(id).then( res => {
            this.setState({tradutor: this.state.tradutor.filter(tradutor => tradutor.id !== id)});
        });
    }
    editTradutor(id){
        this.props.history.push(`/add-tradutor/${id}`);
    }

    componentDidMount(){
        TradutorService.getTradutor().then((res) => {
            this.setState({ tradutor: res.data});
        });
    }

    addTradutor(){
        this.props.history.push('/add-tradutor/_add');
    }

    render() {
        return (
            <div className='card-tradutor'>
                <Header/>
                <div className='tradutor-btn'>
                <h2 className="text-center mt-3">Tradutors</h2>
                <div className='button'>
       <a className='d-flex justify-content-center m-3' onClick={this.addTradutor}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Tradutor Register
          </a>
          </div>
               
                </div>
                <div className='d-flex cards-tradutors'>
                { this.state.tradutor.map(
                                        tradutor => 
                <Card style={{ width: '18rem' }} key = {tradutor.id} className='m-5 b-card'>
                <Card.Img variant="top" src={img} />
            
                <Card.Body className=''>
              
                <Card.Title className='text-center' >{ tradutor.name}</Card.Title>
                <Card.Text className='text-center'>
                 {tradutor.email}
                 <br/>
                 {tradutor.cont}
                </Card.Text>
               <div className='d-flex'>
                <button className='btn-tradutor ' onClick={ () => this.editTradutor(tradutor.id)}>Update </button>
                <button className='btn-tradutor' onClick={ () => this.deleteTradutor(tradutor.id)} >Delete </button>
                
                </div>
                </Card.Body>
              
                </Card>
                 )}
                 </div>
                 <div className='chat-tradutor'>
                     <h3>Chat with Tradutors</h3>
                 <Link to='/chat'> <ChatBubbleIcon fontSize="large"/></Link>
                 </div>
                 <Footer/>
            </div>
            
        )
    }


 
  
    
}

export default TradutorComponent;