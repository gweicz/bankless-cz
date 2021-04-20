import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocInvite = () => {
  return (
    <ul className="social-icon md-size justify-content-center">
      <li>
        <a href="https://twitter.com/banklesscz" target="_blank">
          <FontAwesomeIcon icon={['fab', 'twitter']} />
        </a>
      </li>
      <li>
        <a href="https://discord.com/invite/3SrAtJ2gd3" target="_blank">
          <FontAwesomeIcon icon={['fab', 'discord']} />
        </a>
      </li>
      <li>
        <a href="https://t.me/banklesscz" target="_blank">
          <FontAwesomeIcon icon={['fab', 'telegram']} />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/banklesscz" target="_blank">
          <FontAwesomeIcon icon={['fab', 'facebook']} />
        </a>
      </li>
    </ul>
  )
}

export default SocInvite
