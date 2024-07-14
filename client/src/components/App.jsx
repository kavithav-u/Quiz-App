import {Provider} from 'react-redux'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './Home';
import Result from './Result';
import Questions from './Questions';
import store from '../store';
import '../styles/App.css'

/** routes */
const router = createBrowserRouter ([
  {
    path :'/',
    element: <Home />
  },
  {
    path :'/quiz',
    element: <Questions />
  },
  {
    path :'/result',
    element: <Result />
  },
])

function App() {

  return (
    <Provider store={store}>
      <RouterProvider router={router} />  
    </Provider>
  )
}

export default App
