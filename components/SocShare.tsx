import { MouseEvent, useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './SocShare.module.scss'

export default function SocShare({
  urlToShare,
  isRoundedIcons = false,
}: {
  urlToShare: string
  isRoundedIcons?: boolean
}) {
  const defaultText = 'Cryptohash | Ethereum, Bitcoin a jiné krypto'

  const baseUrl = 'https://cryptohash.vercel.app/'
  const [isCopied, setIsCopied] = useState(false)

  const copyLink = (
    event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
  ) => {
    event.preventDefault()
    setIsCopied(true)
    navigator.clipboard.writeText(`${baseUrl}${urlToShare}`)
  }

  useEffect(() => {
    if (isCopied) {
      setTimeout(function () {
        setIsCopied(false)
      }, 3000)
    }
  }, [isCopied])

  return (
    <ul
      className={`${
        isRoundedIcons
          ? 'social-icon icon-rounded-transparent md-size'
          : 'social-share-transparent'
      } justify-content-end`}
    >
      <li>
        <a
          href={`https://www.facebook.com/sharer.php?u=${baseUrl}${urlToShare}`}
          target="_blank"
        >
          <FontAwesomeIcon icon={['fab', 'facebook-f']} />
        </a>
      </li>
      <li>
        <a
          href={`https://twitter.com/share?url=${baseUrl}${urlToShare}&text=${encodeURI(
            defaultText,
          )}`}
          data-related="@gweicz"
          target="_blank"
          data-show-count="false"
        >
          <FontAwesomeIcon icon={['fab', 'twitter']} />
        </a>
      </li>
      <li className={styles.copyLink}>
        <a href="#" onClick={copyLink}>
          {isCopied && <div className={styles.copied}>Zkopírováno</div>}
          <FontAwesomeIcon icon="link" />
        </a>
      </li>
    </ul>
  )
}
