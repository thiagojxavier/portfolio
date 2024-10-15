import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { IconKnowledge } from "./components/IconKnowledge";

export function App() {
  const [theme, setTheme] = useState(() => {
    const themePage = localStorage.getItem('theme-page');

    if(themePage === 'light') {
      return 'light';
    }

    return 'dark';
  });

  function changeTheme() {
    if(theme === 'dark') {
      localStorage.setItem('theme-page', 'light');
      setTheme('light');
      return
    } 

    localStorage.setItem('theme-page', 'dark');
    setTheme('dark');
  }

  return (
    <div className={theme === 'dark' ? 'container dark' : 'container light'}>
      <header className="header">
        <div className="header__flex-wrapper">
          <h2 className="header__title">Thiago<span className="header__color-different">DEV</span></h2>
          <div className="header__theme-box-container">
            <Moon />
            <label htmlFor="theme" className="header__theme-box">
              <input className="header__theme-box__box" type="checkbox" name="theme" id="theme" onChange={changeTheme}/>
              <span className="header__theme-box__btn"></span>
            </label>
            <Sun />
          </div>
        </div>
      </header>
      <section className="presentation">
          <div className="presentation__left">
              <h1 className="presentation__title">Front_End Developer <span className="presentation__equal">=</span></h1>
              <p className="presentation__phrase">"Onde a criatividade encontra o propósito, surgem soluções revolucionárias."</p>
          </div>
          <div className="presentation__right">
            <img className="presentation__image" src={theme === "dark" ? "/presentation-imgs/presentation-dark.png" : "/presentation-imgs/presentation-light.png"}/>
          </div>
      </section>
      <section className="text-content">
        <p className="text">Olá, sou <span className="
          highlighted-text">Thiago</span>, um <span className="
          highlighted-text">desenvolvedor front-end</span> apaixonado por codificar para a web. Atualmente, <span className="
          highlighted-text">me dedico a projetos pessoais</span> e estou <span className="
          highlighted-text">constantemente buscando aprimorar minhas habilidades e expandir meu conhecimento</span>. Estou sempre em busca de novos desafios e oportunidades para crescer e inovar.</p>
      </section>
      <section className="icons-knowledge">
        <IconKnowledge imgLink={"/icons/icon-html.svg"} imgAlt={"Icone de HTML"} imgName={"Html"}/>
        <div className="icons-knowledge__flex-wrapper">
          <img className="icons-knowledge__icon" src="/icons/icon-css.svg" alt="Icone de CSS" />
          <p className="icons-knowledge__icon-name">Css</p>
        </div>
        <div className="icons-knowledge__flex-wrapper">
          <img className="icons-knowledge__icon" src="/icons/icon-javascript.svg" alt="Icone de Javascript" />
          <p className="icons-knowledge__icon-name">Javascript</p>
        </div>
        <div className="icons-knowledge__flex-wrapper">
          <img className="icons-knowledge__icon" src="/icons/icon-sass.svg" alt="Icone de SASS" />
          <p className="icons-knowledge__icon-name">Sass</p>
        </div>
        <div className="icons-knowledge__flex-wrapper">
          <img className="icons-knowledge__icon" src="/icons/icon-tailwind.svg" alt="Icone de Tailwind" />
          <p className="icons-knowledge__icon-name">Tailwind</p>
        </div>
        <div className="icons-knowledge__flex-wrapper">
          <img className="icons-knowledge__icon" src="/icons/icon-typescript.svg" alt="Icone de Typescript" />
          <p className="icons-knowledge__icon-name">Typescript</p>
        </div>
        <div className="icons-knowledge__flex-wrapper">
          <img className="icons-knowledge__icon" src="/icons/icon-git.svg" alt="Icone de Git" />
          <p className="icons-knowledge__icon-name">Git</p>
        </div>
        <div className="icons-knowledge__flex-wrapper">
          <img className="icons-knowledge__icon" src="/icons/icon-react.svg" alt="Icone de React" />
          <p className="icons-knowledge__icon-name">React</p>
        </div>
      </section>
      <section className="projects">
        <h2 className="projects-title">Projetos</h2>
        <div className="projects__flex-wrapper">
          <div className="projects__project">
            <h3 className="project__name">Nome do projeto</h3>
            <p className="project__paragraph">Linguagens HTML, CSS, JS</p>
            <div>
              <img className="project__image" src="/icons/icon-html.svg" alt="Icone de HTML" />
            </div>
          </div>
          <div className="projects__project">
            <h3 className="project__name">Nome do projeto</h3>
            <p className="project__paragraph">Linguagens HTML, CSS, JS</p>
            <div>
              <img className="project__image" src="/icons/icon-html.svg" alt="Icone de HTML" />
            </div>
          </div>
          <div className="projects__project">
            <h3 className="project__name">Nome do projeto</h3>
            <p className="project__paragraph">Linguagens HTML, CSS, JS</p>
            <div>
              <img className="project__image" src="/icons/icon-html.svg" alt="Icone de HTML" />
            </div>
          </div>
          <div className="projects__project">
            <h3 className="project__name">Nome do projeto</h3>
            <p className="project__paragraph">Linguagens HTML, CSS, JS</p>
            <div>
              <img className="project__image" src="/icons/icon-html.svg" alt="Icone de HTML" />
            </div>
          </div>
          <div className="projects__project">
            <h3 className="project__name">Nome do projeto</h3>
            <p className="project__paragraph">Linguagens HTML, CSS, JS</p>
            <div>
              <img className="project__image" src="/icons/icon-html.svg" alt="Icone de HTML" />
            </div>
          </div>
        </div>
      </section>
      <section className="contacts">
        <h2 className="contacts__title">Contatos</h2>
        <p className="contacts__paragraph">Quer conversar? me contate, vamos conversar.</p>
        <div className="contacts__flex-wrapper">
            <div className="contacts__contact">
              <img className="contacts__contact-icon" src="/icons/icon-gmail.svg" alt="" />
              dejesusxavierthiago@gmail.com
            </div>
            <div className="contacts__contact">
              <img className="contacts__contact-icon" src="/icons/icon-linkedin.svg" alt="" />
              Thiago De Jesus Xavier
            </div>
          <div className="contacts__contact">
            <img className="contacts__contact-icon" src="/icons/icon-telefone.png" alt="" />
            (77) 99825-7462
          </div>
            <div className="contacts__contact">
              <img className="contacts__contact-icon" src="/icons/icon-github.png" alt="" />
              Thiago De Jesus Xavier thiagojxavier
            </div>
        </div>
      </section>
      <section className="curriculum">
        <h2 className="curriculum__title">Currículo</h2>
        <div className="curriculum__preview">
          <img src="/curriculum/curriculum-preview.png" alt="Prévia do currículo" />
        </div>
        <a href="/curriculum/curriculum.pdf" download={'currículo.pdf'}>
          <button className="curriculum__btn">
            <img className="curriculum__btn__icon" src="btn-download.png" alt="Botão de baixar currículo" />
            Download
          </button>
        </a>
      </section>
      <section className="modal-projects-container">
        <div className="modal-projects">
          <div className="modal-projects__flex-wrapper">
            <img className="modal-projects__img-project" src="/curriculum/curriculum-full.png" alt="" />
            <button className="modal-projects__btn">
              <a href="#">Ir</a>
            </button>
          </div>
        </div>
      </section>
      <footer className="footer">
        <p>© 2024 - Code by Thiago<span className="footer__color-different">dev</span></p>
      </footer>
    </div>
  )
}
