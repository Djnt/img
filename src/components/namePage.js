import React, { useState } from 'react';

export const NamePage = props => {
  const [name, setName] = useState(null);

  const confirmName = () => {
    if(!name || !(/^(?=.*[a-zA-Z0-9]).{1,}$/.test(name))) return;

    props.next(name)
  }

  return (
    <div className='col-12 col-md-2 offset-md-5 name-page'>
      <input type='text' placeholder='Enter Yout Business Name' onChange={ e => setName(e.target.value)}></input>
      <button className={name ? '' : 'disabled'} onClick={ confirmName }>NEXT</button>
      <div className='foot'>
        <h3>"Dream Big. Start Small...</h3>
        <h4>- Simon Sinek</h4>
      </div>
    </div>
  )
}

export default NamePage;
