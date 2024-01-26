import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import VideoShowcase from "./components/VideoShowcase/VideoShowcase";
import { Router } from "express";
import VideoPlaying from "./components/VideoStreamPage/VideoPlaying";
import MainBody from "./components/MainBody";

function App() {
  const routerPath = createBrowserRouter([
    {
      path: '/',
      element: <MainBody />,
      children: [
        {
          path: '/',
          element: <VideoShowcase />,
        },
        {
          path: '/watch',
          element: <VideoPlaying />,
        },
      ],
    },
  ]);

  return (
    <div className="relative">
      <Header />
      <RouterProvider router={routerPath} />
    </div>
  );
}

export default App;
