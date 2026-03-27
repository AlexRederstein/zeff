import { Context } from './context/userContext'
import ReactDOM from 'react-dom/client'
import App from './App'
import Store from './store/store'


const store = new Store()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <Context.Provider value={store}>
      <App />
    </Context.Provider>
)