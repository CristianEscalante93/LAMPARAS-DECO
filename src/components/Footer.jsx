import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import './Footer.css';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer " style={{ backgroundColor: "black", color: "white" }}>
      <div className="row col-md-3 col-sm-6 col-6 d-flex justify-content-center">
        <Link to="https://www.google.com" className="footer__efecto text-decoration-none">
          Contactenos
        </Link>
      </div>
      <div className="row col-md-3 col-sm-6 col-6 d-flex justify-content-center">
      <Link to="https://www.google.com" target="" className=" footer__efecto">
          <FacebookIcon />
          </Link>
      </div>
      <div className="row col-md-3 col-sm-6 col-6 d-flex justify-content-center">
      <Link to="https://www.google.com" target="" className="footer__efecto">
          <InstagramIcon />
          </Link>
      </div>
      <div className="row col-md-3 col-sm-6 col-6 d-flex justify-content-center">
      <Link to="https://www.google.com" target="" className="footer__efecto">
          <AlternateEmailIcon />
          </Link>
      </div>
    </div>
  );
}
