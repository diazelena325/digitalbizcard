import React from "react"
import photo from "../images/Self-Portrait.png"
import EmailIcon from '@mui/icons-material/Email';
import LaunchIcon from '@mui/icons-material/Launch';

export default function Header(){
return (
    <div className="header">
<img src={photo} alt=""/>
<h1>Elena Diaz</h1>
<span>Frontend Engineer</span>
<div className="contact">
    <a href="mailto: elenadiaz32505@gmail.com"><EmailIcon className="contactIcon"/>Email</a>
    <a href="https://elenadiaz.space"><LaunchIcon className="contactIcon" />Portfolio</a>
</div>
    </div>
    )
}