import React from 'react';
import { FaWhatsappSquare } from "react-icons/fa";

const WhatsAppBtn = () => {
    return (
        <div style={{
        padding: '2%',
       borderRadius: '5%',
       backgroundColor: 'white',
       position: 'fixed',
       bottom : '5%',
       left: '5%',
       zIndex: 10
        }}>
            <a href='https://wa.me/+966533108772' >
        <FaWhatsappSquare size={80} color='green'/>
            </a>
            </div>
    );
};



export default WhatsAppBtn;