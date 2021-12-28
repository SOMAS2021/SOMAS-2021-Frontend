import '../style/Modal.scss';
import Video from '../videos/platform2.mov';

const Modal = ({ show, close, title}) => {
  return (
    <>
     {
     show ?
     
      <div
        className="modalContainer"
        onClick={() => close()}
      >
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <header className="modal_header">
            <h2 className="modal_header-title"> {title} </h2>
            <button className="close" onClick={() => close()}>
            <i class="fas fa-times"/>  
            </button>
          </header>
          <main className="modal_content">
              <header className="modal_content-video">
                <video className="video" src={Video} autoPlay loop muted />
              </header>
          </main>
          <footer className="modal_footer">
            <button className="modal-close" onClick={() => close()}>
              Close
            </button>
          </footer>
        </div>
      </div>
      : null
     },
    </>
  );
};

export default Modal;