import Head from 'next/head';
import React, { useEffect } from 'react';
import Link from 'next/link';
import fs from 'fs';

export default function Home({slugs}) {

  useEffect(()=>{
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  },[])

  const styled = {
    fontSize: '48px',
    listStyleType: 'none',
  }

  const styleLinks = {
    color: 'red',
    textDecoration: 'none'
  }


  return (
    <div>
    <ul style={styled}>
    {slugs.map(slug => <li key={slug}><Link href={'/' + slug}><a style={styleLinks}>{slug}</a></Link></li>)}
    </ul>
    </div>
  )
}

export const getStaticProps = async () => {

  const files = fs.readdirSync('content');
  return {
    props: {
      slugs: files.map(filename => filename.replace('.md', ''))
      }
    }
  }
