import React, { useState } from 'react';

export type TService = {
  serviceName: string;
  login: string;
  URL: string;
  password: string;
};

type FormProps = {
  cancelClick: () => void;
  signUpService: (formValues: TService) => void;
};

function Form({ cancelClick, signUpService }: FormProps) {
  const validPassword = 'valid-password-check';
  const invalidPassword = 'invalid-password-check';
  const [formValues, setFormValues] = useState<TService>({
    serviceName: '',
    login: '',
    password: '',
    URL: '',
  });

  const validationForm = () => {
    const { password } = formValues;

    const hasMinLength = password.length >= 8;
    const hasMaxLength = password.length <= 16;
    const hasLettersAndNumbers = /[a-zA-Z]/.test(password) && /[0-9]/.test(password);
    const hasSpecialCharacter = /[^a-zA-Z0-9]/.test(password);

    return {
      hasMinLength,
      hasMaxLength,
      hasLettersAndNumbers,
      hasSpecialCharacter,
    };
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    signUpService(formValues);
  };

  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <h5>A senha deve possuir as seguintes obrigações:</h5>
        <p className={ validationForm().hasMinLength ? validPassword : invalidPassword }>
          Possuir 8 ou mais caracteres
        </p>

        <p className={ validationForm().hasMaxLength ? validPassword : invalidPassword }>
          Possuir até 16 caracteres
        </p>

        <p
          className={ validationForm().hasLettersAndNumbers
            ? validPassword : invalidPassword }
        >
          Possuir letras e números
        </p>

        <p
          className={ validationForm().hasSpecialCharacter
            ? validPassword : invalidPassword }
        >
          Possuir algum caractere especial
        </p>
      </div>

      <label htmlFor="serviceName">
        Nome do Serviço
        <input
          type="text"
          id="serviceName"
          name="serviceName"
          onChange={ handleChange }
        />
      </label>

      <label htmlFor="login">
        Login
        <input type="text" id="login" name="login" onChange={ handleChange } />
      </label>

      <label htmlFor="password">
        Senha
        <input type="password" id="password" name="password" onChange={ handleChange } />
      </label>

      <label htmlFor="url">
        URL
        <input type="text" id="url" name="URL" onChange={ handleChange } />
      </label>

      <button
        type="submit"
        disabled={
          !validationForm().hasMinLength
          || !validationForm().hasMaxLength
          || !formValues.serviceName
          || !formValues.login
          || !formValues.password
          || !formValues.URL
          || !validationForm().hasLettersAndNumbers
          || !validationForm().hasSpecialCharacter
        }
      >
        Cadastrar
      </button>

      <button onClick={ cancelClick }>Cancelar</button>
    </form>
  );
}

export default Form;
