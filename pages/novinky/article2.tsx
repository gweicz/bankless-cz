import Article from 'components/Article/Article'

export const article2Data = {
  detailUrl: '/novinky/article2',
  frontImg: {
    url:
      'https://cdn.decrypt.co/resize/1400/wp-content/uploads/2021/01/Janet_Yellen_official_Federal_Reserve_portrait-e1611269835508-gID_5.jpg',
    alt: 'Post Images',
  },
  category: 'OSTATNÍ',
  title: 'Americký senát potvrdil Janet Yellen jako ministryni financí',
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
  date: 'Led 17, 2020',
  readTime: '10 minut',
}

export default function Article2() {
  return (
    <Article data={article2Data}>
      <p className="has-medium-font-size">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <figure className="wp-block-image">
        <img src="/images/post-single/post-single-02.jpg" alt="Post Images" />
        <figcaption>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          consectetur nec nunc ac ornare.
        </figcaption>
      </figure>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        consectetur nec nunc ac ornare. Interdum et malesuada fames ac ante
        ipsum primis in faucibus. Mauris eu risus a urna mollis interdum. Sed
        orci mauris, ultrices vitae molestie ac, tristique ut sem. Nunc
        condimentum risus ut purus convallis dignissim. Proin sit amet quam vel
        dui pulvinar imperdiet vitae sed lectus. Nulla nec aliquet sapien, vitae
        finibus urna. Cras laoreet tempus metus id ultricies. Cras commodo
        vestibulum posuere. Quisque a pharetra augue. In convallis ligula sed
        posuere lacinia. Ut ullamcorper mi orci, id interdum justo faucibus vel.
        Maecenas aliquet massa eros, sed euismod magna cursus eget.
      </p>

      <h2>Praesent ultrices tincidunt</h2>
      <p>
        <a href="#">In gravida nibh vitae lacus</a> In gravida nibh vitae lacus
        convallis scelerisque. Praesent ultrices tincidunt turpis, eu venenatis
        dui mollis a. Sed quis facilisis ante, a gravida est. Maecenas vitae
        eleifend velit, eget tristique orci. Curabitur molestie, est sit amet
        volutpat lobortis, odio purus dictum tortor, eget consectetur tellus ex
        quis lectus. Donec tristique, nulla a elementum pretium, tortor lectus
        venenatis purus, eu suscipit diam neque nec mauris. Sed id turpis dui.
        Nam a est dapibus, feugiat lacus eu, malesuada lacus. Quisque cursus
        nunc quis nisi efficitur, tincidunt fermentum leo sollicitudin. Morbi
        consectetur venenatis viverra. Nunc eu mi massa. Sed eu tellus eget sem
        dictum congue quis sagittis lectus. Maecenas sed orci non justo porta
        malesuada eget quis diam. Ut posuere venenatis imperdiet. Nullam aliquam
        vel tellus vel ultricies.
      </p>
      <p>
        Curabitur molestie, est sit amet volutpat lobortis, odio purus dictum
        tortor, eget consectetur tellus ex quis lectus. Donec tristique, nulla a
        elementum pretium, tortor lectus venenatis purus, eu suscipit diam neque
        nec mauris. Sed id turpis dui. Nam a est dapibus, feugiat lacus eu,
        malesuada lacus. Quisque cursus nunc quis nisi efficitur, tincidunt
        fermentum leo sollicitudin. Morbi consectetur venenatis viverra. Nunc eu
        mi massa. Sed eu tellus eget sem dictum congue quis sagittis lectus.
        Maecenas sed orci non justo porta malesuada eget quis diam. Ut posuere
        venenatis imperdiet. Nullam aliquam vel tellus vel ultricies.
      </p>

      <figure className="wp-block-image">
        <img src="/images/post-single/post-single-04.jpg" alt="Post Images" />
        <figcaption>
          Quisque cursus nunc quis nisi efficitur, tincidunt fermentum leo
          sollicitudin.
        </figcaption>
      </figure>
      <h3>Curabitur molestie, est sit amet</h3>
      <p>
        {' '}
        <a href="#">Maecenas sed orc</a> eight app and game developers receiving
        an Apple Design Award, each one selected for being thoughtful and
        creative. Apple Design Award winners bring distinctive new ideas to life
        and demonstrate deep mastery of Apple technology. The apps spring up
        from developers large and small, in every part of the world, and provide
        users with new ways of working, creating, and playing.
      </p>
      <p>
        Sed id turpis dui. Nam a est dapibus, feugiat lacus eu, malesuada lacus.
        Quisque cursus nunc quis nisi efficitur, tincidunt fermentum leo
        sollicitudin. Morbi consectetur venenatis viverra. Nunc eu mi massa. Sed
        eu tellus eget sem dictum congue quis sagittis lectus. Maecenas sed orci
        non justo porta malesuada eget quis diam. Ut posuere venenatis
        imperdiet. Nullam aliquam vel tellus vel ultricies.
      </p>
      <p>
        For more information on the apps and games, visit the{' '}
        <a href="#">Nam a est dapibus</a>.
      </p>
    </Article>
  )
}
