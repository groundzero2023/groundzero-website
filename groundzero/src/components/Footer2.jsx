import React from 'react';
import "../index.css"; 
import { MdEmail } from "react-icons/md";


function Footer2() {
    return (
        <div className="footer bg-darkBlue text-white text-center p-4">

<h1 className="text-4xl" >Partner with us .    </h1>          
            <div>
                
                <a href="/terms" className="footer-link"></a> 
                <a href="mailto: nesgroundzero@gmail.com">
              <MdEmail className="footer-button" />
            </a>
            </div>
        </div>
    );
}

export default Footer2;
