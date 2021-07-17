import { LeftArrowSvg, RightArrowSvg } from '../Svgs/arrows'

import CheckPost from 'components/helpers/CheckPost'
import Link from 'next/link'
import { PostOrPage } from '@tryghost/content-api'
import SocShare from 'components/SocShare'
import { formatGhostDataForArticlePost } from 'components/helpers/formatGhostDataForArticlePost'
import style from './MainBanner.module.scss'
import { useState } from 'react'

const MainBanner = ({ data }: { data: PostOrPage[] }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)

  try {
    if (
      !CheckPost(
        data[activeSlideIndex].tags![0].name,
        data[activeSlideIndex].feature_image,
      )
    ) {
      data?.splice(activeSlideIndex, 1)
    }
  } catch {
    data?.splice(activeSlideIndex, 1)
  }

  data?.splice(3, data.length - 3)
  const {
    detailUrl,
    category,
    frontImg,
    author,
    readTime,
    date,
    title,
  } = formatGhostDataForArticlePost(data[activeSlideIndex])

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

  const _sliderBtns = () => (
    <>
      <button
        onClick={() => changeSlide({ isNext: false })}
        className="slide-arrow prev-arrow slick-arrow"
      >
        <LeftArrowSvg />
      </button>
      <button
        onClick={() => changeSlide({ isNext: true })}
        className="slide-arrow next-arrow slick-arrow"
      >
        <RightArrowSvg />
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
