import { useState, useRef, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { IconPassword } from '@tabler/icons-react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from "./Layout";

const OTP = ({ onNavigate }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isResending, setIsResending] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (/^\d+$/.test(pastedData)) {
      const newOtp = pastedData
        .split("")
        .concat(Array(6 - pastedData.length).fill(""))
        .slice(0, 6);
      setOtp(newOtp);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (otpValue.length === 6) {
      console.log("OTP submitted:", otpValue);
      onNavigate("login");
    }
  };

  const handleResend = async () => {
    setIsResending(true);
    setCountdown(30);
    setTimeout(() => {
      setIsResending(false);
    }, 1000);
  };

  const isOtpComplete = otp.every((digit) => digit !== "");

  return (
    <AuthLayout>
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <Link
            to={'/login'}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h2 className="text-2xl">Verify your account</h2>
        </div>

        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <IconPassword className="w-8 h-8 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground">
            We've sent a 6-digit verification code to your email address. Enter
            the code below to verify your account.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-center space-x-2" onPaste={handlePaste}>
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 text-center border border-border rounded-lg focus:ring-1 focus:ring-primary focus:border-primary text-lg font-semibold bg-input-background"
                />
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-10 text-white font-bold rounded-md bg-primary hover:bg-primary/90"
            disabled={!isOtpComplete}
          >
            Verify code
          </button>
        </form>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Didn't receive the code?{" "}
            {countdown > 0 ? (
              <span className="text-muted-foreground">
                Resend in {countdown}s
              </span>
            ) : (
              <button
                onClick={handleResend}
                disabled={isResending}
                className="text-primary hover:underline"
              >
                {isResending ? "Sending..." : "Resend code"}
              </button>
            )}
          </p>
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Having trouble?{" "}
            <a href="/not-found" className="text-primary hover:underline">
              Contact support
            </a>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}

export default OTP;