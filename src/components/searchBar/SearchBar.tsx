import Layout from './Layout';

interface SearchBarProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  disabled?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  setSearch,
  disabled,
}) => {
  return <Layout setSearch={setSearch} disabled={disabled} />;
};

export default SearchBar;
