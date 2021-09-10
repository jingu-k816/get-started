import { NextSeo } from 'next-seo';
import React from 'react';
import styles from '/styles/Home.module.css'

const About: React.FC = () => {
  const SEO = {
    title: 'About Page',
    description: 'This is an About page to show a line of text',
    openGraph: {
      type: "website",
      url: "localhost:3000",
      description: "This is another about page's description",
      site_name: "Get Started"
    }
  }

  return(
    <>
    <NextSeo {...SEO} />
      <div className={styles.container}>
        I am an about
      </div>
    </>
  )
}

export default About;