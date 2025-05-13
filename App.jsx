import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MusicPlaylist from "./pages/home";


  const router = createBrowserRouter([
    {
      path: "/",
      element: < MusicPlaylist/>

    },
    
  ])

  const App = () => {
  
  
    return (
      
      <RouterProvider router={router}></RouterProvider>
    )
  }
  
  export default App