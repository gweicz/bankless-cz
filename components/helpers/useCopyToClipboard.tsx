import { MouseEvent, useEffect, useState } from 'react'

import styles from './useCopyToClipboard.module.scss'

export default function useCopyToClipboard() {
  const [isCopied, setIsCopied] = useState(false)

  const copyLink = ({
    event,
    textToCopy,
  }: {
    event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>
    textToCopy: string
  }) => {
    event.preventDefault()
    setIsCopied(true)
    navigator.clipboard.writeText(`${textToCopy}`)
  }

  useEffect(() => {
    if (isCopied) {
      setTimeout(function () {
        setIsCopied(false)
      }, 3000)
    }
  }, [isCopied])

  const isCopiedTooltip = () =>
    isCopied && <div className={styles.copied}>Zkopírováno</div>

  return { copyLink, isCopiedTooltip }
}
