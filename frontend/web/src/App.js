import logo from './logo.svg';
import './App.css';
import LoginPage from './admin/pages/LoginPage';
import Header from './components/Header';

function App() {
  return (
    <div className='container body'>
      <Header/>
      <LoginPage/>
    </div>
  );
}

export default App;
