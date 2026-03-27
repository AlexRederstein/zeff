import { createContext } from 'react'
import Store from '../store/store'

// Пока не понятно для чего эта перемычка нужна, можно же напрямую запихать store пользователя

// interface StoreContext {
//   store: Store
// }

const store = new Store()

export const Context = createContext<Store>(store)