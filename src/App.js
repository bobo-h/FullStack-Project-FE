import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ChatbotCreation from "./pages/ChatbotPage/ChatbotPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import AppRouter from "./routes/AppRouter";

function App() {
  
  return (
    <div className="App">

      {/* <ChatbotCreation /> */}
      {/* <AppRouter /> */}
      <ProductPage />

    </div>
    
  );
}

export default App;
