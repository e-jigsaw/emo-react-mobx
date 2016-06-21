import React, {Component, PropTypes} from 'react'
import {toJS} from 'mobx'
import {observer} from 'mobx-react'
import Emojis from './Emojis.js'

@observer export default class App extends Component {
  static childContextTypes = {
    emoStore: PropTypes.object
  }

  getChildContext () {
    return {
      emoStore: this.props.emoStore
    }
  }

  async componentDidMount () {
    const res = await fetch('//cdn.rawgit.com/jgsme/emo/gh-pages/data/emojis.json')
    const json = await res.json()
    this.props.emoStore.setEmojis(json)
  }

  render () {
    return pug`
      div
        Emojis
    `
  }
}
