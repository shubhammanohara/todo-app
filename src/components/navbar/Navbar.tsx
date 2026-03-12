import useThemeToggle from '../../hooks/useThemeToggle';
import { LayoutType } from '../../types/common';
import Layout from './Layout';

interface NavbarProps {
  currentLayout: LayoutType;
  setCurrentLayout: (layout: LayoutType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentLayout, setCurrentLayout }) => {
  const { theme, toggleTheme } = useThemeToggle();

  return (
    <Layout
      currentLayout={currentLayout}
      setCurrentLayout={setCurrentLayout}
      theme={theme}
      toggleTheme={toggleTheme}
    />
  );
};

export default Navbar;
