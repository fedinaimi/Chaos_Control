import { useEffect } from 'react'
import { getAllNFTs, isWallectConnected } from './Blockchain.services'
import Alert from './components/Alert'
import Artworks from './components/Artworks'
import CreateNFT from './components/CreateNFT'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Loading from './components/Loading'
import ShowNFT from './components/ShowNFT'
import Transactions from './components/Transactions'
import UpdateNFT from './components/UpdateNFT'
import AccessToMeta from './components/AccessToMeta'
import Signin from './components/signin'

const App = () => {
  useEffect(async () => {
    await isWallectConnected()
    await getAllNFTs()
  }, [])

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header />
        <Hero />
      </div>
      <Artworks />
      <Transactions />
      <CreateNFT />
      <ShowNFT />
      <UpdateNFT />
      <Footer />
      <Alert />
      <Loading />
      <AccessToMeta/>
      <Signin/>
    </div>
  )
}

export default App