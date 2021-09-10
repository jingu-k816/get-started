import React from 'react';
import styles from '/styles/Home.module.css'
import Index from '../src/presentation/components';
import { NextSeo } from 'next-seo';

const Home: React.FC = () => {

  const SEO = {
    title: 'Index Page',
    description: 'This is an Index page to show that the page includes a line of text',
    openGraph: {
      type: "website",
      url: "localhost:3000",
      description: "This is another index page's description",
      site_name: "Get Started"
    }
  }

  return (
    <>
      <NextSeo {...SEO} />
      <div className={styles.container}>
        <Index />
      </div>
    </>
  )
}

export default Home;
