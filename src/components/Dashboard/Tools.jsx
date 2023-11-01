import blog from '../../assets/blog.svg';
import product from '../../assets/product.svg';
import article from '../../assets/article.svg';
import trending from '../../assets/trending.svg';

const items = [
  {
    key: 1,
    icon: blog,
    title: 'Blog writing',
    desc: 'Generate the best blog post to fit your audience with just few clicks of a button',
  },
  {
    key: 2,
    icon: product,
    title: 'Product description',
    desc: 'Instantly generate engaging product descriptions that sell',
  },
  {
    key: 3,
    icon: article,
    title: 'Article Writer',
    desc: 'Automatically create unique factual articles at the touch of a button',
  },
  {
    key: 4,
    icon: blog,
    title: 'Blog writing',
    desc: 'Generate the best blog post to fit your audience with just few clicks of a button',
  },
  {
    key: 5,
    icon: product,
    title: 'Product description',
    desc: 'Instantly generate engaging product descriptions that sell',
  },
  {
    key: 6,
    icon: article,
    title: 'Article Writer',
    desc: 'Automatically create unique factual articles at the touch of a button',
  },
];

const Tools = () => {
  return (
    <div className='mx-4 md:mx-0'>
      <h3 className='text-2xl font-semibold mt-12 lg:mt-[17px]'>Most Popular Tools</h3>
      <p className='text-sm lg:text-lg text-retink-blue-grey-600 md:text-retink-grey-05 mt-2 mb-4'>
        Explore the trending tools to create your copies fast
      </p>
      <div className='md:border rounded-[20px] md:bg-retink-grey-0 px-2'>
        <h4 className='text-sm lg:text-lg mt-8 lg:mt-3 mb-2'>Blog writing</h4>
        <div className='flex gap-[18px] overflow-x-scroll -ml-2 px-2 py-4'>
          {items.map((item) => (
            <div
              key={item.key}
              className='p-1 md:px-[21px] md:pt-[14px] md:pb-[30px] rounded-[10px] w-[142px] md:w-[331px] bg-white flex-shrink-0 shadow-lg cursor-pointer'>
              <span className='flex justify-between items-center'>
                <img src={item.icon} alt='icon' />
                <img src={trending} alt='trending' />
              </span>
              <h6 className='text-[13.5px] md:text-xl mt-8 mb-[12px] font-semibold'>
                {item.title}
              </h6>
              <p className='text-[11px] md:text-base text-retink-blue-grey'>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <h4 className='text-sm lg:text-lg mt-8 lg:mt-3 mb-2'>Social Media</h4>
        <div className='flex gap-[18px] overflow-x-auto -ml-2 px-2 py-4'>
          {items.map((item) => (
            <div
              key={item.key}
              className='p-1 md:px-[21px] md:pt-[14px] md:pb-[30px] rounded-[10px] w-[142px] md:w-[331px] bg-white flex-shrink-0 shadow-lg cursor-pointer'>
              <span className='flex justify-between items-center'>
                <img src={item.icon} alt='icon' />
                <img src={trending} alt='trending' />
              </span>
              <h6 className='text-[13.5px] md:text-xl mt-8 mb-[12px] font-semibold'>
                {item.title}
              </h6>
              <p className='text-[11px] md:text-base text-retink-blue-grey'>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <h4 className='text-sm lg:text-lg mt-8 lg:mt-3 mb-2'>Article Writing</h4>
        <div className='flex gap-[18px] overflow-x-auto -ml-2 px-2 py-4'>
          {items.map((item) => (
            <div
              key={item.key}
              className='p-1 md:px-[21px] md:pt-[14px] md:pb-[30px] rounded-[10px] w-[142px] md:w-[331px] bg-white flex-shrink-0 shadow-lg cursor-pointer'>
              <span className='flex justify-between items-center'>
                <img src={item.icon} alt='icon' />
                <img src={trending} alt='trending' />
              </span>
              <h6 className='text-[13.5px] md:text-xl mt-8 mb-[12px] font-semibold'>
                {item.title}
              </h6>
              <p className='text-[11px] md:text-base text-retink-blue-grey'>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
