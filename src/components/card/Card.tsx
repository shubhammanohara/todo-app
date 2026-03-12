import { TaskStatus } from '../../types/common'
import Layout from './Layout'

interface CardProps {
  title: string
  content: string
  status: TaskStatus
  date: string
  setEditId: React.Dispatch<React.SetStateAction<string>>
  setDeleteId: React.Dispatch<React.SetStateAction<string>>
  id: string
}
const Card: React.FC<CardProps> = ({
  title,
  content,
  status,
  date,
  setEditId,
  setDeleteId,
  id,
}) => {
  const onEditClick = () => {
    setEditId(id)
  }

  const onDeleteClick = () => {
    setDeleteId(id)
  }

  return (
    <Layout
      title={title}
      content={content}
      status={status}
      date={date}
      onEditClick={onEditClick}
      onDeleteClick={onDeleteClick}
    />
  )
}

export default Card
