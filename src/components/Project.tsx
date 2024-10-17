import { MouseEventHandler } from "react"

interface ProjectProps {
    name: string
    languages: string
    imgLink: string
    imgAlt: string
    modalOpen: MouseEventHandler<HTMLImageElement>
}

export function Project({name, languages, imgLink, imgAlt, modalOpen}:ProjectProps) {
    return (
        <div className="projects__project">
            <h3 className="project__name">{name}</h3>
            <p className="project__paragraph">Linguagens {languages}</p>
            <div>
                <img className="project__image" id={name} src={imgLink} alt={imgAlt} onMouseOver={modalOpen}/>
            </div>
        </div>
    )
}