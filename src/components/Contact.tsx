import { FaGithub, FaLinkedin, FaUser } from "react-icons/fa"

const Contact = () => {
   return (
      <div className="contact">
         <a href="https://github.com/darioDe" target='_blank'>
            <FaGithub className='network'/>
         </a>
         <a href="https://www.linkedin.com/in/rubenduarte1811/" target='_blank'>
            <FaLinkedin className="network"/>
         </a>
         <a href="https://rdduarteport.netlify.app/" target='_blank'>
            <FaUser className="network" />
         </a>
      </div>
   )
}

export default Contact
