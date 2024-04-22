import { cn } from '@/app/utils/cn';

const Container = (props: React.HTMLProps<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={
        (cn('flex py-4 w-full border rounded-xl bg-white shadow-sm'),
        props.className)
      }
    />
  );
};

export default Container;
