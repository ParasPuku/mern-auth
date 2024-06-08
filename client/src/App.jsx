import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import ParamsWrapper from "./components/ParamsWrapper";
import { useSelector } from "react-redux";

const App = () => {
  const params = useSelector(({ params: { urlParams } }) => urlParams);
  console.log("PARAMSSSS", params);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about/:slug"
          element={
            <ParamsWrapper>
              <About />
            </ParamsWrapper>
          }
        />
        <Route
          path="/sign-in/:slug"
          element={
            <ParamsWrapper>
              <SignIn />
            </ParamsWrapper>
          }
        />
        <Route
          path="/sign-up/:slug"
          element={
            <ParamsWrapper>
              <SignUp />
            </ParamsWrapper>
          }
        />
        <Route
          path="/profile/:slug"
          element={
            <ParamsWrapper>
              <Profile />
            </ParamsWrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
