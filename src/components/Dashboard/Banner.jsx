import { useAuthContext } from '../../context/AuthContext';
import { Select } from 'flowbite-react';
import sprial from '../../assets/sprial-design.svg';
import menu from '../../assets/menu.svg';
import search from '../../assets/search.svg';

const Banner = () => {
  const { user } = useAuthContext();

  const name = user.displayName.split(' ');

  return (
    <div className='flex flex-col-reverse md:flex-row justify-between px-4 md:px-6 py-8 rounded-bl-[30px] rounded-br-[30px] lg:rounded-[20px] border border-primary-purple-light-hover bg-radial-gradient relative'>
      <div className='z-10'>
        <h2 className='text-4xl text-retink-grey-05 mt-4 md:mt-0 font-moranga leading-relaxed md:leading-loose'>
          Hey {name[0]}!
        </h2>
        <p className='text-base text-retink-grey-05 md:text-xl mb-12'>
          Lets create something awesome today ✨💫
        </p>
        <button className='hidden md:block text-base text-primary-purple-normal border-2 border-primary-purple-normal px-12 py-3 mb-6 rounded-[20px] hover:bg-primary-purple-light-hover'>
          Start Creating
        </button>
      </div>
      <div className='flex items-center justify-between md:justify-normal md:flex-col md:items-end z-10'>
        <img src={menu} alt='menu' className='md:hidden' />
        <div className='max-w-md md:mr-6 md:mb-8 border-none' id='select'>
          <Select id='countries' required>
            <option>Zara ventures</option>
            <option>Zara1 ventures</option>
            <option>Zara2 ventures</option>
            <option>Zara3 ventures</option>
          </Select>
        </div>
        <img
          src={user.photoURL}
          alt='profile'
          className='w-9 h-9 rounded-[10px] md:hidden'
        />
        <div className='hidden md:block px-[10px] py-2 rounded-[10px] bg-white bg-opacity-10 backdrop-blur-lg border border-white h-fit md:max-w-[637px]'>
          <p className='text-xs md:text-base mb-6'>
            You should have more engagement by 6pm today, try posting then. 📆{' '}
          </p>
          <p className='text-xs md:text-base'>
            Try our SEO optimization tool to increase engagement by 40% 🔥
          </p>
        </div>
      </div>
      <img
        src={sprial}
        alt='sprial'
        className='absolute top-0 right-0 h-full w-fit'
      />
      <div className='flex md:hidden justify-between border h-fit rounded-md absolute -bottom-6 left-5 right-5 bg-white'>
        <img src={search} alt='search-icon' className='px-2' />
        <input
          type='search'
          placeholder='Search for templates, projects, etc'
          className='flex-1 text-xs py-3 outline-none'
        />
      </div>
    </div>
  );
};

export default Banner;
