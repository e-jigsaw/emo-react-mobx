import React, {Component, PropTypes} from 'react'
import {observer} from 'mobx-react'

@observer export default class Emojis extends Component {
  static contextTypes = {
    emoStore: PropTypes.object
  }

  onClick (emoji) {
    return (event) => {
      console.log(emoji)
    }
  }

  render () {
    const normalizeName = (name) => {
      return name.replace(/\+/, '')
    }
    const generateEmojis = this.context.emoStore.emojis.map((emoji, i) => {
      return pug`
        span(
          key='{i}',
          className="{'emo emo-margin emoji s_' + normalizeName(emoji.name)}",
          onClick='{this.onClick.bind(this)(emoji)}'
        )
      `
    })

    return pug`
      .emojis {generateEmojis}
    `
  }
}
