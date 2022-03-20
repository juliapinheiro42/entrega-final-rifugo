import React from 'react';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'; 

export default function Tradutors() {
 return (
   <div>
     <Header/>
     <div>
     <Link to='/chat'> <ChatBubbleIcon  fontSize='large'/></Link>
     </div>
   </div>
 );
}