import { Navigate, Outlet } from 'react-router-dom';

import { getAuth } from '../utils/getAuth';

const PublicOutlet = () => {
  return !getAuth() ? <Outlet /> : <Navigate to='/' />;
};

export default PublicOutlet;
