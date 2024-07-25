import{FiSearch} from 'react-icons/fi';
import'./style.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerinput">
        <input
        type="text"
        placeholder="Digite seu CEP"
        />

        <button className="buttonSearch">
          <FiSearch size={25} color='#fff'/>
        </button>
      </div>

      <main className='main'>
        
      <h2>CEP: 13067-366</h2>
      <span>Rua Maria Aparecida dos Reis Neves</span>
      <span>Complemento: Bloco 34A AP 13</span>
      <span>Vila PAdre Anchieta</span>
      <span>Campinas-SP</span>
      
      </main>
      
    </div>
  );
}

export default App;
