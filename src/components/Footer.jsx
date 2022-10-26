import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';


export default function Footer() {
    return (
        <div className="footer " style={{backgroundColor:'black', color:'white'}} >
        {/* <div className="container"> */}
            {/* <div className=""> */}
                <div className= "row col-md-3 col-sm-6 col-6 d-flex justify-content-center">
                    <a href="https://www.google.com" className="footer__efecto text-decoration-none">Contactenos</a>
                </div>
                <div className= "row col-md-3 col-sm-6 col-6 d-flex justify-content-center">
                    <a href="https://www.google.com" target="" className=" footer__efecto"><FacebookIcon/></a>
                </div>
                <div className= "row col-md-3 col-sm-6 col-6 d-flex justify-content-center">
                    <a href="https://www.google.com" target="" className="footer__efecto"><InstagramIcon/></a>
                </div>
                <div className= "row col-md-3 col-sm-6 col-6 d-flex justify-content-center">
                    <a href="https://www.google.com" target="" className="footer__efecto"><AlternateEmailIcon/></a>
                </div>
            {/* </div> */}
        {/* </div> */}
    </div>
    )
}
