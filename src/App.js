import {useState} from 'react';
import{FiSearch} from 'react-icons/fi';
import'./style.css';

import api from './services/api'

function App() {
  const [input, setInput] = useState('')

 async function handleSearch(){

    if(input === ''){
      alert('Preencha algum CEP !')
      return;
    }


    try{
      const response = await api.get(`${input}/json`);
      console.log(response)

    }catch{
      alert('OPs erro ao buscar CEP..')
    }

  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerinput">
        <input
        type="text"
        placeholder="Digite seu CEP . . ."
        value = {input}
        onChange = {(e)=> setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color='#fff'/>
        </button>
      </div>

      <main className='main'>
        
      <h2>CEP: 13067366</h2>
      <span>Rua: Maria Aparecida dos Reis Neves</span>
      <span>Complemento: Bloco 34A AP 13</span>
      <span>Bairro: Vila Padre Anchieta</span>
      <span>Cidade: Campinas-SP</span>

      </main>
      
    </div>
  );
}

export default App;
