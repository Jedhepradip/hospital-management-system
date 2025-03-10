import { SignIn } from "@clerk/clerk-react";

const SigninPages = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-6 bg-white rounded-lg">
        <SignIn />
      </div>
    </div>
  );
};

export default SigninPages;

