import React, { useContext, useEffect, useMemo, useState } from 'react'

import { PostOrPage } from '@tryghost/content-api'
import useLocalStorage from 'components/helpers/useLocalStorage'

interface IContext {
  apiPostsData: any
  setApiPostsData: React.Dispatch<React.SetStateAction<any>>
  isDarkMode: boolean
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const SessionContext = React.createContext({} as IContext)

export function useSessionContext() {
  return useContext(SessionContext)
}

export function useMenuData({ menuPosts }: { menuPosts?: PostOrPage[] }) {
  const { setApiPostsData } = useSessionContext()
  useEffect(() => {
    setApiPostsData(menuPosts)
  }, [menuPosts])
}

export const SessionContextProvider = ({
  children,
}: {
  children: JSX.Element
}) => {
  const [apiPostsData, setApiPostsData] = useState()
  const [isDarkMode, setIsDarkMode] = useLocalStorage('theme', null)

  useEffect(() => {
    if (
      (isDarkMode === null &&
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches) ||
      isDarkMode
    ) {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      window?.document.body.classList.add('active-dark-mode')
    } else {
      window?.document.body.classList.remove('active-dark-mode')
    }
  }, [isDarkMode])

  const values = {
    apiPostsData,
    setApiPostsData,
    isDarkMode,
    setIsDarkMode,
  }

  return (
    <SessionContext.Provider value={values}>{children}</SessionContext.Provider>
  )
}
