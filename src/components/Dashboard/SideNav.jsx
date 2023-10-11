import logo from '../../assets/logo.png';
import home from '../../assets/home.svg';
import content from '../../assets/content.svg';
import settings from '../../assets/settings.svg';
import logout_icon from '../../assets/logout.svg';
import { useAuthContext } from '../../context/AuthContext';

const SideNav = () => {
  const { logout } = useAuthContext();
  return (
    <nav className='w-[106px] h-screen hidden md:flex flex-col justify-between bg-primary-purple-light py-6 px-4 fixed top-0 left-0 bottom-0'>
      <div>
        <img
          src={logo}
          alt='logo'
          className='mx-auto p-2.5 cursor-pointer  mb-[45px] hover:scale-110 hover:rotate-90 transition-all duration-300 ease-in-out'
        />
        <img
          src={home}
          alt='home'
          className='rounded-[10px] p-6 mb-10 cursor-pointer bg-primary-purple-normal-active hover:bg-primary-purple-light-hover transition-all duration-300 ease-in-out'
        />
        <img
          src={content}
          alt='content'
          className='rounded-[10px] cursor-pointer  hover:bg-primary-purple-light-hover transition-all duration-300 ease-in-out'
        />
      </div>
      <div>
        <img
          src={settings}
          alt='content'
          className='rounded-[10px] mb-10 cursor-pointer hover:bg-primary-purple-light-hover transition-all duration-300 ease-in-out'
        />
        <img
          src={logout_icon}
          alt='content'
          onClick={() => logout()}
          className='rounded-[10px] mb-6 cursor-pointer hover:bg-primary-purple-light-hover transition-all duration-300 ease-in-out'
        />
      </div>
    </nav>
  );
};

export default SideNav;
