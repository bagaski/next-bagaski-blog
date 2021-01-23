import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import marked from 'marked';
import Link from 'next/link'

const Post = ({htmlString, data}) => {

  const styled = {
    margin: '20px',
    fontSize: '48px',
    width: '50vw'
  }


  return (

    <>
    <Head><title>{data.title}</title></Head>
    <div style={styled} dangerouslySetInnerHTML={{__html: htmlString}} />
    <Link href="/">
    <a>
    ← Back
    </a>
    </Link>
    </>
  )

};

//Nextjs static site generation function I for the paths
export const getStaticPaths = async () => {

//Create a path per post with fs. it reads the files in posts folder
//Returns array that i will put in paths underneath...
  const files = fs.readdirSync('content')

    return {
      //paths gets array from const files...and returns an object...
      paths: files.map(filename => ({
        params: {
          slug: filename.replace('.md', '')
        }
      })),
      fallback: false
    }

}

//Nextjs function II for the content
export const getStaticProps = async ({ params: { slug }}) => {

  const markdownWithMetadata = fs.readFileSync(path.join('content', slug + ".md")).toString();

  const parsedMarkdown = matter(markdownWithMetadata)
  const htmlString = marked(parsedMarkdown.content) //md to html with marked

  return {
    props: {
      htmlString,
      data: parsedMarkdown.data
    }
  };

};

export default Post;
