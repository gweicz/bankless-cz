import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'https://rostislavkremecek.ghost.io',
  key: '659c900012f5377f448ea2c14a',
  version: "v3"
});

export const getPosts = async () => {
  return await api.posts
    .browse({
      limit: "all"
    })
    .catch(err => {
      console.error(err);
    });
};