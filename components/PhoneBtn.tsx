import React from 'react'
import { FaPhoneSquareAlt } from "react-icons/fa";
const PhoneBtn = () => {
 return         <a style={{
       padding: '2%',
       borderRadius: '5%',
       position: 'fixed',
       bottom : '20%',
       left: '5%',
       zIndex: 10,
       color: 'yellow',
       backgroundColor: 'white'
        }} href="tel:+966533108772" className="Blondie">
 <FaPhoneSquareAlt size={80} color='green'/>
  <strong className='text-xl text-green-600 m-auto block'>اطلب الآن</strong>
</a>
}

export default PhoneBtn
