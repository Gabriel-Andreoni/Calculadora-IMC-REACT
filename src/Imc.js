import { useState } from 'react'
import './Imc.css';

function Imc() {
  const [nome, setNome] = useState();
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [mensagem, setMensagem] = useState();

  function CalcularImc(e) {
    e.preventDefault();
    let calculo = peso / ((altura / 100) * (altura / 100));
    setMensagem(calculo)
  }

  return (
    <>
      <div className="container">
        <h1>Calculadora IMC</h1>
        <form action="">
          <section className="containerInfo">
            <label htmlFor="name">Digite seu nome:</label>
            <input type="text" id="name" onChange={(e) => setNome(e.target.value)}/>

            <label htmlFor="peso">Digite seu peso:</label>
            <input type="number" id="peso" onChange={(e) => setPeso(e.target.value)}/>

            <label htmlFor="altura">Digite sua altura:</label>
            <input type="number" id="altura" onChange={(e) => setAltura(e.target.value)}/>
          </section>
          <section className="contaierButton">
            <button className="button" onClick={CalcularImc}>Calcular IMC</button>
            {mensagem && (
              <section className="containerResultado">
                <p className="">
                  Olá, {nome}.
                </p>

                <p className="">
                  Seu resultado foi de:&nbsp;
                  <span>{mensagem.toFixed(2)}</span>
                </p>

                <p>Para consular os valores na tabela de IMC,
                  <a href="https://www.programasaudefacil.com.br/calculadora-de-imc" target="_blank" rel="external">clique aqui.</a>
                </p>
              </section>
            )}
          </section>
        </form>
      </div>
    </>
  );
}

export default Imc;
