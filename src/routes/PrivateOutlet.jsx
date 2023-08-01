import { Navigate, Outlet } from 'react-router-dom';

import { getAuth } from '../utils/getAuth';

const PrivateOutlet = () => {
  return getAuth() ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateOutlet;
