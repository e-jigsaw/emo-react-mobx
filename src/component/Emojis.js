import React, {Component, PropTypes} from 'react'
import {observer} from 'mobx-react'

@observer export default class Emojis extends Component {
  static contextTypes = {
    stores: PropTypes.object
  }

  onClick (emoji) {
    return (event) => {
      const {emoStore} = this.context.stores
      emoStore.setCurrentEmoji(emoji)
    }
  }

  render () {
    const {emoStore} = this.context.stores
    const normalizeName = (name) => {
      return name.replace(/\+/, '')
    }
    const generateEmojis = emoStore.filteredEmojis.map((emoji, i) => {
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
