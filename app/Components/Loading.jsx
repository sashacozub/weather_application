import Image from 'next/image';

const Loading = ({ height, width }) => {
  return (
    <Image
      className='animate-spin'
      src='/assets/logo.png'
      height={height}
      width={width}
      alt='weather application logo'
      priority={true}
    />
  );
};

export default Loading;
