import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

import Header from './components/Header'

const router = createBrowserRouter([

  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about-us",
    element: <About/>
  },
  {
    path: "/contact-us",
    element: <Contact/>
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// function App() {

//   return (
//     <div className="w-full h-full absolute bg-whitesmoke-500">
//     <Header />
//     <BrowserRouter>
//       <Routes>
//         <Route index element ={<Home />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element ={<About />} />
//         <Route path="/contact" element ={<Contact />} />
//       </Routes>
    
//     </BrowserRouter>
//     </div>
//   )
// }

// export default App