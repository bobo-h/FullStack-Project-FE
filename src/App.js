import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ChatbotCreation from "./pages/ChatbotPage/ChatbotPage";
import AppRouter from "./routes/AppRouter";
function App() {
  return (
    <div>
      {/* <ChatbotCreation /> */}
      <AppRouter />
    </div>
  );
}

export default App;
