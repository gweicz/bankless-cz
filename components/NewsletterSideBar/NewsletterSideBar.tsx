import React from 'react';

const NewsletterSideBar = () => {
  return (
    <>
      <p className="newsletter-description">
        Chcete dostávat každý týden novinky z krypto světa do svého emailu?
        <br /><br />
        Přihlašte se k našemu newsletteru!
      </p>
      <div className="newsletter-input-wrapper">
        <input className="newsletter-input" type="email" placeholder="Email"/>
        <a
          className="axil-button axil-button-small button-rounded hover-flip-item-wrapper"
        >
          <span className="hover-flip-item">
            <span data-text="Odebírat">Odebírat</span>
          </span>
        </a>
      </div>
      <p className="newsletter-subscribe-error">
        Úspěšně jste se přihlásili k newsletteru.
      </p>
    </>
  );
};

export default NewsletterSideBar;