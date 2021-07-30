import "./App.css";
import Box from "./Components/Box";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5">
        <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800 font-light">
          <div className="w-full max-w-6xl mx-auto pb-5">
            <Box />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
