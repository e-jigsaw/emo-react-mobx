import {observable, toJS} from 'mobx'

export default class EmoStore {
  @observable emojis = []

  setEmojis (emojis) {
    this.emojis = emojis.map((emoji) => {
      return {
        ...emoji,
        forSearch: [emoji.name].concat(emoji.keywords).join(','),
        unicode: emoji.keywords[emoji.keywords.length - 1],
        keywords: emoji.keywords.slice(0, -1)
      }
    })
  }
}
