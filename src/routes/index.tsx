import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Experience, Hero, Works } from "../components";
import InterviewPreparation from "../components/Interview/InterviewPreparation";
import CategoryPage from "../components/Interview/CategoryPage";
import Layout from "../../src/layout/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <>
                <Hero />
                <About />
                <Experience />
                <Works />
              </>
            }
          />
          <Route path="interview-preparation">
            <Route index element={<InterviewPreparation />} />
            <Route path=":categoryId" element={<CategoryPage />} />
          </Route>
          {/* Add catch-all route */}
          <Route path="*" element={<p>Not Found</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
