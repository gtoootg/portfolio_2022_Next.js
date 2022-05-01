import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import styles from './ContactForm.module.scss'
import { useTranslation } from 'react-i18next';

function ContactForm() {
  const [state, handleSubmit] = useForm("xbjqkbdn");
  const {t} = useTranslation()
  if (state.succeeded) {
      return <p>{t<string>('footer.success')}</p>;
  }
  return (
      <form 
        onSubmit={handleSubmit}
        className={styles.contactForm}>
        <h1>
        {t<string>('footer.contact')}
        </h1>
        <br/>
        <label htmlFor="email">
          <h4>  {t<string>('footer.emailAddress')}</h4>
        </label>
        <input
          id="email"
          type="email" 
          name="email"
        />
        <label htmlFor="message">
          <h4>  {t<string>('footer.message')}</h4>
        </label>
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
          
            <textarea
              id="message"
              name="message"
            />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <div className={styles.contactForm__buttonContainer}>
          <button type="submit" className="btn btn-primary" disabled={state.submitting}>
            {t<string>('footer.submit')}
          </button>
        </div>
    </form>
    
  );
}

export default ContactForm;
