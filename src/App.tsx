import './App.css'
import Accordion from './components/accordion';
import Card from './components/card';
import Footer from './components/footer';
import { PlusIcon } from './components/icons';
import Navbar from './components/navbar';
import SearchBar from './components/searchBar';

function App() {

  return (
    <>
      <Navbar />
      <div className="md:hero bg-base-100 min-h-screen">
        <div className="md:hero-content">
          <div className="md:max-w-md">
            <SearchBar />
            <div className="flex flex-col gap-2 p-2">
              <Accordion title="Click me to see the content" content={<Card title="My Card" content="This is the card content sjpsjd siofjiosd oijiojeiasjd" date="2023-01-01" />} />
              <Accordion title="Click me to see the content" content={<Card title="My Card" content="This is the card content sjpsjd siofjiosd oijiojeiasjd" date="2023-01-01" />} />
              <Accordion title="Click me to see the content" content={<Card title="My Card" content="This is the card content sjpsjd siofjiosd oijiojeiasjd" date="2023-01-01" />} />
            </div>
            <button className="btn btn-primary text-primary-content btn-xl btn-circle fixed bottom-6 right-6 shadow-lg">
              <PlusIcon />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
