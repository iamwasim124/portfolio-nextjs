import React, { ReactNode } from 'react';
import Head from 'next/head';

interface seoProps {
  children?: ReactNode;
  title: string;
  description: string;
  ogImageTag: string;  // Updated type from 'any' to 'string'
}

const WithSeo = ({ children, title, description, ogImageTag }: seoProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta property="og:image" content={ogImageTag} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
};

export default WithSeo;
