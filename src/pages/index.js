import { Main } from 'components/UI/Main/Main'
import SEO from 'components/SEO'
import { fetchMultipleUrls } from 'services/fetchMultipleUrls'
import { Catalog } from 'components/UI/Catalogs/Catalog'
import AboutUs from './about'
import { OurBenefits } from 'components/UI/OurBenefits/Benefits'
import { Network } from 'components/UI/Network/Network'

export default function Home({ data }) {
  
  return (
    <>
      <SEO />
      <Main />
      {/* <Catalog /> */}
      <AboutUs />
      <OurBenefits />
      <Network />
    </>
  )
}

export async function getServerSideProps(context) {
  const urls = ['/posts']
  const data = await fetchMultipleUrls(urls)

  return {
    props: {
      data
    }
  }
}
