import Head from 'next/head'

export default function Layout({ children, pageTitle, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Bagaski Blog</title>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <header>Bagaski</header>
      <section className="layout">
        ?//<div className="content">{children}</div>
      </section>
      <footer>Built by Bagaski!</footer>
    </>
  )
}
