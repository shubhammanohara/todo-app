import { LayoutType } from "../../types/common";
import { ArrowLeft, MoonIcon, SunIcon } from "../icons";

interface LayoutProps {
    theme: string;
    toggleTheme: () => void;
    currentLayout: LayoutType
    setCurrentLayout: (layout: LayoutType) => void
}

const Layout: React.FC<LayoutProps> = ({ theme, toggleTheme, currentLayout, setCurrentLayout }) => {
    return (
        <div className="navbar bg-primary">
            {currentLayout === "addNew" && <button className="btn btn-ghost btn-circle mr-2" onClick={() => setCurrentLayout("todo")}><ArrowLeft /></button>}
            <div className="flex-1">
                <p className="text-xl text-primary-content">TO-DO APP</p>
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