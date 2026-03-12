interface ModalProps {
  onConfirmDelete: () => void;
}

const Modal: React.FC<ModalProps> = ({ onConfirmDelete }) => {
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Delete Task</h3>
        <p className="py-4">
          Are you sure you want to delete this task? This action cannot be
          undone.
        </p>
        <div className="modal-action">
          <button className="btn btn-soft btn-error" onClick={onConfirmDelete}>
            Confirm
          </button>
          <form method="dialog">
            <div className="flex gap-2">
              <button className="btn">Close</button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
