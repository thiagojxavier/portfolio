export function Modal() {
    return (
        <div className="modal-projects" onMouseLeave={handleModalClosing}>
          <div className="modal-projects__flex-wrapper">
            <img className="modal-projects__img-project" src={imageSrcModal} alt="" />
            <button className="modal-projects__btn">
              <a href="#">Ir</a>
            </button>
          </div>
        </div>
    )
}