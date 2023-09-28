import './App.css';
import Header from './component/header';
import Greet from './component/greet';
import Dashboard from './component/dashboard';
import Footer from './component/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Greet />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
