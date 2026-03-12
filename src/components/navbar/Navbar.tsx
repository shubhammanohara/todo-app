import useThemeToggle from "../../hooks/useThemeToggle";
import Layout from "./Layout";

const Navbar = () => {
    const { theme, toggleTheme } = useThemeToggle();

    return <Layout theme={theme} toggleTheme={toggleTheme} />
}

export default Navbar;