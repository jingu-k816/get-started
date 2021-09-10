import React from 'react';
import ItemCards from '../src/presentation/components/ItemCards';
import { NextSeo } from 'next-seo';

const Items: React.FC = () => {
  const SEO = {
    title: 'Items Page',
    description: 'This is an Items page to see items from JSON data',
    openGraph: {
      type: "website",
      url: "localhost:3000",
      description: "This is another items page's description",
      site_name: "Get Started"
    }
  }
  return(
    <>
      <NextSeo {...SEO} />
      <ItemCards />
    </>
  )
}

export default Items;