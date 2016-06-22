import React, {Component, PropTypes} from 'react'
import {observer} from 'mobx-react'
import {findDOMNode} from 'react-dom'

@observer export default class Finder extends Component {
  static contextTypes = {
    stores: PropTypes.object
  }

  componentDidMount () {
    this.refs.input.focus()
  }

  onChange (event) {
    const {emoStore} = this.context.stores
    emoStore.setSearchWord(event.target.value)
  }

  render () {
    const {emoStore} = this.context.stores
    return pug`
      form.pure-form(onsubmit='{false}')
        input(
          id='in'
          type='text'
          ref='input'
          value='{emoStore.searchWord}'
          onChange='{this.onChange.bind(this)}'
        )
    `
  }
}
