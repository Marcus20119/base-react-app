import { Outlet } from 'react-router-dom';
import RootModal from '~/components/modal/RootModal';

type IMainLayout = {};

const MainLayout: React.FC<IMainLayout> = () => {
  return (
    <div className="w-full">
      <Outlet />
      <RootModal />
    </div>
  );
};

export default MainLayout;
