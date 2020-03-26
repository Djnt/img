import React, { useState } from 'react';

const gamma = [
  ['linear-gradient(to right, #101158 25%, #1F4080 25%, #1F4080 50%, #4080E5 50%, #4080E5 75%, #51BCFF 75%)', 'blue'],
  ['linear-gradient(to right, #480257 25%, #6B027F 25%, #6B027F 50%, #9221D8 50%, #9221D8 75%, #A903FF 75%)', 'purple'],
  ['linear-gradient(to right, #14571B 25%, #21802C 25%, #21802C 50%, #44E65B 50%, #44E65B 75%, #4BFE55 75%)', 'green'],
  ['linear-gradient(to right, #1B5857 25%, #298070 25%, #298070 50%, #50E7C4 50%, #50E7C4 75%, #59FFD5 75%)', 'teal'],
  ['linear-gradient(to right, #570224 25%, #800635 25%, #800635 50%, #E516E6 50%, #E516E6 75%, #F700FF 75%)', 'pink'],
  ['linear-gradient(to right, #594C00 25%, #807903 25%, #807903 50%, #F2E606 50%, #F2E606 75%, #F9FF06 75%)', 'yellow'],
  ['linear-gradient(to right, #571600 25%, #803400 25%, #803400 50%, #E68216 50%, #E68216 75%, #F37E03 75%)', 'orange'],
  ['linear-gradient(to right, #404040 25%, #808080 25%, #808080 50%, #BFBFBF 50%, #BFBFBF 75%, #E6E6E6 75%)', 'grayscale']
]

export const ColorPage = props =>  {

  const [color, setColor] = useState(null);

  return (
    <div className='col-12 col-md-4 offset-md-4 color-page'>
      <h3>Let's sort out the colour next</h3>
      <h4>Choose a colour for your logo</h4>
      <div className='colors'>
        {gamma.map(col => {
          return (
            <div className={`color-block ${color && color[1] === col[1] ? 'selected' : ''}`} style={{background: col[0]}} key={col[1]} onClick={() => setColor(col)}></div>
          )
        })}
      </div>
      {color && <button onClick={ () => props.next(color) }>NEXT</button>}
    </div>
  )
}

export default ColorPage;
