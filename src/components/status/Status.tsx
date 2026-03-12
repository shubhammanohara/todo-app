import { TaskStatus } from "../../types/common";

interface StatusProps {
    status: TaskStatus;
}
const Status: React.FC<StatusProps> = ({ status }) => {
    switch (status) {
        case "inProgress":
            return <><div className="status status-warning"></div> In progress</>;
        case "completed":
            return <><div className="status status-success"></div> Completed</>;
        case "pending":
            return <><div className="status status-error"></div> Pending</>;
        default:
            return null;
    }
}

export default Status