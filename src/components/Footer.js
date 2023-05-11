import React from "react"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


/*(



*/

export default function Footer(){
    return (
<div className="footer">
<a href="https://www.instagram.com/diazelena325/"><InstagramIcon className="icon"/></a>
    <a href="https://www.linkedin.com/in/elenadiazse/"><LinkedInIcon className="icon"/></a>
    <a  href="https://github.com/diazelena325"><GitHubIcon className="icon"/></a>
</div>
    )


}