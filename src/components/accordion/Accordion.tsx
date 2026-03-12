import { title } from "node:process";
import Layout from "./Layout"

interface AccordionProps {
    title: string;
    content: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
    return (
        <Layout>
            <div className="collapse-title font-semibold">{title}</div>
            <div className="collapse-content text-sm">{content}</div>
        </Layout>
    )
}

export default Accordion;