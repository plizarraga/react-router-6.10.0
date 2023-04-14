import { Outlet, useNavigation } from 'react-router-dom';
import { Navbar } from '../components';

const LayoutDefault = () => {
  const navigation = useNavigation();

  return (
    <>
      <Navbar />
      <div className="container">
        {navigation.state === 'loading' && (
          <div className="alert alert-info my-5">Loading...</div>
        )}
        <Outlet />
      </div>
    </>
  );
};

export default LayoutDefault;
