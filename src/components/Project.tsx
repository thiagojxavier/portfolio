import { MouseEventHandler } from "react"

interface ProjectProps {
    name: string
    languages: string
    imgLink: string
    imgAlt: string
    href: string
    modalOpen: MouseEventHandler<HTMLImageElement>
}

export function Project({name, languages, imgLink, imgAlt, modalOpen, href}:ProjectProps) {
    return (
        <a href={href}>
            <div className="projects__project">
                <h3 className="project__name">{name}</h3>
                <p className="project__paragraph">{languages}</p>
                <div>
                    <img className="project__image" id={name} src={imgLink} alt={imgAlt} onMouseOver={window.innerWidth > 720 ? modalOpen : undefined}/>
                </div>
            </div>
        </a>
    )
}