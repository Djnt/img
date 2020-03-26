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
    e.style.backgroundColor = this.state.color[1]

    html2canvas(e, {
      onrendered: (canvas) => {
        Canvas2Image.saveAsJPEG(canvas);
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
      </Fragment>
    )
  }
}