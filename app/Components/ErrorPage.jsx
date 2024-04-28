const ErrorPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen custom-bg'>
      <h2>Oops, something went wrong!</h2>
      <a href='/'>
        <button className='cursor-pointer bg-accent-color text-white px-4 py-2 border rounded-full border-gray-300 hover:opacity-80 text-xl transition duration-200 ease-in-out'>
          Go back
        </button>
      </a>
    </div>
  );
};

export default ErrorPage;
