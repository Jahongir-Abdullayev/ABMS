import { Main } from 'components/UI/Main/Main'
import SEO from 'components/SEO'
import { fetchMultipleUrls } from 'services/fetchMultipleUrls'

import AboutUs from './about'
import { OurBenefits } from 'components/UI/OurBenefits/Benefits'
import { Network } from 'components/UI/Network/Network'
import { Brands } from 'components/UI/Brands/Brands'
import { Partners } from 'components/UI/Partners/Partners'
import { companyPartners, homePartners, ourPartners } from 'constants/partners'


export default function Home({ data }) {
  
  return (
    <>
      <SEO />
      <Main />
      {/* <Catalog /> */}
      {/* <AboutUs /> */}
      <Brands />
      <Partners title={"homeApplianceCompany"} data={homePartners} background={"#D9D9D9"} />
      <Partners title={"itCompanyPartners"} data={companyPartners} background={"white"} />
      <Partners title={"ourPartners"} data={ourPartners} background={"#D9D9D9"} />
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
