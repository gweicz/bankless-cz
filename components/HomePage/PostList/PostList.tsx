import Post from './Post'

const posts = [
  {
    detailUrl: '/novinky/test1',
    img: {
      url:
        'https://cdn.decrypt.co/resize/1400/wp-content/uploads/2020/05/coronavirus-vaccine-stocks-bitcoin-markets-gID_1.jpg',
      alt: 'Post Images',
    },
    category: 'BLOCKCHAIN',
    text: 'Jak Hedera zajišťuje bezpečnost u COVID vakcín pomocí blockchainu?',
    author: {
      name: 'rixcian',
    },
    date: 'Led 26, 2021',
    readTime: '3 minuty čtení',
  },
  {
    detailUrl: '/novinky/test1',
    img: {
      url:
        'https://cdn.decrypt.co/resize/1400/wp-content/uploads/2021/01/Janet_Yellen_official_Federal_Reserve_portrait-e1611269835508-gID_5.jpg',
      alt: 'Post Images',
    },
    category: 'OSTATNÍ',
    text: 'Americký senát potvrdil Janet Yellen jako ministryni financí',
    author: {
      name: 'rixcian',
    },
    date: 'Led 25, 2021',
    readTime: '5 minuty čtení',
  },
  {
    detailUrl: '/novinky/test1',
    img: {
      url:
        'https://cdn.decrypt.co/resize/1400/wp-content/uploads/2021/01/defi-growth-gID_1.jpg',
      alt: 'Post Images',
    },
    category: 'ETHEREUM',
    text: 'Tržní kapitalizace DeFi se vyšplahala až na 45 milionů dolarů',
    author: {
      name: 'rixcian',
    },
    date: 'Led 25, 2021',
    readTime: '3 minuty čtení',
  },
  {
    detailUrl: '/novinky/test1',
    img: {
      url:
        'https://cdn.decrypt.co/resize/1400/wp-content/uploads/2020/12/Hack-1-gID_5.jpg',
      alt: 'Post Images',
    },
    category: 'BITCOIN',
    text:
      'Hackeři využili zranitelnost v platformě na ukládání souborů k těžení Bitcoinu',
    author: {
      name: 'rixcian',
    },
    date: 'Led 23, 2021',
    readTime: '5 minuty čtení',
  },
]

const PostList = () => {
  return (
    <div className="col-lg-8 col-xl-8">
      {posts.map((postData) => (
        <Post data={postData} />
      ))}
    </div>
  )
}

export default PostList
