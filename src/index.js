import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

// React mount in root id element
ReactDOM.render(<App />, document.getElementById('root'))

// Hot Module Reload
if (import.meta.hot) {
    import.meta.hot.accept()
}
