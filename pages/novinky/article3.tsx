import Article from 'components/Article/Article'

export const article3Data = {
  detailUrl: '/novinky/article3',
  frontImg: {
    url:
      'https://cdn.decrypt.co/resize/1400/wp-content/uploads/2021/01/defi-growth-gID_1.jpg',
    alt: 'Post Images',
  },
  category: 'ETHEREUM',
  title: 'Tržní kapitalizace DeFi se vyšplahala až na 45 milionů dolarů',

  date: 'Led 25, 2021',
  readTime: '3 minuty čtení',
  author: {
    name: 'rixcian',
    img: {
      url: '/images/post-images/author/author-b1.png',
      alt: 'autor',
    },
    imgSmall: {
      url: '/images/post-images/author/author-image-3.png',
      alt: 'autor',
    },
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    profileUrl: '/author/rixian',
  },
}

export default function Article3() {
  return (
    <Article data={article3Data}>
      <p className="has-medium-font-size">
        Tržní kapitalizace DeFi se vyšplahala až na 45 milionů dolarů
      </p>
      <figure className="wp-block-image">
        <img src="/images/post-single/post-single-02.jpg" alt="Post Images" />
        <figcaption>
          The Apple Design Award trophy, created by the Apple Design team, is a
          symbol of achievement and excellence.
        </figcaption>
      </figure>
      <p>
        Apple today named eight app and game developers receiving an Apple
        Design Award, each one selected for being thoughtful and creative. Apple
        Design Award winners bring distinctive new ideas to life and demonstrate
        deep mastery of Apple technology. The apps spring up from developers
        large and small, in every part of the world, and provide users with new
        ways of working, creating, and playing.
      </p>
      <p>
        “Every year, app and game developers demonstrate exceptional
        craftsmanship and we’re honoring the best of the best,” said Ron
        Okamoto, Apple’s vice president of Worldwide Developer Relations.
        “Receiving an Apple Design Award is a special and laudable
        accomplishment. Past honorees have made some of the most noteworthy apps
        and games of all time. Through their vision, determination, and exacting
        standards, the winning developers inspire not only their peers in the
        Apple developer community, but all of us at Apple, too.”
      </p>
      <h2>Apple Design Award Winners: Apps</h2>
      <p>
        {' '}
        Apple today named eight app and game developers receiving an Apple
        Design Award, each one selected for being thoughtful and creative. Apple
        Design Award winners bring distinctive new ideas to life and demonstrate
        deep mastery of Apple technology. The apps spring up from developers
        large and small, in every part of the world, and provide users with new
        ways of working, creating, and playing.
      </p>
      <p>
        “Every year, app and game developers demonstrate exceptional
        craftsmanship and we’re honoring the best of the best,” said Ron
        Okamoto, Apple’s vice president of Worldwide Developer Relations.
        “Receiving an Apple Design Award is a special and laudable
        accomplishment. Past honorees have made some of the most noteworthy apps
        and games of all time. Through their vision, determination, and exacting
        standards, the winning developers inspire not only their peers in the
        Apple developer community, but all of us at Apple, too.”
      </p>
      <blockquote>
        <p>
          “Most of us felt like we could trust each other to be quarantined
          together, so we didn’t need to wear masks or stay far apart.”
        </p>
      </blockquote>
      <figure className="wp-block-image">
        <img src="/images/post-single/post-single-03.jpg" alt="Post Images" />
        <figcaption>
          The Apple Design Award trophy, created by the Apple Design team, is a
          symbol of achievement and excellence.
        </figcaption>
      </figure>
      <h2>Apple Design Award Winners: Apps</h2>
      <p>
        <a href="#">Apple today named</a> eight app and game developers
        receiving an Apple Design Award, each one selected for being thoughtful
        and creative. Apple Design Award winners bring distinctive new ideas to
        life and demonstrate deep mastery of Apple technology. The apps spring
        up from developers large and small, in every part of the world, and
        provide users with new ways of working, creating, and playing.
      </p>
      <p>
        “Every year, app and game developers demonstrate exceptional
        craftsmanship and we’re honoring the best of the best,” said Ron
        Okamoto, Apple’s vice president of Worldwide Developer Relations.
        “Receiving an Apple Design Award is a special and laudable
        accomplishment. Past honorees have made some of the most noteworthy apps
        and games of all time. Through their vision, determination, and exacting
        standards, the winning developers inspire not only their peers in the
        Apple developer community, but all of us at Apple, too.”
      </p>

      <figure className="wp-block-image">
        <img src="/images/post-single/post-single-04.jpg" alt="Post Images" />
        <figcaption>
          The Apple Design Award trophy, created by the Apple Design team, is a
          symbol of achievement and excellence.
        </figcaption>
      </figure>
      <h3>Apple Design Award Winners: Apps </h3>
      <p>
        {' '}
        <a href="#">Apple today named</a> eight app and game developers
        receiving an Apple Design Award, each one selected for being thoughtful
        and creative. Apple Design Award winners bring distinctive new ideas to
        life and demonstrate deep mastery of Apple technology. The apps spring
        up from developers large and small, in every part of the world, and
        provide users with new ways of working, creating, and playing.
      </p>
      <p>
        “Every year, app and game developers demonstrate exceptional
        craftsmanship and we’re honoring the best of the best,” said Ron
        Okamoto, Apple’s vice president of Worldwide Developer Relations.
        “Receiving an Apple Design Award is a special and laudable
        accomplishment. Past honorees have made some of the most noteworthy apps
        and games of all time. Through their vision, determination, and exacting
        standards, the winning developers inspire not only their peers in the
        Apple developer community, but all of us at Apple, too.”{' '}
      </p>
      <p>
        More than 250 developers have been recognized with Apple Design Awards
        over the past 20 years. The recognition has proven to be an accelerant
        for developers who are pioneering innovative designs within their
        individual apps and influencing entire categories. Previous winners such
        as Pixelmator, djay, Complete Anatomy, HomeCourt, “Florence,” and
        “Crossy Road” have set the standard in areas such as storytelling,
        interface design, and use of Apple tools and technologies.
      </p>
      <p>
        For more information on the apps and games, visit the{' '}
        <a href="#">App Store</a>.
      </p>
    </Article>
  )
}
