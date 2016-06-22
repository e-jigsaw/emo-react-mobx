import React, {Component, PropTypes} from 'react'
import {observer} from 'mobx-react'

@observer export default class Current extends Component {
  static contextTypes = {
    stores: PropTypes.object
  }

  onClick () {
    this.refs.currentInput.select()
  }

  keywordOnClick (keyword) {
    return (event) => {
      console.log(keyword)
    }
  }

  generateKeywordElements () {
    const {emoStore} = this.context.stores
    return emoStore.currentEmoji.keywords.map((keyword, i) => {
      return pug`
        span.tag.tag-green(
          key="{'current-tag-' + keyword + '-' + i}",
          onClick='{this.keywordOnClick.bind(this)(keyword)}'
        ) {keyword}
      `
    })
  }

  render () {
    const {emoStore} = this.context.stores
    if (emoStore.currentEmoji !== null) {
      return pug`
        #info.emojis
          p.current-container(onClick='{this.onClick.bind(this)}')
            span(className="{'emo emoji v-align s_' + emoStore.currentEmoji.name}")
            input#currentInput.v-align(
              value="{':' + emoStore.currentEmoji.name + ':'}",
              readOnly='{true}',
              ref='currentInput'
            )
          p
            span.tag.tag-blue {emoStore.currentEmoji.unicode}
            | {this.generateKeywordElements()}
            a(href='//github.com/jgsme/emo/edit/master/src/data/emojis.custom.ja.json')
              span.tag.tag-red Add new one?
      `
    } else {
      return pug`span`
    }
  }
}
