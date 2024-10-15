interface ProjectProps {
    name: string
    languages: string
    imgLink: string
    imgAlt: string
}

export function Project({name, languages, imgLink, imgAlt}:ProjectProps) {

    return (
        <div className="projects__project" onMouseOver={() => {}}>
            <h3 className="project__name">{name}</h3>
            <p className="project__paragraph">Linguagens {languages}</p>
            <div>
                <img className="project__image" src={imgLink} alt={imgAlt} />
            </div>
        </div>
    )
}