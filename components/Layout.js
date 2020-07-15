import Head from 'next/head'

import Navbar from '../components/Navbar'

function Layout (props) {

  const customStyle = {
  }

  return(
    <div>
      <Head>
        <title>Dumbass Website lol</title>
        <link rel="stylesheet" href="https://bootswatch.com/4/spacelab/bootstrap.min.css" />
      </Head>
      <Navbar />
      <div className="container" style={customStyle}>
        {props.children}
      </div>
    </div>
  )
}

export default Layout