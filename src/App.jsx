import './App.css';
import Header from './component/header';
// import Greet from './component/greet';
// import Dashboard from './component/dashboard';
import Footer from './component/footer';
// import StudyHow from './component/studyHow';

import Bookings from './component/Booking/Bookings.jsx';
import Study from './component/study/Study.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Greet /> */}
      {/* <Dashboard /> */}
      {/* <StudyHow /> */}
      <Bookings />
      <Footer />
    </div>
  );
}

export default App;
