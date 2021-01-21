import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {useEffect, useState} from 'react';

const BackToTop = () => {

  const [visible, setVisible] = useState(false);

  const handleShowBackToTop = () => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setVisible(true);
        console.log('visible');
      } else {
        setVisible(false);
        console.log('not visible');
      }
    })
  };

  const onBackToTopClick = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  useEffect(() => {
    handleShowBackToTop();
  });

  return (
    <div id="backto-top" className={visible ? 'show' : ''} onClick={onBackToTopClick}>
      <FontAwesomeIcon icon="angle-up" />
    </div>
  );
};

export default BackToTop;