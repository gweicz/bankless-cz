import React from "react";
import Head from "next/head";
import MetaTags from "../../components/MetaTags/MetaTags";
import {GetServerSideProps} from 'next'
import {fetchMenuPosts} from 'utils/fetchMenuPosts'
import {PostOrPage} from '@tryghost/content-api'
import {useMenuData} from 'context/SessionContext'
import {NextSeo} from "next-seo";
import style from 'components/Article/Article.module.scss'
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

const Podminky = ({
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
        title="Bankless | Podmínky"
        description="Bankless podmínky užívání webu"
        canonical="https://bankless.cz/podminky"
        openGraph={{
          url: 'https://bankless.cz/podminky',
          title: "Bankless | Podmínky",
          description: "Bankless podmínky užívání webu",
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
        <h2 className="heading">Podmínky použití webových stránek, Ochrana osobních údajů a využití souborů cookies</h2>
        <h3>Podmínky použití</h3>
        <p className="paragraph">Přístupem, používáním, prohlížením, spouštěním, načítáním a navštěvováním stránek www.bankless.cz včetně všech jejich součástí, obsahu, sekcí a podsekcí, obrázků, videí, grafiky, textů, názvů, popisů, souborů, zdrojových kódů a dalšího (dále jako "Stránka") a jejích služeb (dále jako "Služby"), vy jako uživatel (dále jako "Uživatel") prohlašujete, že budete jednat v souladu s podmínkami uvedenými níže a že s nimi souhlasíte. Dále potvrzujete vaše porozumnění těchto podmínek použití a že budete jednat v souladu s platným Právním řádem České republiky.</p>
        <h3>Podmínky stránek</h3>
        <p className="paragraph">Vlastník Stránky (dále jako "BanklessCZ") si vyhrazuje právo na své uvážení kdykoliv změnit, odstranit či upravit jakoukoliv součást Stránky a to včetně těchto podmínek použití.</p>
        <h3>Odkazy</h3>
        <p className="paragraph">Tato webová stránka obsahuje odkazy na servery, služby a webové stránky, které nejsou pod správou a vlastnictvím BanklessCZ tudíž za ně nebere žádnou zodpovědnost, neručí za ně, nenabízí na ně žádnou podporu a odmítá zodpovědnost za jakékoliv nepřesnosti, chyby, nefunkčnosti, výpadky a nevhodný obsah. Odkazy a přesměrování jsou na webové stránce pouze pro vaše pohodlí, což neznamená, že majitel nebo webová stránka souhlasí s jejich obsahem.</p>
        <h3>Obsah stránek</h3>
        <p className="paragraph">Tato webová stránka může obsahovat technické nepřesnosti a typografické chyby. Všechen obsah, včetně těchto podmínek použití, může být postupem času upravován dle uvážení BanklessCZ. Před učiněním jakéhokoliv rozhodnutí na základě obsahu této stránky si ověřte správnost, úplnost, přesnost a pravdivost informací. Majitel webových stránek neposkytuje záruku opravení případných chyb.</p>
        <h3>Poskytnutí obsahu</h3>
        <p className="paragraph">Poskytnutím a zasláním jakýchkoliv souborů, obrázků, videí, postupů, návodů, konceptů, informací a dalšího Stránce souhlasíte, že s nimi může BanklessCZ nakládat dle svého uvážení po neomezeně dlouhou dobu. BanklessCZ si nepřeje prostřednictvím Stránek dostávat žádné důvěrné, nevhodné, škodlivé, intimní informace či osobní údaje, případně informace tohoto charakteru. Proto takto poskytnuté informace za důvěrné považovány nebudou.</p>
        <h3>Soukromí</h3>
        <p className="paragraph">BanklessCZ nebude zveřejňovat vaše jméno či osobní údaje při použití jakýchkoliv vámi předaných informací či souborů.</p>
        <h3>Soubory cookies</h3>
        <p className="paragraph">Stránka užívá k poskytnutí co nejlepšího uživatelského zážitku soubory cookies. Využíváním Služeb Stránky s jejich užíváním a ukládáním souhlasíte.</p>
        <h3>Ochrana osobních údajů</h3>
        <p className="paragraph">BanklessCZ respektuje veškeré vaše osobní informace a považuje je za soukromé. Bude s nimi nakládat podle zákona o ochraně osobních údajů č. 101/2000 Sb. a nařízením EU 2016/679 (GDPR), a to v platném znění.</p>
        <h3>Ochrana osobních údajů společnosti Google inc.</h3>
        <div className={style.content}><p className="paragraph">Tato webová stránka obsahuje aplikace společnosti Google, Inc., která nakládá s vašimi osobními informacemi dle vlastních prohlášení a podmínek. Společnost Google, Inc. má právo používat vaše soubory cookies a informace o používání webu, které může zpracovávat na svých serverech a poskytovat je třetím stranám, ale to jen v případě, že to vyžaduje zákon a nebo třetí strana ke zpracovávání těchto informací pro Google, Inc. Používáním této webové stránky souhlasíte s podmínkami společnosti Google, Inc. a s odesíláním vašich údajů společnosti Google, Inc. Zásady Ochrany Soukromí Google jsou k dispozici <a href='https://policies.google.com/privacy' target= "_blank">zde</a>.</p></div>
      </div>
    </>

)
}

export default Podminky
