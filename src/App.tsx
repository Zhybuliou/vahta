import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import Header from './components/header/Header';

export default function App() {
  return (
    <>
      <Header />
      <div className="wrapper-main">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}
