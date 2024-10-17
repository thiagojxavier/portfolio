interface ModalProps {
  modalOpen: boolean
  handleModalClose: (event: React.MouseEvent<HTMLDivElement>) => void
  imageSrc: string
  href: string 
}

export function Modal({modalOpen, handleModalClose, imageSrc, href}:ModalProps) {
    return (
      <section className={modalOpen ? "modal-projects-container modal-open" : "modal-projects-container"}>
      <div className="modal-projects" onMouseLeave={handleModalClose}>
        <div className="modal-projects__flex-wrapper">
          <img className="modal-projects__img-project" src={imageSrc} alt="" />
          <a href={href}>
            <button className="modal-projects__btn">
              Ir para o site
            </button>
          </a>
        </div>
      </div>
    </section>
    )
}