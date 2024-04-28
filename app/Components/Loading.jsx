import Image from 'next/image';

const Loading = ({ height, width }) => {
  return (
    <div className='flex items-center justify-center min-h-screen custom-bg'>
      <Image
        className='animate-spin'
        src='/assets/logo.png'
        height={height}
        width={width}
        alt='weather application logo'
        priority={true}
      />
    </div>
  );
};

export default Loading;
