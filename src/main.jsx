import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import logger from 'redux-logger'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import todoReducer from './features/todo'
import App from './App'
import './index.css'


const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    todos: todoReducer
  },
  middleware
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode >,
)
