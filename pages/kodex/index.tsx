import styles from './kodex.module.scss'

const kodex = () => {

return (
    <div className="container" style={{ marginBottom: '50px' }}>
        <h2 className={styles.heading}>Bankless etický kodex</h2>
        <p className={styles.paragraph}>1) Zveřejňujeme pouze ověřené informace a dbáme na důsledné ověřování zdrojů, které vždy uvedeme na konci článku. Neuvádíme nepodložená fakta a domněnky.</p>
        <p className={styles.paragraph}>2) Vyhrazujeme si právo v textech publikovat osobní názory, které ovšem nesmí být předkládány jako fakta.</p>
        <p className={styles.paragraph}>3) Informace sepsané v našich textech publikujeme s jedinou motivací: pravdivě informovat veřejnost o věcech, které považujeme za důležité, a které by ji podle našeho přesvědčení měly zajímat.</p>
        <p className={styles.paragraph}>4) Reklama či sponzorovaný obsah bude vždy srozumitelně oddělen od obsahu ostatního.</p>
        <p className={styles.paragraph}>5) Dáváme prostor k publikování na našem webu komukoliv, kdo má potřebnou úroveň znalostí v dané problematice (i pokud zastáváme jinou ideologii, než on).</p>
        <p className={styles.paragraph}>6) Nestavíme se na žádnou politickou stranu.</p>
        <p className={styles.paragraph}>7) Nebudeme zveřejňovat žádný etnicky ani rasově zabarvený obsah.</p>
        <p className={styles.paragraph}>8) Nejsme neomylní. Pokud uděláme chybu, přiznáme ji, omluvíme se a opravíme ji.</p>
        <p className={styles.paragraph}>9) Členové redakce dbají při svém vystupování na veřejnosti a sociálních sítích na uměřenost a přihlížejí ke skutečnosti, že jsou vnímáni zároveň jako zástupci Bankless.</p>
    </div>
  )
}

export default kodex