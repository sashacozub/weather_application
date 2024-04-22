import Image from 'next/image';

type Props = {
  height: number;
  width: number;
};

const Loading = (props: Props) => {
  return (
    <Image
      className='animate-spin'
      src='/assets/logo.png'
      height={props.height}
      width={props.width}
      alt='weather application logo'
      priority={true}
    />
  );
};

export default Loading;
