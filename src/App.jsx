import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './Layouts/MainLayouts'
import JobsPage from './pages/JobsPage'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={ <MainLayout />}>
            <Route index element={ <HomePage />} />
            <Route path='/jobs' element={ <JobsPage />} />

        </Route>


    )
)

function App() {
    return <RouterProvider router={router} />
}

export default App
