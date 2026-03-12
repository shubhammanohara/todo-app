import Layout from "./Layout";

interface CardProps {
    title: string;
    content: string;
    date: string;
}
const Card: React.FC<CardProps> = ({ title, content, date }) => {
    return (
       <Layout title={title} content={content} date={date} />
    )
}

export default Card;