import { Route, Routes } from "react-router";
import ResgisterPage from "../pages/RegisterPage/RegisterPage";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ResgisterPage />} />
    </Routes>
  );
};

export default AppRouter;
