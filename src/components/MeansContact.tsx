interface MeansContactProps {
    imgLink: string
    imgAlt: string
    contact: string
}

export function MeansContact({imgLink, imgAlt, contact}:MeansContactProps) {
    return (
        <div className="contacts__contact">
            <img className="contacts__contact-icon" src={imgLink} alt={imgAlt} />
            <span className="contacts__contact-id">{contact}</span>
        </div>
    )
}