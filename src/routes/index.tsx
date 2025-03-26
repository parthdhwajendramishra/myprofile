import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Works } from "../components";
import InterviewPreparation from "../components/Interview/InterviewPreparation";
import CategoryPage from "../components/Interview/CategoryPage"; // Import the new component
import Layout from "../../src/layout/Layout"; // Import the layout component

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Use Layout to wrap common components */}
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <div>
                <Hero />
                <About />
                <Experience />
                <Works />
              </div>
            }
          />
          <Route
            path="interview-preparation"
            element={<InterviewPreparation />}
          />
          <Route
            path="interview-preparation/:categoryId"
            element={<CategoryPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
