import Layout from './Layout';

interface SearchBarProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar: React.FC<SearchBarProps> = ({ setSearch }) => {
  return <Layout setSearch={setSearch} />;
};

export default SearchBar;
