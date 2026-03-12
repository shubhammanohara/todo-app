import React from 'react'
import SearchBar from '../searchBar'
import Accordion from '../accordion'
import { PlusIcon } from '../icons'
import Card from '../card'

interface LayoutProps {
}

const Layout: React.FC<LayoutProps> = () => {
    return (
        <div className="p-2">
            <SearchBar />
            <div className="flex flex-col gap-2 p-2">
                <Accordion title="Click me to see the content" content={<Card title="My Card" content="This is the card content sjpsjd siofjiosd oijiojeiasjd" date="2023-01-01" />} />
                <Accordion title="Click me to see the content" content={<Card title="My Card" content="This is the card content sjpsjd siofjiosd oijiojeiasjd" date="2023-01-01" />} />
                <Accordion title="Click me to see the content" content={<Card title="My Card" content="This is the card content sjpsjd siofjiosd oijiojeiasjd" date="2023-01-01" />} />
            </div>

        </div >
    )
}

export default Layout