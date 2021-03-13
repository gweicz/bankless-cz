import React, { useContext, useEffect, useState } from 'react'

import { PostOrPage } from '@tryghost/content-api'

interface IContext {
  apiPostsData: any
  setApiPostsData: React.Dispatch<React.SetStateAction<any>>
}

const defaultValues = {
  apiPostsData: null,
  setApiPostsData: () => {},
}

const SessionContext = React.createContext(defaultValues as IContext)

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

  const values = {
    apiPostsData,
    setApiPostsData,
  }

  return (
    <SessionContext.Provider value={values}>{children}</SessionContext.Provider>
  )
}
