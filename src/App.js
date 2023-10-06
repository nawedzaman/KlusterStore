import React from "react";
import "./index.css"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePage from "./components/HomePage";
import BooksPage from "./components/BooksPage";
import AuthorsPage from "./components/AuthorsPage";
import BookDetailsPage from "./components/BookDetailsPage";
import ShoppingCart from "./components/ShoppingCart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BookProvider } from "./components/BookContext";
import { Provider } from 'react-redux';
import store from './components/store';


const AppLayout = () => {
  return (
    <Provider store={store}>
    <BookProvider>
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
    </BookProvider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    //errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/books",
        element: <BooksPage />,
      },
      {
        path: "/authors",
        element: <AuthorsPage />,
      },
      {
        path: "/cart",
        element: <ShoppingCart />,
      },
      {
        path: "/book/:bookId",
        element: <BookDetailsPage />,
      },
    ],
  },
]);

export default function App(props) {
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}
