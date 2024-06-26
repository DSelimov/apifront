import Login from "../../components/Login";
import { useAuth } from "@/hooks/useAuth";
import { RedirectIfAuthenticated } from "@/hooks/authRedirect";

const LoginPage = () => {
  const { isAuthenticated } = useAuth();

  RedirectIfAuthenticated(isAuthenticated, '/');

  return (
    <div>
      <h1 className="login_title">Login Page</h1>
      <Login />
    </div>
  );
};

export default LoginPage;
