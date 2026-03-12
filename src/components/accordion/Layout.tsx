interface LayoutProps {
  children: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, open, setOpen, title }) => {
  return (
    <div className="w-full">
      <div className="collapse collapse-arrow border border-base-300 w-full">
        <input
          type="radio"
          name="my-accordion-2"
          defaultChecked={title.includes('In progress')}
        />
        {children}
      </div>
    </div>
  );
};

export default Layout;
