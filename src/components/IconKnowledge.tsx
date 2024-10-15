interface IconKnowledgeProps {
    imgLink: string
    imgAlt: string
    imgName: string
}

export function IconKnowledge({imgLink, imgAlt, imgName}:IconKnowledgeProps) {
    return (
        <div className="icons-knowledge__flex-wrapper">
          <img className="icons-knowledge__icon" src={imgLink} alt={imgAlt} />
          <p className="icons-knowledge__icon-name">{imgName}</p>
        </div>
    )
}