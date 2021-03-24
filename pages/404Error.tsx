import { PostOrPage } from '@tryghost/content-api'
import { useMenuData } from 'context/SessionContext'
import { GetServerSideProps } from 'next'
import { fetchMenuPosts } from 'utils/fetchMenuPosts'
import style from './404.module.scss'

export const getServerSideProps: GetServerSideProps = async () => {
  const menuPosts = await fetchMenuPosts()

  if (!menuPosts) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      menuPosts,
    }, // will be passed to the page component as props
  }
}

export default function Custom404({ menuPosts }: { menuPosts?: PostOrPage[] }) {
  useMenuData({ menuPosts })

  return (
    <>
      <div className={`${style.notFound} container`}>
        <h1>404 - Stránka nenalezena</h1>
      </div>
    </>
  )
}
