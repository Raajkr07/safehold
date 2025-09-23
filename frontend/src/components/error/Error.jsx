import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AuthLayout from '../../auth/pages/Layout';
import { House } from 'lucide-react';
import FuzzyText from './FuzzyText';


const Error = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

    useEffect(() => {
        window.history.replaceState(null, '', '/not-found');
    }, []);

    const handleHomeClick = () => {
        window.history.replaceState(null, '', '/');
    };

    return (
        <AuthLayout>
            <div className="text-center">
                <div className="text-xl font-mono md:text-2xl font-semibold text-foreground mb-8">
                    {loading ? "404 | Loading......" : "404 | Page not found"}
                </div>

                <div className="flex justify-center">
                    <Link
                        type="button"
                        to={'/'}
                        onClick={handleHomeClick}
                        className="px-6 py-3 border-2 font-medium rounded-md hover:border-red-500 hover:text-red-600 transition-all duration-200"
                    >
                        <House />
                    </Link>
                </div>
            </div>
        </AuthLayout>
    );
};

export default Error;