import React from 'react';
import ItemCards from '../src/presentation/components/ItemCards';
import { NextSeo } from 'next-seo';

const Items: React.FC = () => {
  const SEO = {
    title: 'Items Page',
    description: 'This is an Items page to see items from JSON data'
  }
  return(
    <>
      <NextSeo {...SEO} />
      <ItemCards />
    </>
  )
}

export default Items;