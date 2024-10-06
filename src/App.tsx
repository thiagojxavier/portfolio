import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export function App() {
  const [theme, setTheme] = useState('dark');
  const presentationTitle = `"Onde a criatividade encontra o propósito, surgem soluções revolucionárias."`;

  function changeTheme() {
    if(theme === 'dark') {
      setTheme('light');
      return
    } 

    setTheme('dark');
  }

  return (
    <div className={theme === 'dark' ? 'container dark' : 'container light'}>
      <header className="header">
        <h2>Thiago<span className="header__color-different">DEV</span></h2>
        <div className="header__theme-box-container">
          <Moon />
          <label htmlFor="theme" className="header__theme-box">
            <input className="header__theme-box__box" type="checkbox" name="theme" id="theme" onChange={changeTheme}/>
            <span className="header__theme-box__btn"></span>
          </label>
          <Sun />
        </div>
      </header>
      <section className="presentation">
          <div className="presentation__left">
              <h1 className="presentation__title">Front_End Developer <span className="presentation__equal">=</span></h1>
              <p className="presentation__phrase">{presentationTitle}</p>
          </div>
          <div className="presentation__right">
            <img className="presentation__image" src={theme === "dark" ? "presentation-dark.png" : "presentation-light.png"}/>
          </div>
      </section>
      <section className="text-content">
        <p className="text">Olá, sou Thiago, um desenvolvedor front-end apaixonado por codificar para a web. Atualmente, me dedico a projetos pessoais e estou constantemente buscando aprimorar minhas habilidades e expandir meu conhecimento. Estou sempre em busca de novos desafios e oportunidades para crescer e inovar.</p>
      </section>
      <section className="icons-knowledge">
        <div className="icons-knowledge__flex-wrapper">
          <img className="icons-knowledge__icon" src="icon-html.svg" alt="Icone de HTML" />
          <p className="icons-knowledge__icon-name">Html</p>
        </div>
        <div className="icons-knowledge__flex-wrapper">
          <img className="icons-knowledge__icon" src="icon-css.svg" alt="Icone de CSS" />
          <p className="icons-knowledge__icon-name">Css</p>
        </div>
        <div className="icons-knowledge__flex-wrapper">
          <img className="icons-knowledge__icon" src="icon-javascript.svg" alt="Icone de Javascript" />
          <p className="icons-knowledge__icon-name">Javascript</p>
        </div>
        <div className="icons-knowledge__flex-wrapper">
          <img className="icons-knowledge__icon" src="icon-sass.svg" alt="Icone de SASS" />
          <p className="icons-knowledge__icon-name">Sass</p>
        </div>
        <div className="icons-knowledge__flex-wrapper">
          <img className="icons-knowledge__icon" src="icon-tailwind.svg" alt="Icone de Tailwind" />
          <p className="icons-knowledge__icon-name">Tailwind</p>
        </div>
        <div className="icons-knowledge__flex-wrapper">
          <img className="icons-knowledge__icon" src="icon-typescript.svg" alt="Icone de Typescript" />
          <p className="icons-knowledge__icon-name">Typescript</p>
        </div>
        <div className="icons-knowledge__flex-wrapper">
          <img className="icons-knowledge__icon" src="icon-git.svg" alt="Icone de Git" />
          <p className="icons-knowledge__icon-name">Git</p>
        </div>
        <div className="icons-knowledge__flex-wrapper">
          <img className="icons-knowledge__icon" src="icon-react.svg" alt="Icone de React" />
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
              <img className="project__image" src="icon-html.svg" alt="Icone de HTML" />
            </div>
          </div>
          <div className="projects__project">
            <h3 className="project__name">Nome do projeto</h3>
            <p className="project__paragraph">Linguagens HTML, CSS, JS</p>
            <div>
              <img className="project__image" src="icon-html.svg" alt="Icone de HTML" />
            </div>
          </div>
          <div className="projects__project">
            <h3 className="project__name">Nome do projeto</h3>
            <p className="project__paragraph">Linguagens HTML, CSS, JS</p>
            <div>
              <img className="project__image" src="icon-html.svg" alt="Icone de HTML" />
            </div>
          </div>
          <div className="projects__project">
            <h3 className="project__name">Nome do projeto</h3>
            <p className="project__paragraph">Linguagens HTML, CSS, JS</p>
            <div>
              <img className="project__image" src="icon-html.svg" alt="Icone de HTML" />
            </div>
          </div>
          <div className="projects__project">
            <h3 className="project__name">Nome do projeto</h3>
            <p className="project__paragraph">Linguagens HTML, CSS, JS</p>
            <div>
              <img className="project__image" src="icon-html.svg" alt="Icone de HTML" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>Contatos</h2>
        Quer conversar? me contate, vamos conversar
        <div>
          <button>
            <img src="icon-gmail.svg" alt="" />
            Email
          </button>
        </div>
        <div>
          <button>
            <img src="icon-linkedin.svg" alt="" />
            LinkedIn
          </button>
        </div>
      </section>
      <section>
        <h2>Currículo</h2>
        <div>

        </div>
        <button>Download CV</button>
      </section>
      <footer>
        <p>Voce chegou ao fim</p>
        <p>Desenvolvido por mim</p>
      </footer>
    </div>
  )
}
