import { ToastContainer } from 'react-toastify'
import useRouteElements from './hooks/useRouteElements'
import 'react-toastify/dist/ReactToastify.css'
import { useIsFetching, useIsMutating } from '@tanstack/react-query'
import Loading from './components/Loading'

function App() {
  const routeElements = useRouteElements()
  const isFetching = useIsFetching()
  const isMutation = useIsMutating()

  return (
    <div id='wrapper'>
      {isFetching + isMutation !== 0 && <Loading />}
      {routeElements}
      <ToastContainer position='bottom-right' />
    </div>
  )
}

export default App
