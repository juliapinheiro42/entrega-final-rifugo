import React, { Component } from 'react'
import TradutorService from '../../services/TradutorService';
import './style.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
class CreateTradutorComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            name: '',
            email: '',
            cont: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveOrUpdateTradutor = this.saveOrUpdateTradutor.bind(this);
    }

    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            TradutorService.getTradutorById(this.state.id).then( (res) =>{
                let tradutors = res.data;
                this.setState({name: tradutors.name,
                    email: tradutors.email,
                    cont : tradutors.cont
                });
            });
        }        
    }

    saveOrUpdateTradutor = (e) => {
        e.preventDefault();
        let tradutors = {name: this.state.name, email: this.state.email, cont: this.state.cont};
        console.log('tradutor => ' + JSON.stringify(tradutors));

        // step 5
        if(this.state.id === '_add'){
            TradutorService.createTradutor(tradutors).then(res =>{
                this.props.history.push('/tradutors');
            });
        }else{
            TradutorService.updateTradutor(tradutors, this.state.id).then( res => {
                this.props.history.push('/tradutors');
            });
        }
    }
    
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    changeContHandler= (event) => {
        this.setState({cont: event.target.value});
    }

    cancel(){
        this.props.history.push('/tradutors');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="center">Register Tradutors</h3>
        }else{
            return <h3 className="text-center">Change Tradutors</h3>
        }
    }
    render() {
        return (
            <div>
                <Header/>
                <div className = "container">
                        <div className = "row">
                            <div className = "card-add col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "group">
                                            <label> Name: </label>
                                            <input placeholder="Name" name="name" className="control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "group">
                                            <label> Email: </label>
                                            <input placeholder="email" name="price" className="control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "group">
                                            <label> Language: </label>
                                            <input placeholder="English" name="cont" className="control" 
                                                value={this.state.cont} onChange={this.changeContHandler}/>
                                        </div>

                                        <button className="btn-env" onClick={this.saveOrUpdateTradutor}>Save</button>
                                        <button className="btn-env" onClick={this.cancel.bind(this)} >Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
                   <Footer/>
            </div>
        )
    }
}

export default CreateTradutorComponent;