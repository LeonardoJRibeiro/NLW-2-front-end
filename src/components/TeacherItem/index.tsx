import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4" />
        <div>
          <strong>Diego Fernandes</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de química avançada.
      <br /> <br />
      Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
    </p>
      <footer>
        Preço/hora
      <strong>R$ 80,00</strong>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp" />
        Entrar em contato
      </button>
      </footer>
    </article>
    );
}

export default TeacherItem;