module.exports = {
    async redirects() {
      return [
        {
          source: '/eip1559',
          destination: '/studium/eip1559',
          permanent: true,
        },
      ]
    },
  }