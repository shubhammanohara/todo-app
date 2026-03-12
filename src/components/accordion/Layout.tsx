interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="collapse collapse-arrow border border-base-300 w-full">
            <input type="radio" name="my-accordion-2" defaultChecked />
            {children}
        </div>
    )
}

export default Layout;