import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import ListTask from './pages/ListTask';
import Create from './pages/Create';
import Delete from './pages/Delete';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Navigate to={'/list-tasks'} />} />
          <Route path='/list-tasks' element={<ListTask />} />
          <Route path='/create' element={<Create />} />
          <Route path='/delete' element={<Delete />} />

        </Route>
        <Route path="*" element={<ListTask />} />

      </Routes>
    </Router>

  );
}

export default App;
