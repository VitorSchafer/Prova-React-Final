import React from 'react'
import icone1 from '../../assets/icone1.png'
import icone2 from '../../assets/icone2.png'
import icone3 from '../../assets/icone3.png'
import '../Footer/style.css'
    
    function Footer() {
        return(
            <footer>
               <img className="img1" src={icone1} alt="" height="28" width="28"/>
               <label className="whats"> 99815-2521</label>
               <img className="img2" src={icone2} alt="" height="28" width="28"/>
               <label className="facebook"> Joao Almeida de Castro</label>
               <img className="img3" src={icone3} alt="" height="28" width="28"/>
               <label className="instagram">@almeiida_joao1</label>
            </footer>
        );
    }
    export default Footer;
        