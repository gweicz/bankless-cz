import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './SwitchThemeBtn.module.scss'
import { useSessionContext } from 'context/SessionContext'

type Props = {
  isHideOnMobile?: boolean
}

export default function SwitchThemeBtn({ isHideOnMobile = false }: Props) {
  const { isDarkMode, setIsDarkMode } = useSessionContext()

  if (isDarkMode === null) return null

  return (
    <div
      onClick={() => setIsDarkMode(!isDarkMode)}
      className={` ${style.switchThemeBtn} ${
        isHideOnMobile ? style.hideOn1200 : style.switchThemeBtnDesktop
      } ${isDarkMode ? style.darkThemeBtn : style.lightThemeBtn}`}
    >
      <div className={style.switchThemeBtnInner} />
      <FontAwesomeIcon
        icon="sun"
        className={!isDarkMode ? style.lightActive : ''}
      />
      <FontAwesomeIcon
        icon="moon"
        className={isDarkMode ? style.darkActive : ''}
      />
    </div>
  )
}
