export interface IconProps {
    className?: string;
    width?: number | string;
    height?: number | string;
    colour?: string;
}

export type LayoutType = "todo" | "addNew";

export type TaskStatus = "inProgress" | "pending" | "completed";

export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
}