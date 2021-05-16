import React, { useContext, useEffect, useMemo, useState } from 'react'

import { PostOrPage } from '@tryghost/content-api'

interface IContext {
  apiPostsData: any
  setApiPostsData: React.Dispatch<React.SetStateAction<any>>
  searchSlugs: any
  setSearchSlugs: React.Dispatch<React.SetStateAction<any>>
}

const defaultValues = {
  apiPostsData: null,
  setApiPostsData: () => {},
  searchSlugs: null,
  setSearchSlugs: () => {},
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
  const [searchSlugs, setSearchSlugs] = useState([])

  const values = {
    apiPostsData,
    setApiPostsData,
    searchSlugs,
    setSearchSlugs
  }

  return (
    <SessionContext.Provider value={values}>{children}</SessionContext.Provider>
  )
}
