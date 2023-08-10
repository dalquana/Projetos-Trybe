import React, { useState } from 'react';
import './App.css';
import Form, { TService } from './components/Form';
import Title from './components/Title';

function App() {
  const [showForm, setShowForm] = useState(true);
  const [serviceList, setServiceList] = useState<TService[]>([]);

  const handleClick = () => {
    setShowForm(false);
  };

  const handleCancelBtn = () => {
    setShowForm(true);
  };

  const signUpService = (formValues: TService) => {
    setServiceList((prevServiceList) => [...prevServiceList, formValues]);
    setShowForm(true);
  };

  const removeService = (index: number) => {
    setServiceList((prevServiceList) => {
      const updatedList = [...prevServiceList];
      updatedList.splice(index, 1);
      return updatedList;
    });
  };

  return (
    <>
      <header>
        <Title />
      </header>

      <div id="btn-Div">
        {showForm
        && <button id="BtnCadastro" onClick={ handleClick }>Cadastrar nova Senha</button>}
        {!showForm && (
          <Form cancelClick={ handleCancelBtn } signUpService={ signUpService } />
        )}

        <div>
          {serviceList.length === 0 ? (
            <p>Nenhuma senha cadastrada</p>
          ) : (
            serviceList.map((service, index) => (
              <div key={ index }>
                <p>
                  Nome do Serviço:
                  {' '}
                  <a href={ service.URL } target="_blank" rel="noopener noreferrer">
                    {service.serviceName}
                  </a>
                </p>
                <p>
                  <span> Login: </span>
                  {' '}
                  {service.login}
                </p>
                <p>
                  Senha:
                  {' '}
                  {service.password}
                </p>
                <p>
                  URL:
                  {' '}
                  {service.URL}
                </p>
                <button
                  onClick={ () => removeService(index) }
                  data-testid="remove-btn"
                >
                  Remover
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default App;
