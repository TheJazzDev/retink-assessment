import { Tooltip } from 'flowbite-react';
import calender from '../../assets/calender.svg';
import alert from '../../assets/alert.svg';
import search from '../../assets/search.svg';
import settings from '../../assets/search-settings.svg';
import remove from '../../assets/remove.svg';
import coin from '../../assets/coin.svg';
import Profile from './Profile';

const TopBar = () => {
  return (
    <div className='hidden md:flex h-[82px] sticky top-0 left-0 right-0 z-20 bg-white'>
      <div className='flex-1 flex justify-between items-center gap-2 md:gap-0 border pl-[18px] shadow-lg'>
        <div className='flex-1 flex justify-between border max-w-[555px] h-fit rounded-md'>
          <img
            src={search}
            alt='search-icon'
            className='pl-1 md:pl-4 pr-1 md:pr-2'
          />
          <input
            type='search'
            placeholder='Search for templates, projects, etc'
            className='flex-1 text-xs py-3.5 outline-none border-none'
          />
          <span className='flex gap-1 md:gap-2.5 mr-2'>
            <img src={settings} alt='settings' />
            <img src={remove} alt='remove' />
          </span>
        </div>
        <div className='flex gap-3 lg:gap-7 mx-3'>
          <button className='text-xs text-white px-4 lg:px-12 py-3 bg-primary-purple-normal rounded-[18px] h-fit'>
            Create Content
          </button>
          <span className='flex gap-2 items-center px-3 py-2 rounded-[18px] bg-primary-purple-light-hover'>
            <img src={coin} alt='coin' />
            <p className='text-base'>20</p>
          </span>
        </div>
      </div>
      <div className='flex justify-between items-center md:w-[344px] border pl-8 pr-4 m-1 bg-primary-purple-light-hover'>
        <Tooltip content='Calender' placement='bottom'>
          <img
            src={calender}
            alt='calender'
            className='cursor-pointer hover:scale-125 transition-all duration-300 ease-in-out'
          />
        </Tooltip>
        <Tooltip content='Alert' placement='bottom'>
          <img
            src={alert}
            alt='alert'
            className='cursor-pointer hover:scale-125 transition-all duration-300 ease-in-out'
          />
        </Tooltip>
        <Profile />
      </div>
    </div>
  );
};

export default TopBar;
