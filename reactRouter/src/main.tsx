import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Layout } from './components/Layout'
import About from './components/About/About'
import Home from './components/Home/Home'
import ContactUs from './components/ContactUs/ContactUs'
import User from './components/User/User'
import Github, {githubInfoLoader} from './components/Github/Github'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home/>,
//       }, 
//       {
//         path: 'about',
//         element: <About/>,
//       },
//       {
//         path: 'contact-us',
//         element: <ContactUs/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact-us' element={<ContactUs />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader = {githubInfoLoader}
      path='github' 
      element={<Github />} />
    </Route>    
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
