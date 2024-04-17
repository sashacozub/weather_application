import Navbar from './Components/Navbar';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div
        className='custom-bg flex flex-col items-center justify-center py-5 min-h-screen'
        style={{ minHeight: 'calc(100vh - 80px)' }}
      >
        <h3 className='text-2xl'>Oslo, NO</h3>
        <h1 className='text-8xl font-medium'>5&deg;</h1>
        <div className='flex flex-row gap-2'>
          <h4>Cloudy</h4>
          <p>icon</p>
        </div>
      </div>
    </div>
  );
}
