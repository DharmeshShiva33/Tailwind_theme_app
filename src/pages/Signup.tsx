import AuthSidebar from "../components/Auth/Sidebar";

const SignUpPages = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Side: Form */}
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
        <SignupHeader />
        <div className="relative flex items-center mb-6">
          <div className="flex-grow border-t border-secondary-300"></div>
          <span className="flex-shrink mx-4 text-secondary-500 text-sm font-semibold tracking-wider">
            OR
          </span>
          <div className="flex-grow border-t border-secondary-300"></div>
        </div>

        <form className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium">First Name *</label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="mt-1 block input-base"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium">Last Name *</label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="mt-1 block input-base"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Email *</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 block input-base"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Password *</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-1 block input-base"
            />
          </div>

          <div className="flex items-start">
            <input type="checkbox" className="checkbox-base" />
            <label className="text-sm text-gray-600">
              By creating an account you agree to the{" "}
              <a href="#" className="text-primary font-semibold underline">
                Terms and Conditions
              </a>
              , and our{" "}
              <a href="#" className="text-primary font-semibold underline">
                Privacy Policy
              </a>
            </label>
          </div>

          <button type="submit" className="w-full btn btn-primary">
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="#" className="text-primary font-semibold underline">
            Sign In
          </a>
        </p>
      </div>

      {/* Right Side: Illustration */}
      <AuthSidebar />
    </div>
  );
};
export default SignUpPages;

const SignupHeader = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Sign Up</h2>

      <div className="flex max-lg:flex-col gap-4 mb-6">
        <button className="flex-1 flex items-center justify-center btn btn-outline">
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Sign up with Google
        </button>
        <button className="flex-1 flex items-center justify-center btn btn-outline">
          <img
            src="https://www.svgrepo.com/show/512330/linkedin-164.svg"
            alt="X"
            className="w-5 h-5 mr-2"
          />
          Sign up with X
        </button>
      </div>
    </>
  );
};
