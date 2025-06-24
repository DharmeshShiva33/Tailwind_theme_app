const AuthSidebar = () => {
  return (
    <div className="hidden md:flex w-1/2 bg-gradient-to-b from-primary-950 to-primary-900  text-white items-center justify-center p-8 relative">
      <div className="text-center">
        <img
          src="https://tailadmin.com/assets/images/logo/logo.svg"
          alt="TailAdmin"
          className="mx-auto w-12 h-12 mb-4"
        />
        <h2 className="text-3xl font-semibold">REACT && TAILWIND</h2>
        <p className="text-sm mt-2">
          Free and Open-Source Tailwind CSS Admin Dashboard Template
        </p>
      </div>
      <div className="absolute bottom-4 right-4">
        <button className="bg-white text-gray-800 p-2 rounded-full shadow">
          🌙
        </button>
      </div>
    </div>
  );
};

export default AuthSidebar;
