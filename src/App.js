//import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ChatbotCreation from "./pages/ChatbotPage/ChatbotPage";
import AppRouter from "./routes/AppRouter";
import AppLayout from "./Layout/AppLayout";

function App() {
  return (
    <div>
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </div>
  );
}

export default App;
