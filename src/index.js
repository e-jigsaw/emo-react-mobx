import 'babel-polyfill'
import 'es6-promise'
import {createElement} from 'react'
import {render} from 'react-dom'
import App from './component/App.js'
import EmoStore from './stores/Emo.js'

const emoStore = new EmoStore()

render(createElement(App, {emoStore}), document.getElementById('app'))
