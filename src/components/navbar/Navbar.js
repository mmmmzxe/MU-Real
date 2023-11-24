import React, {useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle ,FaEnvelope} from 'react-icons/fa'
import {BsFillHouseFill } from 'react-icons/bs'
import ReactWhatsapp from 'react-whatsapp'


import './Navbar.css'

const Navbar = () => {
    function sendEmail(message) {
        var email = 'muconstructionllc155@gmail.com';
        var subject = message.subject;
        var emailBody = 'Hi '+message.from;
        document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody;
    }

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className='container'>
                <h1><span><BsFillHouseFill />MU</span> Constructioninc</h1>
              
                    



               
                
                
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
                
                </div>
                <div className='email'><ul>
            <li><ReactWhatsapp className='btn' number="+17862013427" message="Hello World!!!">+17862013427</ReactWhatsapp></li>
            
               <li>  <button className="btn" onClick={sendEmail}><FaEnvelope className=''></FaEnvelope></button></li>
             
           </ul></div>
           
            </div>
        </div>
    )
}

export default Navbar
