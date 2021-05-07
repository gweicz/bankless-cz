import React from "react";
import Head from "next/head";
import MetaTags from "../../components/MetaTags/MetaTags";
import {GetServerSideProps} from 'next'
import {fetchMenuPosts} from 'utils/fetchMenuPosts'
import {PostOrPage} from '@tryghost/content-api'
import {useMenuData} from 'context/SessionContext'
import {NextSeo} from "next-seo";
import google from 'utils/google'

// Fetch posts
export const getServerSideProps: GetServerSideProps = async (context) => {
  const menuPosts = await fetchMenuPosts()

  if (!menuPosts) {
    return {
      redirect: {
        destination: '/404Error',
        permanent: false,
      },
    }
  }

  return {
    props: {menuPosts}, // will be passed to the page component as props
  }
}

const Kodex = ({
  menuPosts,
  isCoockiesEnabled
}: {
menuPosts?: PostOrPage[]
isCoockiesEnabled: boolean
}) => {
  useMenuData({menuPosts})

  return (
    <>
      <Head>
        <title>Bankless | Kodex</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        {google(isCoockiesEnabled)}
      </Head>
      <NextSeo
        title="Bankless | Kodex"
        description="Bankless Kodex je seznam etických zásad, kterým se řídí všichni autoři webu"
        canonical="https://bankless.cz/kodex"
        openGraph={{
          url: 'https://bankless.cz/kodex',
          title: "Bankless | Kodex",
          description: "Bankless Kodex je seznam etických zásad, kterým se řídí všichni autoři webu",
          images: [
            {
              url: "https://bankless.cz/thumbnail.png",
              width: 960,
              height: 540,
              alt: 'BanklessCZ',
            }
          ],
          site_name: 'Bankless',
        }}
        twitter={{
          handle: '@banklesscz',
          site: '@banklesscz',
          cardType: 'summary_large_image',
        }}
      />
      <div className="container" style={{ marginBottom: '50px' }}>
        <h2 className="heading">Bankless etický kodex</h2>
        <p className="paragraph">1) Zveřejňujeme pouze ověřené informace a dbáme na důsledné ověřování zdrojů, které vždy uvedeme na konci článku. Neuvádíme nepodložená fakta a domněnky.</p>
        <p className="paragraph">2) Vyhrazujeme si právo v textech publikovat osobní názory, které ovšem nesmí být předkládány jako fakta.</p>
        <p className="paragraph">3) Informace sepsané v našich textech publikujeme s jedinou motivací: pravdivě informovat veřejnost o věcech, které považujeme za důležité, a které by ji podle našeho přesvědčení měly zajímat.</p>
        <p className="paragraph">4) Reklama či sponzorovaný obsah bude vždy srozumitelně oddělen od obsahu ostatního.</p>
        <p className="paragraph">5) Dáváme prostor k publikování na našem webu komukoliv, kdo má potřebnou úroveň znalostí v dané problematice (i pokud zastáváme jinou ideologii, než on).</p>
        <p className="paragraph">6) Nestavíme se na žádnou politickou stranu.</p>
        <p className="paragraph">7) Nebudeme zveřejňovat žádný etnicky ani rasově zabarvený obsah.</p>
        <p className="paragraph">8) Nejsme neomylní. Pokud uděláme chybu, přiznáme ji, omluvíme se a opravíme ji.</p>
        <p className="paragraph">9) Členové redakce dbají při svém vystupování na veřejnosti a sociálních sítích na uměřenost a přihlížejí ke skutečnosti, že jsou vnímáni zároveň jako zástupci Bankless.</p>
      </div>
    </>

)
}

export default Kodex