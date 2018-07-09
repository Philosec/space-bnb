import { Component } from 'react'
import PageHead from './PageHead'
import threeEntryPoint from '../lib/threeJS/index'

class Layout extends Component {
  componentDidMount () {
    threeEntryPoint(this.threeRootElement)
  }

  render () {
    return (
      <div>
        <PageHead title='SpaceBNB' />
        <div ref={(element) => { this.threeRootElement = element }} />
        {this.props.children}
        <style global jsx>{`
          body {
            font-family: 'Montserrat', sans-serif;
          }
          canvas {
            width: 100vw;
            height: 100vh;
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            z-index: -9999;
          }
        `}</style>
      </div>
    )
  }
}

export default Layout
