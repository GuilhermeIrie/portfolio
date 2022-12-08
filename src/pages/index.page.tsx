import Head from 'next/head'
import { BioComponent } from '../components/BioComponent'

import { Margin } from '../components/Header/styled'
import { HomeButton } from '../components/HomeButton'

const Home = () => {
  return (
    <>
      <Head>
        <title>Portfólio - Guilherme Irie</title>
        <link rel="icon" href="/portfolio.svg" />
      </Head>

      <main>
        <Margin>
          <div
            style={{
              width: '100vw',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '48px'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                width: '100%',
                marginTop: '400px'
              }}
            >
              <HomeButton />
              <BioComponent />
            </div>
          </div>
        </Margin>
      </main>
    </>
  )
}

export default Home
