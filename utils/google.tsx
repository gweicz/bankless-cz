export default function google(isCoockiesEnabled: boolean) {
  if (isCoockiesEnabled) {
    return (
      <>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_KEY}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_KEY}', {
                  page_path: window.location.pathname,
                });
              `,
          }}
        />
      </>
    )
  } else {
    return null
  }
}
