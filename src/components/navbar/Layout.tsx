import { MoonIcon, SunIcon } from "../icons";

interface LayoutProps {
    theme: string;
    toggleTheme: () => void;
}

const Layout: React.FC<LayoutProps> = ({ theme, toggleTheme }) => {
    return (
        <div className="navbar bg-primary">
            <div className="flex-1">
                <p className="text-xl text-primary-content">Todo App</p>
            </div>
            <label className="swap swap-rotate text-primary-content">
                <input type="checkbox" className="theme-controller" value="synthwave" checked={theme === 'synthwave'} onChange={toggleTheme} />
                <SunIcon className="swap-off fill-current" />
                <MoonIcon className="swap-on fill-current" />
            </label>
        </div >
    );
}

export default Layout;