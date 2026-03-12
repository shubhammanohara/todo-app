import { TaskStatus } from '../../types/common';
import Status from '../status/Status';

interface LayoutProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  status: TaskStatus | undefined;
  setStatus: React.Dispatch<React.SetStateAction<TaskStatus | undefined>>;
  onAdd: () => void;
  onCancel: () => void;
}

const Layout: React.FC<LayoutProps> = ({
  title,
  setTitle,
  description,
  setDescription,
  status,
  setStatus,
  onAdd,
  onCancel,
}) => {
  return (
    <div className="p-4">
      <input
        required
        type="text"
        placeholder="Title here"
        className="input w-full mt-8"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        required
        className="textarea w-full mt-2"
        placeholder="Task description here"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select
        required
        className="select w-full mt-2"
        value={status}
        onChange={(e) => setStatus(e.target.value as TaskStatus | undefined)}
      >
        <option value="">Select Status</option>
        <option value="pending">
          <Status status="pending" />
        </option>
        <option value="inProgress">
          <Status status="inProgress" />
        </option>
        <option value="completed">
          <Status status="completed" />
        </option>
      </select>
      <div className="flex justify-between mt-4">
        <button className="btn btn-outline btn-primary" onClick={onCancel}>
          Cancel
        </button>
        <button className="btn btn-primary" onClick={onAdd}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Layout;
