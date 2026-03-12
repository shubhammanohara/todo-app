import { title } from 'node:process';
import Layout from './Layout';
import { useState } from 'react';

interface AccordionProps {
  title: string;
  content: React.ReactNode;
  hasContent: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  content,
  hasContent,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Layout open={open} setOpen={setOpen} title={title}>
      <div className="collapse-title font-semibold">{title}</div>
      <div className="collapse-content text-sm">
        {hasContent ? content : 'No data'}
      </div>
    </Layout>
  );
};

export default Accordion;
