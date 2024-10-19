

interface ModalProps {
    modalAnimation: boolean
  handleModalClose: (event: React.MouseEvent<HTMLDivElement>) => void
  imageSrc: string
  href: string 
}

export function Modal({modalAnimation, handleModalClose, imageSrc, href}:ModalProps) {
    return (
      <section className={`modal-projects-container${modalAnimation ? ' modal-open' : ''}`}>
            <div className="modal-projects" onMouseLeave={handleModalClose}>
                <div className="modal-projects__flex-wrapper">
                    <img className="modal-projects__img-project" src={imageSrc} alt="" />
                    <a href={href} target="_blank">
                        <button className="modal-projects__btn">
                            Ir para o site
                        </button>
                    </a>
                </div>
            </div>
        </section>
    )
}