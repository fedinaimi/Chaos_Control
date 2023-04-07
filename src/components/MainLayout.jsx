
import { useEffect } from 'react'
import { getAllNFTs, isWallectConnected } from '../Blockchain.services'
import Alert from './Alert'
import Artworks from './Artworks'
import CreateNFT from './CreateNFT'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import Loading from './Loading'
import ShowNFT from './ShowNFT'
import Transactions from './Transactions'
import UpdateNFT from './UpdateNFT'
import AccessToMeta from './AccessToMeta'
import Signin from './signin'
import WorkCard from './WorkCard'
import Showworkdetail from './Showworkdetail'
import Apply from './Apply'

const MainLayout = () => {
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
      <WorkCard/>
      <Transactions />
      <CreateNFT />
      <ShowNFT />
      <UpdateNFT />
      <Footer />
      <Alert />
      <Loading />
      <AccessToMeta/>
      <Showworkdetail/>
      <Signin/>
   
    
     
    </div>
  )
  
}

export default MainLayout