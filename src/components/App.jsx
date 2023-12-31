import 'react-datepicker/dist/react-datepicker.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import TaskDetails from '../pages/TaskDetails';
import PrivateOutlet from '../routes/PrivateOutlet';
import PublicOutlet from '../routes/PublicOutlet';
import Layout from './Layout';

function App() {
  return (
    <div className='bg-bodyBackground font-appFont min-h-screen'>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />

            {/* Public Routes */}
            <Route path='/*' element={<PublicOutlet />}>
              <Route path='signup' element={<SignUp />} />
              <Route path='login' element={<Login />} />
            </Route>

            {/* Private Routes */}
            <Route path='/*' element={<PrivateOutlet />}>
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='tasks/:id' element={<TaskDetails />} />
            </Route>
          </Routes>
        </Layout>
      </Router>

      <ToastContainer
        position='bottom-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        theme='light'
      />
    </div>
  );
}

export default App;
