import React, {useState} from 'react';
import logo from '../../assets/logo1.svg';
import {Link} from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav,
    NavItem} from 'reactstrap';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import './style.css';

const Header = (props) => {


    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className='header w-100'>
            <Navbar  dark expand="md" className='nav'>
                <div className='logo' >
                <Link to='/'> <img src={logo}/></Link>
                </div>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav  className='navbar'>
                        <NavItem >
                            <Link to='/aboutus'>Sobre nós</Link>
                        </NavItem>
                        <NavItem >
                            <Link to='/documents'>Documentação</Link>
                        </NavItem>
                        <NavItem >
                            <Link to='/duvidas'>Dúvidas</Link>
                        </NavItem>
                        <NavItem >
                            <Link to='/login'>Login</Link>
                        </NavItem>
                        <NavItem >
                            <Link to='/tradutors'> <ChatBubbleIcon  size={10}/></Link>
                        </NavItem>
    
                        </Nav>
                </Collapse>

            </Navbar>
          
       </div>
 );
}
export default Header;