import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is Abhishek Raj. I am a Full-Stack Developer and a
          Student of <b> Chandigarh University</b>
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/abhishekraj16574" target="black">
          <BsGithub />
        </a>
        <a href="https://www.youtube.com/@AbhishekRaj-i8h9w" target="black">
          <BsYoutube />
        </a>
        <a href="https://www.instagram.com/_a.b.h.i.03/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/abhishekraj16574/" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
