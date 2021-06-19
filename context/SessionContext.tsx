import React, { useContext, useEffect, useMemo, useState } from 'react'

import { PostOrPage } from '@tryghost/content-api'

interface IContext {
  apiPostsData: any
  setApiPostsData: React.Dispatch<React.SetStateAction<any>>
  searchSlug: any
  setSearchSlug: React.Dispatch<React.SetStateAction<any>>
}

const defaultValues = {
  apiPostsData: null,
  setApiPostsData: () => {},
  searchSlug: null,
  setSearchSlug: () => {},
}

const SessionContext = React.createContext(defaultValues as IContext)

export function useSessionContext() {
  return useContext(SessionContext)
}

export function useMenuData({ menuPosts, searchPosts }: { menuPosts?: PostOrPage[], searchPosts?: PostOrPage[]}) {
  const { setApiPostsData } = useSessionContext()
  useEffect(() => {
    setApiPostsData({menuPosts, searchPosts})
  }, [menuPosts, searchPosts])
}

export const SessionContextProvider = ({
  children,
}: {
  children: JSX.Element
}) => {
  const [apiPostsData, setApiPostsData] = useState()
  const [searchSlug, setSearchSlug] = useState(null)

  const values = {
    apiPostsData,
    setApiPostsData,
    searchSlug,
    setSearchSlug
  }

  return (
    <SessionContext.Provider value={values}>{children}</SessionContext.Provider>
  )
}
