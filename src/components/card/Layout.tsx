import { TaskStatus } from "../../types/common";
import { EditIcon, TrashIcon } from "../icons";
import Status from "../status/Status";

interface LayoutProps {
    title: string;
    content: string;
    date: string;
    status: TaskStatus;
    onEditClick: () => void;
    onDeleteClick?: () => void;
}
const Layout: React.FC<LayoutProps> = ({ title, content, date, status, onEditClick, onDeleteClick }) => {
    return (
        <>
            <div className="group card card-side card-sm border-b border-base-200 rounded-none w-full">
                <div className="avatar avatar-placeholder block top-2">
                    <div className="bg-neutral text-neutral-content w-12 rounded-full">
                        <span className="text-3xl">{title.charAt(0).toUpperCase()}</span>
                    </div>
                </div>
                <div className="card-body">
                    <div className="flex items-center justify-between">
                        <h2 className="card-title">{title}</h2>
                        <div>
                            <Status status={status} /></div>
                    </div>
                    <p className="text-base">{content}</p>
                    <div className="flex items-center justify-between mt-2">
                        <p className="text-xs text-muted">{date}</p>
                        <div className="card-actions justify-end lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                            <button className="btn btn-circle btn-ghost" onClick={onEditClick}>
                                <EditIcon colour="var(--color-green-500)" width="16" height="16" />
                            </button>
                            <button className="btn btn-circle btn-ghost" onClick={onDeleteClick}>
                                <TrashIcon colour="var(--color-orange-600)" width="24" height="24" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout;