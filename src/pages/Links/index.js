import './links.css';
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi';

export default function Links(){
    return(
      <div className="links-container">

        <div className="links-header">
          <FiArrowLeft size={38} color="#fff"/>
          <h1>Meus links</h1>
        </div>

        <div className="links-item">
          <button classNmae="Link">
            <FiLink size={18} color="#fff" />
            https://paulinhodeveloper.com
          </button>
          <button>
            <FiTrash size={24} color="#ff5454"/>
          </button>

        </div>


      </div>
    )
  }
  