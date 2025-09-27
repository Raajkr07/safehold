import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
    sessionStorage.clear();

    navigate("/dashboard", { replace: true });
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen">
      <span className="text-xl">Logging out...</span>
    </div>
  );
}
