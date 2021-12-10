import { ErrorBoundary } from 'components'
import Menu from 'components/Menu'
import { Footer, Main } from './styles'

import { Route, BrowserRouter, Routes } from 'react-router-dom'

import store from './store'
import { Provider } from 'react-redux'
import { FunctionComponent, lazy, Suspense } from 'react'
import Loading from 'components/Loading'

const IndexPage = lazy(async () =>
  await import('../pages').then((module) => module))
const UsersPage = lazy(async () =>
  await import('../pages/users').then((module) => module)
)
const UserPage = lazy(async () =>
  await import('../pages/user').then((module) => module)
)

const App: FunctionComponent = () => (
  <Provider store={store}>
    <BrowserRouter>
      <header>
        <Menu />
      </header>
      <Main>
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path='/' element={<IndexPage />} />
              <Route path='/users' element={<UsersPage />} />
              <Route path='/user/:id' element={<UserPage />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </Main>
      <Footer>
        <p>
          Loading icon from{' '}
          <a href='https://loading.io' rel='noreferrer noopener'>
            loading.io
          </a>
        </p>
      </Footer>
    </BrowserRouter>
  </Provider>
)

export { App }
