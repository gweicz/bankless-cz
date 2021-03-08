import Link from 'next/link'
import { PostOrPage } from '@tryghost/content-api'
import SocShare from 'components/SocShare'
import { formatGhostDataForArticlePost } from 'components/helpers/formatGhostDataForArticlePost'
import style from './MainBanner.module.scss'
import { useState } from 'react'

const MainBanner = ({ data }: { data: PostOrPage[] }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)

  const {
    detailUrl,
    category,
    frontImg,
    author,
    readTime,
    date,
    title,
  } = formatGhostDataForArticlePost(data[activeSlideIndex])

  console.log(detailUrl);

  const _authorName = () => (
    <>
      {author.profileUrl ? (
        <h6 className="post-author-name">
          <Link href={author.profileUrl}>
            <a className="hover-flip-item-wrapper">
              <span className="hover-flip-item text-left">
                <span data-text={author.name}>{author.name}</span>
              </span>
            </a>
          </Link>
        </h6>
      ) : (
        <h6 className="m-0 text-white">
          <span>{author.name}</span>
        </h6>
      )}
    </>
  )

  const _readBtn = () => (
    <div className={`read-more-button cerchio ${style.readPostBtn}`}>
      <Link href={`/${detailUrl}`}>
        <a className="axil-button button-rounded hover-flip-item-wrapper">
          <span className="hover-flip-item">
            <span data-text="Přečíst článek">Přečíst článek</span>
          </span>
        </a>
      </Link>
    </div>
  )

  const _category = () => (
    <div className="post-cat">
      <div className="post-cat-list">
        {/* <a className="hover-flip-item-wrapper" href="#"> */}
        <a className="hover-flip-item-wrapper">
          {/* <span className="hover-flip-item"> */}
          <span className="text-dark cursor-default">
            <span data-text={category}>{category?.toLocaleUpperCase()}</span>
          </span>
          {/* </span> */}
        </a>
        {/* </a> */}
      </div>
    </div>
  )

  const changeSlide = ({ isNext }: { isNext: boolean }) => {
    if (isNext) {
      setActiveSlideIndex(
        activeSlideIndex === data.length - 1 ? 0 : activeSlideIndex + 1,
      )
    } else {
      setActiveSlideIndex(
        activeSlideIndex === 0 ? data.length - 1 : activeSlideIndex - 1,
      )
    }
  }

  const _leftArrowSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-220 -30 900 520">
      <g fill="#878787" stroke="#878787">
        <path
          d="M231.536 -27.5352c-4.68652 -4.68652 -12.2842 -4.68652 -16.9697 -0.000976562l-211.052 211.05c-4.68555 4.6875 -4.68555 12.2852 0 16.9717l211.052 211.05c4.68555 4.68555 12.2832 4.68555 16.9697 0l7.07129 -7.07031
c4.68555 -4.68652 4.68555 -12.2852 0 -16.9707l-178.494 -178.494h375.887c6.62695 0 12 -5.37305 12 -12v-10c0 -6.62695 -5.37305 -12 -12 -12h-375.887l178.494 -178.494c4.68555 -4.68652 4.68555 -12.2852 0 -16.9707z"
        />
      </g>
    </svg>
  )

  const _rightArrowSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-220 -30 900 520">
      <g fill="#878787" stroke="#878787">
        <path
          d="M216.464 411.535c4.68652 4.68652 12.2842 4.68652 16.9697 0l211.052 -211.049c4.68555 -4.6875 4.68555 -12.2852 0 -16.9717l-211.052 -211.05c-4.68555 -4.68555 -12.2832 -4.68555 -16.9697 0l-7.07129 7.07031c-4.68555 4.68652 -4.68555 12.2852 0 16.9707
l178.494 178.494h-375.887c-6.62695 0 -12 5.37305 -12 12v10c0 6.62695 5.37305 12 12 12h375.887l-178.494 178.494c-4.68555 4.68652 -4.68555 12.2852 0 16.9707z"
        />
      </g>
    </svg>
  )

  const _sliderBtns = () => (
    <>
      <button
        onClick={() => changeSlide({ isNext: false })}
        className="slide-arrow prev-arrow slick-arrow"
      >
        {_leftArrowSvg()}
      </button>
      <button
        onClick={() => changeSlide({ isNext: true })}
        className="slide-arrow next-arrow slick-arrow"
      >
        {_rightArrowSvg()}
      </button>
    </>
  )

  return (
    <div className="slider-area bg-color-grey">
      <div className="axil-slide slider-style-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="slider-activation axil-slick-arrow">
                <div className={`content-block ${style.disableHover}`}>
                  {_sliderBtns()}
                  <div className={`post-thumbnail ${style.thumbnailHover}`}>
                    <Link href={`/${detailUrl}`}>
                      <a>
                        {frontImg?.url && (
                          <img
                            className={style.frontImg}
                            src={frontImg.url}
                            alt={frontImg.alt}
                          />
                        )}
                      </a>
                    </Link>
                  </div>

                  <div className="post-content">
                    {_category()}
                    <h2 className="title">
                      <Link href={`/${detailUrl}`}>
                        <a>{title}</a>
                      </Link>
                    </h2>
                    <div className="post-meta-wrapper with-button ">
                      <div className="post-meta w-100 justify-content-between">
                        <div className="content">
                          {_authorName()}
                          <ul className="post-meta-list">
                            <li>{date}</li>
                            <li>{readTime}</li>
                          </ul>
                        </div>
                        <SocShare urlToShare={detailUrl} />
                      </div>

                      {_readBtn()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBanner
