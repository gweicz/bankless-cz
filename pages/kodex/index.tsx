import React from "react";
import Head from "next/head";
import MetaTags from "../../components/MetaTags/MetaTags";

const Kodex = () => {

  return (
    <>
      <Head>
        <title>Bankless | Kodex</title>
        <link rel="icon" type="image/png" href="/favicon.png" />

        <MetaTags
          meta_title="Bankless | Kodex"
          meta_description="Bankless Kodex je seznam etických zásad, kterým se řídí všichni autoři webu"
          og_title="Bankless | Kodex"
          og_image=""
          og_description="Bankless Kodex je seznam etických zásad, kterým se řídí všichni autoři webu"
          twitter_title="Bankless | Kodex"
          twitter_image=""
          twitter_description="Bankless Kodex je seznam etických zásad, kterým se řídí všichni autoři webu"
        />

        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_KEY}`}></script>
        <script
          async
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_KEY}');`
          }}
        />
      </Head>
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