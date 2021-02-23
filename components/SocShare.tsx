import { MouseEvent, useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './SocShare.module.scss'
import useCopyToClipboard from './helpers/useCopyToClipboard'

export default function SocShare({
  urlToShare,
  isRoundedIcons = false,
}: {
  urlToShare: string
  isRoundedIcons?: boolean
}) {
  const defaultText = 'Cryptohash | Ethereum, Bitcoin a jiné krypto'

  const baseUrl = 'https://cryptohash.vercel.app'
  const urlForClipboard = `${baseUrl}${urlToShare}`

  const { copyLink, isCopiedTooltip } = useCopyToClipboard()

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
        <a
          href="#"
          onClick={(event) => copyLink({ event, textToCopy: urlForClipboard })}
        >
          {isCopiedTooltip()}
          <FontAwesomeIcon icon="link" />
        </a>
      </li>
    </ul>
  )
}
