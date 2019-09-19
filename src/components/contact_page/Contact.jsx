import React from 'react';
import Title from '../common/title/Title';

import './contact.scss';

const Contact = () => (
  <section className='contact'>
    <Title title='contact' subtitle='us' />
    <div className='center'>
      <form noValidate className='form'>
        <div>
          <input type='text' name='name' value='' id='name' className='form-control' placeholder='Jhon smith' />
        </div>
        <div>
          <input type='email' name='email' value='' id='email' className='form-control' placeholder='Jhon smith@email.com' />
        </div>
        <div>
          <textarea name='message' id='message' rows='10' className='form-control' placeholder='hello there'/>
        </div>
        <div>
          <input type='submit' value='submit' className='submit' />
        </div>
      </form>
    </div>
  </section>
);

export default Contact;