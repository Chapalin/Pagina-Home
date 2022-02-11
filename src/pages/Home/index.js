import {FiLink} from 'react-icons/fi';
import './home.css';

export default function Home(){
    return(
      <div className="container-home">
          <div className="logo">
            <img src="/eLogo.png" alt="Sujeito Link logo"/>
            <h1>Link/...</h1>
            <span>Cole seu link para encurtar ⤵️</span>
          </div>

          <div className="area-input">
            <div>
              <FiLink size={23} color="#FFF"/>
              <input 
                placeholder="Cole seu link aqui..."
               />
            </div>

            <button>Encurtar Links</button>

          </div>

         
      </div>
    )
  }
  