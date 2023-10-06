import { SignUpForm } from "../components/SignUpForm";
import { LogInForm } from "./LogInForm";

export const AuthPage = function ({ setUser }) {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Auth Page</h1>
      <SignUpForm setUser={setUser} />
      <LogInForm setUser={setUser} />
    </div>
  );
};