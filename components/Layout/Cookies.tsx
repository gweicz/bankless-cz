import Link from 'next/link'
import style from './Cookies.module.scss'
import { useCookies } from 'react-cookie'
import { useSessionContext } from 'context/SessionContext'
import { useState } from 'react'

function CookieSet(State: boolean, setCookie: any) {
  setCookie('IsEnabled', State, { path: '/' })
}

export default function Cookies(props: any) {
  const [cookies, setCookie] = useCookies(['IsEnabled'])
  const [show, setShow] = useState(true)

  if (cookies.IsEnabled) {
    if (!props.IsCoockiesEnabled) {
      props.setIsCoockiesEnabled(true)
    }
    return <div />
  }
  if (!show) {
    if (cookies.IsEnabled) {
      CookieSet(true, setCookie)
    }
    return <div />
  }

  const onAgreeClick = () => {
    setShow(false)
    props.setIsCoockiesEnabled(true)
  }

  return (
    <div
      className={`fixed-bottom d-flex align-items-center ${style.cookiesWrapper}`}
    >
      <p className={style.textContainer}>
        Používáním těchto stránek vyjadřujete souhlas s&nbsp;
        <Link href="/podminky">
          <a className={`${style.linkText} cookies-link`}>
            podmínkami použití webových stránek, ochranou osobních údajů a
            využívaním souborů cookies.
          </a>
        </Link>
      </p>

      <div className="read-more-button cerchio" style={{ width: '140px' }}>
        <button
          className="axil-button button-rounded hover-flip-item-wrapper"
          onClick={onAgreeClick}
          style={{ marginTop: '.5rem' }}
        >
          <span className="hover-flip-item">
            <span data-text="Souhlasím">Souhlasím</span>
          </span>
        </button>
      </div>
    </div>
  )
}
