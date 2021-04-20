import Head from "next/head";

interface MetaTagsProps {
  meta_title: string | null | undefined,
  meta_description: string | null | undefined,
  og_title: string | null | undefined,
  og_image: string | null | undefined,
  og_description: string | null | undefined,
  twitter_title: string | null | undefined,
  twitter_image: string | null | undefined
  twitter_description: string | null | undefined,
}

const MetaTags: React.FC<MetaTagsProps> = ({
  meta_title,
  meta_description,
  og_title,
  og_image,
  og_description,
  twitter_title,
  twitter_image,
  twitter_description
  }) => {

  return (
    <>
      <meta name="title" content={meta_title || ''} />
      <meta name="description" content={meta_description || ''} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://bankless.cz/" />
      <meta property="og:title" content={og_title || ''} />
      <meta property="og:image" content={og_image || ''} />
      <meta property="og:description" content={og_description || ''} />

      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://bankless.cz/"/>
      <meta property="twitter:title" content={twitter_title || ''} />
      <meta property="twitter:image" content={twitter_image || ''} />
      <meta property="twitter:description" content={twitter_description || ''} />
    </>
  )
}

export default MetaTags