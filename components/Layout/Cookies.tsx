import Link from 'next/link'
import style from './Cookies.module.scss'
import useCookie from 'react-use-cookie'
import { useSessionContext } from 'context/SessionContext'

export default function Cookies(props: any) {
  const [cookie, setCookie] = useCookie('IsEnabled', 'false')
  const { isDarkMode } = useSessionContext()

  if (cookie == 'true') {
    return <div />
  }

  const onAgreeClick = () => {
    props.setIsCookiesEnabled(true)
    setCookie('true')
  }

  return (
    <div
      className={`fixed-bottom d-flex align-items-center ${
        isDarkMode ? style.cookiesWrapperDark : style.cookiesWrapper
      }`}
    >
      <p className={isDarkMode ? style.textContainerDark : style.textContainer}>
        Používáním těchto stránek vyjadřujete souhlas s&nbsp;
        <Link href="/podminky">
          <a
            className={`${
              isDarkMode ? style.linkTextDark : style.linkText
            } cookies-link`}
          >
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
