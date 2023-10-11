import SideNav from './SideNav';
import TopBar from './TopBar';
import Banner from './Banner';
import Tools from './Tools';

const Dashboard = () => {
  return (
    <div>
      <SideNav />
      <div className='md:pl-[106px]'>
        <TopBar />
        <section className='md:mx-[18px] md:mt-9 mb-8'>
          <Banner />
          <Tools />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
