import { useState } from "react";
import { ArrowLeft, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import AuthLayout from "./Layout";


const Button = ({ children, className, ...props }) => (
  <button {...props} className={`px-4 py-2 rounded-md font-semibold ${className}`}>
    {children}
  </button>
);

const Input = ({ className, ...props }) => (
  <input
    {...props}
    className={`border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
  />
);

const Label = ({ children, className, ...props }) => (
  <label {...props} className={`block font-medium ${className}`}>
    {children}
  </label>
);

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Forgot password request for:", email);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <AuthLayout>
        <div className="space-y-6 text-center">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <Mail className="w-8 h-8 text-primary" />
          </div>

          <div>
            <h2 className="text-2xl">Check your email</h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-sm mx-auto">
              We've sent a password reset link to {email}. Click the link in the
              email to reset your password.
            </p>
          </div>

          <div className="space-y-4">
            <Link to="/login">
              <Button className="w-full bg-primary hover:bg-primary/90">
                Back to sign in
              </Button>
            </Link>

            <p className="text-sm text-muted-foreground">
              Didn't receive the email?{" "}
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-primary hover:underline"
              >
                Try again
              </button>
            </p>
          </div>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout>
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <Link
            to="/login"
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h2 className="text-2xl">Forgot password</h2>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Enter your email address and we'll send you a link to reset your
            password.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>

          <Button type="submit" className="w-full font-bold text-white bg-primary hover:bg-primary/90">
            Send reset link
          </Button>
        </form>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Remember your password?{" "}
            <Link to="/login" className="text-primary hover:underline">
              Back to sign in
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
