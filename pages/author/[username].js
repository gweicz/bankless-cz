import { useRouter } from 'next/router'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Link from 'next/link'

const AuthorDetailPage = () => {

  const router = useRouter();
  const {username} = router.query;

  return (
    <div>
    <div className="axil-author-area axil-author-banner bg-color-grey" >
     <div className="container">
             <div className="col-lg-12">
                 <div className="about-author" style={{padding : "75px 0px 50px 0px"}}>
                     <div className="media" style={{margin: "80px 0px 28px 0px"}}>
                         <div className="thumbnail">
                             <a href="#">
                                 <img src="/images/small-images/blog-sm-01.jpg" alt="Author's Image" style={{margin: "8px 50px 0px 0px", maxWidth: "100px", maxHeight: "100px"}}/>
                             </a>
                         </div>
                         <div className="media-body">
                             <div className="author-info">
                                   <h1 style= {{marginBottom: '0px', fontSize: '35px', marginTop: '0px'}}><a href="#">{username}</a></h1>
                                   <span style={{color:'grey', fontSize: '14px', marginTop: '0px'}}>Web developer</span>
                             </div>
                             <div className="content">
                                 <p className="b1 description" style={{margin: '10px 0px 0px 0px', fontSize: '18px'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus faucibus molestie nisl. Aliquam ornare wisi eu metus. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Etiam quis quam.</p>
                                 <ul className="social-share-transparent justify-content-centre" style={{marginTop: '15px'}}>
                                 <li><a href="#"><FontAwesomeIcon icon={["fab", "facebook-f"]}/></a></li>
                                 <li><a href="#"><FontAwesomeIcon icon={["fab", "twitter"]}/></a></li>
                                 <li><a href="#"><FontAwesomeIcon icon="link"/></a></li>
                               </ul>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
     </div>
 </div>

<div className="axil-post-list-area post-listview-visible-color axil-section-gap bg-color-white">
<div className="container" style={{maxWidth: "1280px"}}>
 <div className="row">
   <div className="col-lg-8 col-xl-8">
     {/*<div className="axil-banner">*/}
     {/*  <div className="thumbnail">*/}
     {/*    <a href="#">*/}
     {/*      <img className="w-100" src="/images/add-banner/banner-01.png" alt="Banner Images"/>*/}
     {/*    </a>*/}
     {/*  </div>*/}
     {/*</div>*/}

    <div><h1>Články autora</h1></div>

     <div className="content-block post-list-view axil-control is-active mt--30">
       <div className="post-thumbnail">
         <a href="post-details.html">
           <img src="https://cdn.decrypt.co/resize/1400/wp-content/uploads/2020/05/coronavirus-vaccine-stocks-bitcoin-markets-gID_1.jpg" alt="Post Images"/>
         </a>
       </div>
       <div className="post-content">
         <div className="post-cat">
           <div className="post-cat-list">
             <a className="hover-flip-item-wrapper" href="#">
               <span className="hover-flip-item">
                   <span data-text="BLOCKCHAIN">BLOCKCHAIN</span>
               </span>
             </a>
           </div>
         </div>
         <h4 className="title">
           <a href="post-details.html">Jak Hedera zajišťuje bezpečnost u COVID vakcín pomocí blockchainu?</a>
         </h4>
         <div className="post-meta-wrapper">
           <ul className="social-share-transparent justify-content-end">
             <li><a href="#"><FontAwesomeIcon icon={["fab", "facebook-f"]}/></a></li>
             <li><a href="#"><FontAwesomeIcon icon={["fab", "twitter"]}/></a></li>
             <li><a href="#"><FontAwesomeIcon icon="link"/></a></li>
           </ul>
           <div className="post-meta">
             <div className="content">
               <h6 className="post-author-name">
                 <a className="hover-flip-item-wrapper" href="author.html">
                   <span className="hover-flip-item">
                       <span data-text={username} style={{display: 'flex', justifyContent: 'flex-end'}}>username</span>
                   </span>
                 </a>
               </h6>
               <ul className="post-meta-list">
                 <li>Led 26, 2021</li>
                 <li>3 minuty čtení</li>
               </ul>
             </div>
           </div>
         </div>
       </div>
     </div>


     <div className="content-block post-list-view axil-control is-active mt--30">
       <div className="post-thumbnail">
         <a href="post-details.html">
           <img src="https://cdn.decrypt.co/resize/1400/wp-content/uploads/2021/01/Janet_Yellen_official_Federal_Reserve_portrait-e1611269835508-gID_5.jpg" alt="Post Images"/>
         </a>
       </div>
       <div className="post-content">
         <div className="post-cat">
           <div className="post-cat-list">
             <a className="hover-flip-item-wrapper" href="#">
               <span className="hover-flip-item">
                   <span data-text="OSTATNÍ">OSTATNÍ</span>
               </span>
             </a>
           </div>
         </div>
         <h4 className="title">
           <a href="post-details.html">Americký senát potvrdil Janet Yellen jako ministryni financí</a>
         </h4>
         <div className="post-meta-wrapper">
           <ul className="social-share-transparent justify-content-end">
             <li><a href="#"><FontAwesomeIcon icon={["fab", "facebook-f"]}/></a></li>
             <li><a href="#"><FontAwesomeIcon icon={["fab", "twitter"]}/></a></li>
             <li><a href="#"><FontAwesomeIcon icon="link"/></a></li>
           </ul>
           <div className="post-meta">
             <div className="content">
               <h6 className="post-author-name">
                 <a className="hover-flip-item-wrapper" href="author.html">
                   <span className="hover-flip-item">
                       <span data-text={username} style={{display: 'flex', justifyContent: 'flex-end'}}>username</span>
                   </span>
                 </a>
               </h6>
               <ul className="post-meta-list">
                 <li>Led 25, 2021</li>
                 <li>5 minut čtení</li>
               </ul>
             </div>
           </div>
         </div>
       </div>
     </div>


     <div className="content-block post-list-view axil-control is-active mt--30">

       <div className="post-thumbnail">
         <a href="post-details.html">
           <img src="https://cdn.decrypt.co/resize/1400/wp-content/uploads/2021/01/defi-growth-gID_1.jpg" alt="Post Images"/>
         </a>
       </div>
       <div className="post-content">
         <div className="post-cat">
           <div className="post-cat-list">
             <a className="hover-flip-item-wrapper" href="#">
               <span className="hover-flip-item">
                   <span data-text="ETHEREUM">ETHEREUM</span>
               </span>
             </a>
           </div>
         </div>
         <h4 className="title">
           <a href="post-details.html">Tržní kapitalizace DeFi se vyšplahala až na 45 milionů dolarů</a>
         </h4>
         <div className="post-meta-wrapper">
           <ul className="social-share-transparent justify-content-end">
             <li><a href="#"><FontAwesomeIcon icon={["fab", "facebook-f"]}/></a></li>
             <li><a href="#"><FontAwesomeIcon icon={["fab", "twitter"]}/></a></li>
             <li><a href="#"><FontAwesomeIcon icon="link"/></a></li>
           </ul>
           <div className="post-meta">
             <div className="content">
               <h6 className="post-author-name">
                 <a className="hover-flip-item-wrapper" href="author.html">
                   <span className="hover-flip-item">
                       <span data-text={username} style={{display: 'flex', justifyContent: 'flex-end'}}>username</span>
                   </span>
                 </a>
               </h6>
               <ul className="post-meta-list">
                 <li>Led 25, 2021</li>
                 <li>3 minut čtení</li>
               </ul>
             </div>
           </div>
         </div>
       </div>
     </div>


     <div className="content-block post-list-view axil-control is-active mt--30">
       <div className="post-thumbnail">
         <a href="post-details.html">
           <img src="https://cdn.decrypt.co/resize/1400/wp-content/uploads/2020/12/Hack-1-gID_5.jpg" alt="Post Images"/>
         </a>
       </div>
       <div className="post-content">
         <div className="post-cat">
           <div className="post-cat-list">
             <a className="hover-flip-item-wrapper" href="#">
               <span className="hover-flip-item">
                   <span data-text="BITCOIN">BITCOIN</span>
               </span>
             </a>
           </div>
         </div>
         <h4 className="title">
           <a href="post-details.html">Hackeři využili zranitelnost v platformě na ukládání souborů k těžení Bitcoinu</a>
         </h4>
         <div className="post-meta-wrapper">
           <ul className="social-share-transparent justify-content-end">
             <li><a href="#"><FontAwesomeIcon icon={["fab", "facebook-f"]}/></a></li>
             <li><a href="#"><FontAwesomeIcon icon={["fab", "twitter"]}/></a></li>
             <li><a href="#"><FontAwesomeIcon icon="link"/></a></li>
           </ul>
           <div className="post-meta">
             <div className="content">
               <h6 className="post-author-name">
                 <a className="hover-flip-item-wrapper" href="author.html">
                   <span className="hover-flip-item">
                       <span data-text={username} style={{display: 'flex', justifyContent: 'flex-end'}}>username</span>
                   </span>
                 </a>
               </h6>
               <ul className="post-meta-list">
                 <li>Led 25, 2021</li>
                 <li>4 minut čtení</li>
               </ul>
             </div>
           </div>
         </div>
       </div>
     </div>

   </div>
   <div className="col-lg-4 col-xl-4 mt_md--40 mt_sm--40">

     <div className="sidebar-inner" style={{marginTop:'65px'}}>

       <div className="axil-single-widget widget widget_categories mb--30">
         <ul>
           <li className="cat-item">
             <Link href="/novinky/ethereum">
               <a className="inner">
                 <div className="thumbnail">
                   <picture>
                     <source srcSet="/images/icons/ethereum.webp" type="image/webp"/>
                     <source srcSet="/images/icons/ethereum.png" type="image/png"/>
                     <img src="/images/icons/ethereum.png" alt="Ethereum"/>
                   </picture>
                 </div>
                 <div className="content">
                   <h5 className="title">Ethereum</h5>
                 </div>
               </a>
             </Link>
           </li>
           <li className="cat-item">
             <Link href="/novinky/bitcoin">
               <a className="inner">
                 <div className="thumbnail">
                   <picture>
                     <source srcSet="/images/icons/bitcoin.webp" type="image/webp"/>
                     <source srcSet="/images/icons/bitcoin.png" type="image/png"/>
                     <img src="/images/icons/bitcoin.png" alt="Bitcoin"/>
                   </picture>
                 </div>
                 <div className="content">
                   <h5 className="title">Bitcoin</h5>
                 </div>
               </a>
             </Link>
           </li>
           <li className="cat-item">
             <Link href="/novinky/polkadot">
               <a className="inner">
                 <div className="thumbnail">
                   <picture>
                     <source srcSet="/images/icons/polkadot.webp" type="image/webp"/>
                     <source srcSet="/images/icons/polkadot.jpg" type="image/jpeg"/>
                     <img src="/images/icons/polkadot.jpg" alt="Polkadot"/>
                   </picture>
                 </div>
                 <div className="content">
                   <h5 className="title">Polkadot</h5>
                 </div>
               </a>
             </Link>
           </li>
           <li className="cat-item">
             <Link href="/novinky/other">
               <a className="inner">
                 <div className="thumbnail">
                   <img src="/images/logo/logo_hash_64.png" alt="Ostatní" style={{width: "28px"}}/>
                 </div>
                 <div className="content">
                   <h5 className="title">Ostatní</h5>
                 </div>
               </a>
             </Link>
           </li>
         </ul>
       </div>

       <div className="axil-single-widget widget widget_postlist mb--30">
         <h4 className="widget-title">#Hashovky</h4>
         <div className="post-medium-block">

           <div className="content-block post-medium mb--20">
             <div className="post-content hash-news">
               <p className="hash-content">
                 Metamask: "Pokud máte problém s odesíláním transakcí v naší mobilní aplikaci, zkuste se přepnout
                 na jinou síť a po té zase zpět".
                 <a href="https://twitter.com/metamask_io/status/1353118291959529472?s=20">Zdroj</a>
               </p>
               <div className="post-meta hash-meta">
                 <ul className="post-meta-list">
                   <li>10:07</li>
                   <li>Led 24, 2021</li>
                 </ul>
               </div>
             </div>
           </div>

           <div className="content-block post-medium mb--20">
             <div className="post-content hash-news">
               <p className="hash-content">
                 Podle Coingecko tržní kapitalizace DeFi narostla mezi roky 2020 a 2021 o 41 miliard dolarů.
                 <a href="https://twitter.com/coingecko/status/1353206035763392512?s=20">Více info</a>
               </p>
               <div className="post-meta hash-meta">
                 <ul className="post-meta-list">
                   <li>10:07</li>
                   <li>Led 24, 2021</li>
                 </ul>
               </div>
             </div>
           </div>

         </div>

       </div>

       <div className="axil-single-widget widget widget_social mb--30">
         <h5 className="widget-title">Sledujte nás</h5>
         <ul className="social-icon md-size justify-content-center">
           <li><a href="#"><FontAwesomeIcon icon={["fab", "facebook-f"]} /></a></li>
           <li><a href="#"><FontAwesomeIcon icon={["fab", "twitter"]} /></a></li>
           <li><a href="#"><FontAwesomeIcon icon={["fab", "instagram"]} /></a></li>
           <li><a href="#"><FontAwesomeIcon icon={["fab", "discord"]} /></a></li>
         </ul>
       </div>

       <div className="axil-single-widget widget widget_instagram mb--30">
         <h5 className="widget-title">Instagram</h5>
         <ul className="instagram-post-list-wrapper">
           <li className="instagram-post-list">
             <a href="#">
               <img src="/images/small-images/instagram-01.jpg" alt="Instagram Images"/>
             </a>
           </li>
           <li className="instagram-post-list">
             <a href="#">
               <img src="/images/small-images/instagram-02.jpg" alt="Instagram Images"/>
             </a>
           </li>
           <li className="instagram-post-list">
             <a href="#">
               <img src="/images/small-images/instagram-03.jpg" alt="Instagram Images"/>
             </a>
           </li>
           <li className="instagram-post-list">
             <a href="#">
               <img src="/images/small-images/instagram-04.jpg" alt="Instagram Images"/>
             </a>
           </li>
           <li className="instagram-post-list">
             <a href="#">
               <img src="/images/small-images/instagram-05.jpg" alt="Instagram Images"/>
             </a>
           </li>
           <li className="instagram-post-list">
             <a href="#">
               <img src="/images/small-images/instagram-06.jpg" alt="Instagram Images"/>
             </a>
           </li>
         </ul>
       </div>
     </div>

   </div>
 </div>
</div>
</div>
</div>
    )
}

export default AuthorDetailPage