import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { IconKnowledge } from "./components/IconKnowledge";
import { MeansContact } from "./components/MeansContact";
import { Project } from "./components/Project";
import { Modal } from "./components/Modal";

interface linksSitesProps {
  [key: string]: string;
}

export function App() {
  const [theme, setTheme] = useState(() => {
    const themePage = localStorage.getItem('theme-page');

    if(themePage === 'light') {
      return 'light';
    }

    return 'dark';
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalAnimation, setIsModalAnimation] = useState(false);
  const [imageSrcModal, setImageSrcModal] = useState('');

  const linksSites:linksSitesProps = {
    calculadora: 'https://thiagojxavier.github.io/calculadora/',
    todolist: 'https://thiagojxavier.github.io/to-do-list/'
  }
  const [link, setLink] = useState('')

  function handleModalOpening(event: React.MouseEvent<HTMLDivElement>) {
    const id = event.currentTarget.id.toLowerCase()
    setLink(id)
    setImageSrcModal(`/projects/${id}.png`)
    setIsModalOpen(true);
    setTimeout(() => setIsModalAnimation(true), 200)
  }

  function handleModalClosing() {
    setIsModalAnimation(false)
    setTimeout(() => setIsModalOpen(false), 200);
  }

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
              {theme === 'dark' 
              ? 
                <input className="header__theme-box__box" type="checkbox" name="theme" id="theme" onChange={changeTheme}/>
              :
                <input className="header__theme-box__box" type="checkbox" name="theme" id="theme" onChange={changeTheme} checked/>}
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
        <IconKnowledge imgLink="/icons/icon-html.svg" imgAlt="Icone de HTML" imgName="Html"/>
        <IconKnowledge imgLink="/icons/icon-css.svg" imgAlt="Icone de CSS" imgName="Css"/>
        <IconKnowledge imgLink="/icons/icon-javascript.svg" imgAlt="Icone de Javascript" imgName="Javascript"/>
        <IconKnowledge imgLink="/icons/icon-sass.svg" imgAlt="Icone de SASS" imgName="Sass"/>
        <IconKnowledge imgLink="/icons/icon-tailwind.svg" imgAlt="Icone de Tailwind" imgName="Tailwind"/>
        <IconKnowledge imgLink="/icons/icon-typescript.svg" imgAlt="Icone de Typescript" imgName="Typescript"/>
        <IconKnowledge imgLink="/icons/icon-git.svg" imgAlt="Icone de Git" imgName="Git"/>
        <IconKnowledge imgLink="/icons/icon-react.svg" imgAlt="Icone de React" imgName="React"/>
      </section>
      <section className="projects">
        <h2 className="projects-title">Projetos</h2>
        <div className="projects__flex-wrapper">
          <Project name="Calculadora" languages="HTML, CSS, JS" imgLink="/projects/calculadora.png" imgAlt="Imagem do site da calculadora" modalOpen={handleModalOpening}/>
          <Project name="ToDoList" languages="HTML, CSS, JS" imgLink="/projects/todolist.png" imgAlt="Imagem do site da to-do-list" modalOpen={handleModalOpening}/>
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
          <MeansContact imgLink="/icons/icon-gmail.svg" imgAlt="Ícone do Gmail" contact="dejesusxavierthiago@gmail.com"/>
          <MeansContact imgLink="/icons/icon-linkedin.svg" imgAlt="Ícone do LinkedIn" contact="Thiago De Jesus Xavier"/>
          <MeansContact imgLink="/icons/icon-github.png" imgAlt="Ícone do GitHub" contact="Thiago De Jesus Xavier thiagojxavier"/>
          <MeansContact imgLink="/icons/icon-telefone.png" imgAlt="Ícone do telefone" contact="(77) 99825-7462"/>
        </div>
      </section>
      <section className="curriculum">
        <h2 className="curriculum__title">Currículo</h2>
        <div className="curriculum__preview">
          <img id="curriculum-full" src="/curriculum/curriculum-preview.png" alt="Prévia do currículo" onMouseOver={handleModalOpening}/>
        </div>
        <a href="/curriculum/curriculum.pdf" download={'currículo.pdf'}>
          <button className="curriculum__btn">
            <img className="curriculum__btn__icon" src="btn-download.png" alt="Botão de baixar currículo"/>
            Download
          </button>
        </a>
      </section>
      {isModalOpen && <Modal modalAnimation={isModalAnimation} handleModalClose={handleModalClosing} imageSrc={imageSrcModal} href={linksSites[link]}/>}
      <footer className="footer">
        <p>© 2024 - Code by Thiago<span className="footer__color-different">dev</span></p>
      </footer>
    </div>
  )
}