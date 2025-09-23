import { useState } from "react";
import { Eye, EyeOff, Check } from "lucide-react";
import { Link } from "react-router-dom";
import AuthLayout from "./Layout";

const Button = ({ children, className, ...props }) => (
  <button {...props} className={`px-4 py-2 rounded-md ${className}`}>
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

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const passwordRequirements = [
    { text: "At least 8 characters", met: password.length >= 8 },
    { text: "Contains uppercase letter", met: /[A-Z]/.test(password) },
    { text: "Contains lowercase letter", met: /[a-z]/.test(password) },
    { text: "Contains a number", met: /\d/.test(password) },
    { text: "Contains special character", met: /[!@#$%^&*(),.?":{}|<>]/.test(password) },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    if (!passwordRequirements.every(req => req.met)) {
      alert("Password doesn't meet requirements");
      return;
    }
    console.log("Password reset:", password);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <AuthLayout>
        <div className="space-y-6 text-center">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <div>
            <h2 className="text-2xl">Password updated</h2>
            <p className="text-sm text-muted-foreground mt-2">
              Your password has been successfully updated. You can now sign in with your new password.
            </p>
          </div>
          <Link to="/login">
            <Button className="w-full bg-primary hover:bg-primary/90">
              Continue to sign in
            </Button>
          </Link>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout>
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl">Reset your password</h2>
          <p className="text-sm text-muted-foreground mt-2">
            Please create a new password for your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">New password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pr-10"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm new password</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="pr-10"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          {password && (
            <div className="space-y-2">
              <Label className="text-sm">Password requirements:</Label>
              <div className="space-y-1">
                {passwordRequirements.map((req, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm">
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center ${
                        req.met ? "bg-green-100" : "bg-gray-100"
                      }`}
                    >
                      {req.met && <Check className="w-2.5 h-2.5 text-green-600" />}
                    </div>
                    <span className={req.met ? "text-green-600" : "text-muted-foreground"}>
                      {req.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <Button 
            type="submit" 
            className="w-full bg-primary text-white font-bold hover:bg-primary/90"
            disabled={!passwordRequirements.every(req => req.met) || password !== confirmPassword}
          >
            Update password
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
}

export default ResetPassword;