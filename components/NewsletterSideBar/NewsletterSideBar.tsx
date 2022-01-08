import React, { useState } from 'react';
import * as EmailValidator from 'email-validator';

import { registerNewSubscriber } from 'utils/newsletters';

const NewsletterSideBar: React.FC = () => {
  const [inputEmail, setInputEmail] = useState<string>('');

  const [err, setErr] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [subscribeSuccess, setSubscribeSuccess] = useState<string | null>(null);

  const subscribeToNewsletter = () => {
    setLoading(true);
    setSubscribeSuccess(null);
    if (inputEmail && EmailValidator.validate(inputEmail)) {
      setErr('');

      registerNewSubscriber(inputEmail)
        .then(successMessage => {
          setLoading(false);
          setInputEmail('');
          setSubscribeSuccess(successMessage);
        })
        .catch(errorMessage => {
          setLoading(false);
          setErr(errorMessage);
        });
    } else {
      setLoading(false);
      setErr('Neplatná emailová adresa.');
    }
  }


  return (
    <>
      <p className="newsletter-description">
        Chcete dostávat každý týden novinky z krypto světa do svého emailu?
        <br /><br />
        Přihlašte se k našemu newsletteru!
      </p>
      <div className="newsletter-input-wrapper">
        <input
          type="email"
          value={inputEmail}
          onChange={e => setInputEmail(e.target.value)}
          placeholder="Email"
          className="newsletter-input"
        />
        <a
          onClick={() => !loading ? subscribeToNewsletter() : null}
          className="axil-button axil-button-small button-rounded hover-flip-item-wrapper"
          style={loading ? { textAlign: 'center', cursor: 'wait' } : {}}
        >
          {loading
            ? <span>...</span>
            : (
              <span className="hover-flip-item">
                <span data-text="Odebírat">Odebírat</span>
              </span>
            )
          }
        </a>
      </div>
      {err && <p className="newsletter-subscribe-error">{err}</p>}
      {subscribeSuccess && <p className="newsletter-subscribe-success">{subscribeSuccess}</p>}
    </>
  );
};

export default NewsletterSideBar;