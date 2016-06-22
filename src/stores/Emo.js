import {observable, computed} from 'mobx'

export default class EmoStore {
  @observable emojis = []
  @observable searchWord = ''
  @observable currentEmoji = null

  @computed get filteredEmojis () {
    const r = new RegExp(
      this.searchWord.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
    )
    return this.emojis.filter(emoji => emoji.forSearch.search(r) !== -1)
  }

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

  setSearchWord (value) {
    this.searchWord = value
  }

  setCurrentEmoji (emoji) {
    this.currentEmoji = emoji
  }
}
