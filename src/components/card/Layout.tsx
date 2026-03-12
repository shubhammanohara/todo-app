import { EditIcon, TrashIcon } from "../icons";

interface LayoutProps {
    title: string;
    content: string;
    date: string;
}
const Layout: React.FC<LayoutProps> = ({ title, content, date }) => {
    return (
        <>
            <div className="card card-side border-b border-base-200 rounded-none">
                <div className="avatar avatar-placeholder block top-4 left-3">
                    <div className="bg-neutral text-neutral-content w-12 rounded-full">
                        <span className="text-3xl">D</span>
                    </div>
                </div>
                <div className="card-body">
                    <div className="flex gap-2 items-center">
                        <h2 className="card-title">{title}</h2>
                        <div className="badge badge-warning">In progress</div>
                    </div>
                    <p className="text-base">{content}</p>
                    <p className="text-xs text-muted">{date}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-circle btn-ghost"><EditIcon width="16" height="16" /></button>
                        <button className="btn btn-circle btn-ghost"><TrashIcon width="24" height="24" /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout;