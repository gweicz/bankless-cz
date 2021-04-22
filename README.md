# Bankless.cz
Novinkový/Vzdělávací web se zaměřením na kryptoměny a decentralizované finance.

## Užitečné odkazy
Projekt je postavený na frameworku Next.js
- Oficiální dokumentace k Next.js: [https://nextjs.org/docs](https://nextjs.org/docs)
- Ghost Content API dokumentace: [https://ghost.org/docs/content-api/](https://ghost.org/docs/content-api/)
- Popis projektu na fóru: [https://forum.gwei.cz/t/novinkovy-web-o-kryptomenach/232](https://forum.gwei.cz/t/novinkovy-web-o-kryptomenach/232)


## Jak začít s vývojem
- Instalace Node.js: https://nodejs.org/en/
- Instalace YARN: [https://classic.yarnpkg.com/en/docs/install](https://classic.yarnpkg.com/en/docs/install)
- Naklonování repozitáře na lokální počítač
- Instalace závislostí: `yarn install`
- Vytvoření `.env.local` souboru (v kořenovém adresáři projektu) se změněnými hodnotami (napsat @rixcian), google analytics stačí přidat do production verze.:
    ```dotenv
    GHOST_URL=<ghost_url>
    GHOST_CONTENT_API_KEY=<ghost_api_content_key>
    GHOST_API_VERSION=<ghost_api_version>
    GOOGLE_KEY=<google_analytics_key>
    ```
- Spuštění development serveru: `yarn dev`
- Development server se spustí na [localhost:3000](http://localhost:3000)

### Přispění do projektu
- Prosím po naklonování na lokální počítač si vytvořte vlastní branch: 
  - např. `git checkout -b <rixcian-homepage-implementation>`
  - Bylo by super kdyby název branche odpovídal vašemu nicku a featury (všechno malými písmeny), na které pracujete, viz. příklad
- Až jste hotovi, tak stačí pushnout branch na GitHub: 
  - např. `git push origin <rixcian-homepage-implementation>`



## Originální šablona
- Zdrojové soubory k referenční šabloně najdete ve složce `original_template`
- Otevřete si `index.html` v prohlížeči a můžete procházet celým webem
- **Odkazy**
  - Odkaz na ThemeForest: [https://themeforest.net/item/blogar-blog-magazine-template/29431702](https://themeforest.net/item/blogar-blog-magazine-template/29431702)


## Nasazení na produkci
- Naklonování repozitáře na produkční server
- Nainstalování závislostí: `yarn install`
- Build docker image: `docker build -t bankless:latest .`
- V root adresáři vytvořit `.env`, se změněnými hodnotami (napsat o ně @rixcian):
  ```dotenv
  GHOST_URL=<ghost_url>
  GHOST_CONTENT_API_KEY=<ghost_api_content_key>
  GHOST_API_VERSION=<ghost_api_version>
    ```
- Vytvoření a spuštění kontejneru: `docker run --detach --restart=always --env-file .env -p 3000:3000 --name bankless_prod bankless:latest`


## Update produkce
- Připojení na produkční server
- Stažení všech nových commitů: `git pull`
- Build nového image: `docker build -t bankless:latest .`
- Zastavení aktuálně běžícího kontejneru: `docker stop bankless_prod`
- Smazání kontejneru: `docker rm bankless_prod`
- Vytvoření a spuštění kontejneru: `docker run --detach --restart=always --env-file .env -p 3000:3000 --name bankless_prod bankless:latest`