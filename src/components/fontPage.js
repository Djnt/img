import React, { Component, Fragment } from 'react';

const generateItem = args => {
  let result;
  let name = args.name.split(' ')
  const first_word = name.shift()
  let last_word = null
  if(name.length > 0) {
    last_word = name.join('')
    last_word = last_word[0].toUpperCase() + last_word.slice(1)
  }

  switch(args.index) {
    case 0:
      result = <div style={{ textTransform: 'capitalize', textAlign: 'center', fontWeight: 500}}>{args.name}</div>
    break;
    case 1:
      result = <div style={{ textTransform: 'lowercase', textAlign: 'center', fontWeight: 500}}>{args.name.replace(' ', '')}</div>
    break;
    case 2:
      result = <div style={{ textTransform: 'uppercase', textAlign: 'center', fontWeight: 500}}>{args.name}</div>
    break;
    case 3:
      result = <div>
        <span style={{ textTransform: 'capitalize', textAlign: 'center', fontWeight: 600}}>{first_word}</span>
        {name.length > 0 && <span style={{ textTransform: 'capitalize', textAlign: 'center', fontWeight: 500}}>{last_word}</span>}
      </div>
    break;
    case 4:
      result = <div>
        <span style={{ textTransform: 'capitalize', textAlign: 'center', fontWeight: 500}}>{first_word}</span>
        {last_word && <span style={{ textTransform: 'capitalize', textAlign: 'center', fontWeight: 600}}>{last_word}</span>}
      </div>
    break;
    case 5:
      result = <div>
        <div style={{ textTransform: 'uppercase', textAlign: 'center', fontWeight: 600}}>{first_word}</div>
        {last_word && <div style={{ textTransform: 'uppercase', textAlign: 'center', fontWeight: 600}}>{last_word}</div>}
      </div>
    break;
  }

  return result
}

export const FontPage = props =>  {
  return (
    <div className='col-12 col-md-4 offset-md-4 font-page'>
      <h2>Let's figure out your style next</h2>
      <h3>Choose a style that suits your logo</h3>

      <div className='fonts-block'>
        {new Array(6).fill().map((i, index) => {
          return (
            <div className='font-option' onClick={e => props.next(e)}>
              {generateItem({index, name: props.name})}
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default FontPage;
