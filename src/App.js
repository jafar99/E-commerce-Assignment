import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Component/Layout";

const Dashboard = React.lazy(() =>
  import("./Component/Pages/Dashboard/Dashboard")
);
const Mobile = React.lazy(() => import("./Component/Pages/Mobile/Mobile"));
const Earphones = React.lazy(() =>
  import("./Component/Pages/Earphones/Earphones")
);
const Tshirt = React.lazy(() => import("./Component/Pages/tshirt/Tshirt"));
const Jeans = React.lazy(() => import("./Component/Pages/Jeans/Jeans"));
const Shirt = React.lazy(() => import("./Component/Pages/shirt/Shirt"));
const Mac = React.lazy(() => import("./Component/Pages/Mac/Mac"));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="electronics"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Mobile />
              </Suspense>
            }
          />
          <Route
            path="electronics/mobile"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Mobile />
              </Suspense>
            }
          />
          <Route
            path="electronics/earphones"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Earphones />
              </Suspense>
            }
          />
          <Route
            path="electronics/mac"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Mac />
              </Suspense>
            }
          />
          <Route
            path="clothing"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Tshirt />
              </Suspense>
            }
          />
          <Route
            path="clothing/tshirt"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Tshirt />
              </Suspense>
            }
          />
          <Route
            path="clothing/shirt"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Shirt />
              </Suspense>
            }
          />
          <Route
            path="clothing/jeans"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Jeans />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
