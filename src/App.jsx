import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './Layouts/MainLayouts'

// import Navbar from './components/Navbar'

// import HomeCards from './components/HomeCards'
// import JobListings from './components/JobListings'
// import ViewAllJobs from './components/ViewAllJobs'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={ <MainLayout />}>
              <Route index element={ <HomePage />} />

        </Route>


    )
)

function App() {
    return <RouterProvider router={router} />
}

export default App
