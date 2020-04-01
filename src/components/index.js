import React, { Component, Fragment } from 'react';

import NamePage from './namePage'
import ColorPage from './colorPage'
import FontPage from './fontPage'

export default class PageContainer extends Component {
  state={
    page: 0
  }

  nextPage = () => {
    this.setState({ page: this.state.page + 1 })
  }

  resetPages = () => {
    this.setState({ page: 0 })
  }

  applyName = name => {
    this.setState({ name, page: 1 })
  }

  applyColor = color => {
    this.setState({color, page: 2})
  }

  generateImage = e => {
    if(e.className !== 'font-option')
      e = e.parentNode
    console.log(e)

    e.style.backgroundColor = this.state.color[1]
    let texts = null;

    if(e.childElementCount === 1) {
      const t = e.firstChild
      texts = [<text textAnchor="middle" x="50%" y="50%" fontFamily="Helvetica Nueue" fontWeight={t.style.fontWeight} fill='white' style={{textTransform: 'uppercase'}}>{t.textContent}</text>]
    } else {
      window.z = e
      const t = e.firstChild
      const l = e.lastChild
      texts = [
        <text textAnchor="middle" x="50%" y="42%" fontFamily="Helvetica Nueue" fontWeight={t.style.fontWeight} fill='white' style={{textTransform: 'uppercase'}}>{t.textContent}</text>,
        <text textAnchor="middle" x="50%" y="58%" fontFamily="Helvetica Nueue" fontWeight={l.style.fontWeight} fill='white' style={{textTransform: 'uppercase'}}>{l.textContent}</text>
      ]
    }

    let svg = 
    <svg width='300' height={e.clientHeight} xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0"
        width="100%" height="100%"
        rx="15" ry="15"
        fill={this.state.color[1]}
      />
      {texts}
    </svg>

    this.setState({ svg })

    html2canvas(e, {
      onrendered: (canvas) => {
        const svgText = document.getElementById('svg-result').innerHTML
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(svgText));
        element.setAttribute('download', 'logo.svg');
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();

        let img = Canvas2Image.saveAsJPEG(canvas, true);
        element.setAttribute('href', img.src);
        element.setAttribute('download', 'logo.jpeg');
        element.click();
        document.body.removeChild(element);

        this.resetPages();
      }
    });
  }

  render() {
    const { page } = this.state
    return (
      <Fragment>
        <div className='header'>Founders Design</div>
        <div className='pages'>
          {page === 0 && <NamePage next={this.applyName}/>}
          {page === 1 && <ColorPage next={this.applyColor}/>}
          {page === 2 && <FontPage next={this.generateImage} reset={this.resetPages} name={this.state.name}/>}
        </div>
        <div id='svg-result' style={{position: 'absolute', left: '-1000px'}}>
          {this.state.svg}
        </div>
      </Fragment>
    )
  }
}