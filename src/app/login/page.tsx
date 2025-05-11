import LoginForm from "./components/LoginForm";
import SocialLogin from "./components/SocialLogin";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <LoginForm />
     <SocialLogin/>
    </div>
  );
};

export default LoginPage;
