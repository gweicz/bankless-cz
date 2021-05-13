import React, { useContext, useEffect, useMemo, useState } from 'react'

import { PostOrPage } from '@tryghost/content-api'

interface IContext {
  apiPostsData: any
  setApiPostsData: React.Dispatch<React.SetStateAction<any>>
  isDarkMode: boolean
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
  switchTheme: () => void
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
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches &&
      !isDarkMode
    ) {
      switchTheme()
    }
  }, [])

  const switchTheme = () => {
    window?.document.body.classList.toggle('active-dark-mode')
    if (window?.document.body.classList.contains('active-dark-mode')) {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  }

  const values = {
    apiPostsData,
    setApiPostsData,
    isDarkMode,
    setIsDarkMode,
    switchTheme,
  }

  return (
    <SessionContext.Provider value={values}>{children}</SessionContext.Provider>
  )
}
