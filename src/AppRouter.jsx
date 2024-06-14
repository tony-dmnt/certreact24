import { createHashRouter, RouterProvider } from "react-router-dom";
import QuizMakerPage from './pages/QuizMakerPage';
import ResultsPage from './pages/ResultsPage';

const router = createHashRouter([
  {
    path: "/",
    element: <QuizMakerPage />,
  },
  {
    path: "/results",
    element: <ResultsPage />,
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;