import Modal from "react-modal";
import { Album } from "../types";
import { FormEvent } from "react";
import { saleAlbum } from "../api/getAlbums";
import { useAuth } from "../hooks/UseAuth";
import { ToastContainer, toast } from "react-toastify";

interface ModalProps {
  shouldOpen: boolean;
  modalAlbum: Album;
  setCurrentAlbum: React.Dispatch<React.SetStateAction<Album>>;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "45%",
    maxHeight: "50%",
    padding: "0",
    borderRadius: "8px",
    border: "0",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    backdropFilter: "blur(0.3px)",
  },
};

export default function MyModal({
  shouldOpen,
  setCurrentAlbum,
  setOpenModal,
  modalAlbum
}: ModalProps) {
  const { token } = useAuth();
  const closeModal = () => {
    setCurrentAlbum({} as Album);
    setOpenModal(false);
  };

  async function handleSaleAlbum(event: FormEvent) {

    event.preventDefault();
    saleAlbum(modalAlbum, token).then(() => {
      toast.success("Compra efetuada com sucesso.");
    })
    .catch(() => {
      toast.error("Erro ao comprar album.")
    })

  }
  return (
    <>
      <ToastContainer />
      <Modal
        isOpen={shouldOpen}
        onRequestClose={closeModal} 
        style={customStyles}
      >
        <div className="flex">
          <img src={modalAlbum.imageUrl} className="h-full w-2/4" />
          <div className="flex items-center flex-col justify-between w-2/4 p-4 gap-2">
            <img
              className="h-4 w-4 fixed right-4 cursor-pointer"
              src="/src/assets/closeicon.png"
              onClick={closeModal}
              alt="close"
            />
            <h2 className="text-center font-bold text-2xl">{modalAlbum.artistName}</h2>
            <div>
              <p className="text-xs mb-2">{modalAlbum.name}</p>
              <p className="text-xs mb-2">{modalAlbum.releaseDate}</p>
              <p className="text-xs mb-2 font-bold">R$ {modalAlbum.value}</p>

            </div>
            <button 
              style={{ backgroundColor: "#FBBC05" }}
              className="rounded-full text-xl text-white w-4/5 h-10"
              onClick={handleSaleAlbum}
            >
              Comprar
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
