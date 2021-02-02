import React, { useEffect, useState } from "react";
import { mask, unMask } from 'remask';
import styled from 'styled-components';

import './style.css';

const Layout = styled.div`
  padding: 12px;
`;
const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 12px;
  font-size: 1.1rem;
`;



function App() {

  const [counter, setCounter] = useState(0);
  const [weekday, setWeekday] = useState("monday")


  function handleWeekdayChange(event) {
    setWeekday(event.target.value)
  }

  useEffect(() => {
    document.title = counter

    return () => document.title = 'React App';

  }, [counter]);

  function habilitarInput() {
    if (document.getElementById('pj').checked === true) {
      document.getElementById('controle').disabled = true
      document.getElementById('controle').placeholder = 'Pessoa jurídica'
    } else {
      document.getElementById('controle').disabled = false
      document.getElementById('controle').placeholder = 'Pessoa física'
    }
  }


  // Início - Máscara CPF/CNPJ

  const [value, setValue] = useState('');
  const onChange = ev => {
    setValue(ev.target.value);
  }

  // Fim - Máscara CPF/CNPJ

  return (
    <div className="App">
      <h1>Enable or Disable a Button based on input</h1>
      <div>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Adicionar</button>
      </div>

      <form>
        <div>
          <br />
          <fieldset className="schedule-weekday" value={weekday} onChange={(event) => handleWeekdayChange(event)}>
            <label for="sunday"><input type="radio" name="schedule-weekly-option" value="sunday" id="sunday" />Sunday</label>
            <label for="monday"><input type="radio" name="schedule-weekly-option" value="monday" id="monday" />Monday</label>
            <label for="tuesday"><input type="radio" name="schedule-weekly-option" value="tuesday" id="tuesday" />Tuesday</label>
            <label for="wednesday"><input type="radio" name="schedule-weekly-option" value="wednesday" id="wednesday" />Wednesday</label>
            <label for="thursday"><input type="radio" name="schedule-weekly-option" value="thursday" id="thursday" />Thursday</label>
            <label for="friday"><input type="radio" name="schedule-weekly-option" value="friday" id="friday" />Friday</label>
            <label for="saturday"><input type="radio" name="schedule-weekly-option" value="saturday" id="saturday" />Saturday</label>
          </fieldset>
          <br />
        </div>

        <div>
          <input type="radio" name="pfpj" id="pf" value="PF" onClick={habilitarInput} />Pessoa física
          <br />
          <input type="radio" name="pfpj" id="pj" value="PJ" onClick={habilitarInput} />Pessoa jurídica
          <br />
          <input className="custominput" name="controle" id="controle" />
        </div>

        <div className="nome1">
          Nome1
        </div>
        <div className="nome2">
          Nome2
        </div>
        <div className="nome3">
          Nome3
        </div>
        <div className="nome1 nome2">
          Nome1 e Nome2
        </div>
        <div>
          <h1>Teste de máscaras de input</h1>
          <Layout>

            <Input
              type="text"
              placeholder="Digite o CPF ou CNPJ"
              onChange={onChange}
              value={value}
            />
            <div>Valor: {value}</div>

          </Layout>
        </div>
      </form>
    </div >


  );
}

export default App;
