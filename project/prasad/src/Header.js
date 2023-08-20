import React,{useState} from 'react';
import './Header.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import Chat from './Chat'
const Header = () => {
    const [click,setClick]=useState(false)
    function Handel(){
        setClick(!click)
    }
    return (
        <div>
        <div className='header1'>
            <div className='firstheader'>
                <img src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="flipkart logo"/>
                <div className='firstheader1'>
                    <span id='span1'>Explore</span>
                    <span id='span2'>Plus</span>
                    <span id='span3'> <img src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt=""/></span>
                </div>
            </div>
            <div className='secondheader'>
                <input placeholder="Search for products" type="text" /><SearchIcon/>
            </div>
            <div className='thirdheader'>
                <button>Login</button>
            </div>
            <div className='fourththeader'>
                <span>More</span>
                <ExpandMoreIcon/>
            </div>
            <div className='fifththeader'>
                <ShoppingCartIcon/>
                <p>cart</p>
            </div>
    
            <div className='chaticon' onClick={()=>{Handel()}}>
                <ChatIcon/>
            </div>
        </div>
        {click && <Chat />}
        </div>
    );
};

export default Header;