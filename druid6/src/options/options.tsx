import React from "react"
import ReactDOM from 'react-dom'

const test = <img src="icon.png" alt="icon-img" />

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(test, root)