import React, {useState, useEffect} from 'react';
import {over} from 'stompjs';
import SockJS from 'sockjs-client';
import './style.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Collapse, NavbarToggler,Navbar, Nav} from 'reactstrap';
var stompClient = null;

const Chat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)
    const [publicChat, setPublicChat] = useState([]); 
    const [privateChats, setPrivateChats] = useState(new Map());
    const [tab,setTab] = useState("CHATROOM");
    const [userData, setUserData] = useState({
        username: "",
        receiverName:"",
        connected: false,
        message: ""
    });
    useEffect(() => {
        console.log(userData);
    }, [userData])

const handleValue =(e) => {
    const {value, name}=e.target;
    setUserData({...userData, [name]: value})
}
const connect = () => {
    let Sock = new SockJS("https://chat-rifugo.herokuapp.com/ws");
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
}

const registerUser = () =>{
    connect();
}

const onConnected = () => {
    setUserData({...userData, "connected":true});
    stompClient.subscribe("/chatroom/public", onPublicMessageReceived)
    stompClient.subscribe('/user/'+ userData.username+'/private', onPrivateMessage);
    userJoin();
}   

const userJoin =() =>{
    var chatMessage={
        senderName:userData.username,
        status: 'ENTRAR'
    };
    stompClient.send('/app/message', {}, JSON.stringify(chatMessage));
}

const onPublicMessageReceived = (payload) => {
    let payloadData = JSON.parse(payload.body);
    switch(payloadData.status){
        case "ENTRAR":
            if(!privateChats.get(payloadData.senderName)){
                privateChats.set(payloadData.senderName, []);
                setPrivateChats(new Map(privateChats));
            }
            break;
        case "MESSAGE":
            publicChat.push(payloadData);
            setPublicChat([...publicChat])
            break;
    }

}
const onPrivateMessage = (payload)=>{
    console.log(payload);
    var payloadData = JSON.parse(payload.body);
    if(privateChats.get(payloadData.senderName)){
        privateChats.get(payloadData.senderName).push(payloadData);
        setPrivateChats(new Map(privateChats));
    }else{
        let list =[];
        list.push(payloadData);
        privateChats.set(payloadData.senderName, list);
        setPrivateChats(new Map(privateChats));
    }
}

    const onError = (error) => {
        console.log(error)
    }

    const sendPublicMessage = () =>{
        if(stompClient){
            let chatMessage={
                senderName:userData.username,
                message:userData.message,
                status: 'MESSAGE'
            };
            console.log(chatMessage);
            stompClient.send('/app/message', {}, JSON.stringify(chatMessage));
            setUserData({...userData, "message": ""});
        }
    }


    const sendPrivateValue=()=>{
        if (stompClient) {
          var chatMessage = {
            senderName: userData.username,
            receiverName:tab,
            message: userData.message,
            status:"MESSAGE"
          };
          
          if(userData.username !== tab){
            privateChats.get(tab).push(chatMessage);
            setPrivateChats(new Map(privateChats));
          }
          stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));
          setUserData({...userData,"message": ""});
        }
    }

    return (
        <div className='chat-container'>
            <Header/>
           {userData.connected ?
           <div className='chat-box'>
             <div className='member-list'>
             <ul>
                 
             <Navbar  dark expand="md" className='navli'>
             <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav  className='navbar'>
                 <li onClick={() => {setTab("CHATROOM")}} className={`member ${tab === "CHATROOM" && "active"}`}>Chatroom</li>
                 {[...privateChats.keys()].map((name, index) =>(
                      <li onClick={()=>{setTab(name)}} className={`member ${tab===name && "active"}`} key={index}>
                         {name} 
                      </li>
                 ))}
                 </Nav>
                 </Collapse>
                 </Navbar>
             </ul>
             </div>
             {tab ==="CHATROOM" && <div className='chat-content'>
             <ul className='chat-messages'>
             {publicChat.map((chat, index) =>(
                      <li className={`message ${chat.senderName === userData.username && "self"}`} key={index}>
                         {chat.senderName !== userData.username && <div className='avatar'> {chat.senderName} </div>}
                         {chat.senderName === userData.username && <div className='avatar self'> {chat.senderName} </div>}
                         <div className='message-data'>{chat.message}</div>
                         
                      </li>
                      
             ))}
             </ul>
             <div className='send-message'>
                 <input name='message' type='text' className='input-message' placeholder='enter public message' value={userData.message} onChange={handleValue}/>
                 <button type='button' className='send-button' onClick={ sendPublicMessage }>send</button> 
            </div>
             </div>}
            
             {tab !=="CHATROOM" && <div className='chat-content'>
             <ul className='chat-messages'>
             {[...privateChats.get(tab)].map((chat,index)=>(
                        <li className={`message ${chat.senderName === userData.username && "self"}`} key={index}>
                            {chat.senderName !== userData.username && <div className="avatar">{chat.senderName}</div>}
                            <div className="message-data">{chat.message}</div>
                            {chat.senderName === userData.username && <div className="avatar self">{chat.senderName}</div>}
                        </li>
                    ))}
             </ul>
              <div className='send-message'>
                 <input type='text' name='message' className='input-message' placeholder={`enter private message for ${tab}`} value={userData.message} onChange={handleValue}/>
                 <button type='button' className='send-button' onClick={sendPrivateValue}>send</button> 
            </div>
          </div>}
          
          </div>
          :
           <div className='registre'>
               <h1> Refugee or Tradutor</h1>
              <input
              id='user-name'
              name='username'
              placeholder='Name'
              value={userData.username}
              onChange={handleValue}
              />
              <div className='button'>
       <a onClick={registerUser}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <h6>Enter on Chat</h6>
          </a>
          </div>
          </div>
           }

<Footer/>
        </div>
       
    )
}
export default Chat;
