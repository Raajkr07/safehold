import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/AppFooter";

const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Jammu and Kashmir"
];

const PaymentPage = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    const selectedPlan = state?.plan || "Custom Plan";
    const selectedPrice = state?.price ?? 0;

    const [userInfo, setUserInfo] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
    });

    const [paymentInfo, setPaymentInfo] = useState({
        cardNumber: "",
        expiry: "",
        cvv: "",
        amount: selectedPrice,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User Info:", userInfo);
        console.log("Payment Info:", paymentInfo);
        alert("Payment submitted successfully!");
        navigate("/");
    };

    return (
        <section className="py-8 min-h-screen flex flex-col justify-between">
            <Header />
            <div className="flex-1 w-full flex justify-center items-center px-2 md:px-6">
                <div className="shadow-xl rounded-2xl max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 p-3 border border-gray-300/70">
                    {/* User field */}
                    <div className="flex flex-col justify-between">
                        <h2 className="text-2xl font-bold mb-4">Confirm & Pay</h2>
                        <p className="text-xs font-semibold mb-6">Basic Details</p>
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Full Name"
                                value={userInfo.fullName}
                                onChange={(e) =>
                                    setUserInfo((prev) => ({ ...prev, fullName: e.target.value }))
                                }
                                className="px-4 py-3 bg-blue-950/50 border rounded-lg"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={userInfo.email}
                                onChange={(e) =>
                                    setUserInfo((prev) => ({ ...prev, email: e.target.value }))
                                }
                                className="px-4 py-3 bg-blue-950/50 border rounded-lg"
                                required
                            />
                            <input
                                type="tel"
                                placeholder="Mobile Number"
                                value={userInfo.phone}
                                onChange={(e) =>
                                    setUserInfo((prev) => ({ ...prev, phone: e.target.value }))
                                }
                                className="px-4 py-3 bg-blue-950/50 border rounded-lg"
                                required
                            />
                            <select
                                value={userInfo.address}
                                onChange={e =>
                                    setUserInfo(prev => ({ ...prev, address: e.target.value }))
                                }
                                className="px-4 py-3 bg-blue-950/50 border rounded-lg"
                                required
                            >
                                <option value="">Select State</option>
                                {indianStates.map(state => (
                                    <option key={state} value={state}>{state}</option>
                                ))}
                            </select>
                            {/* Pay button */}
                            <button
                                type="submit"
                                className="mt-4 w-full bg-primary text-white py-3 rounded-lg font-semibold active:scale-95 transition"
                            >
                                PAY SECURELY
                            </button>
                            <p className="text-xs text-center mt-1">
                                Secured Connection
                            </p>
                        </form>
                    </div>

                    {/* Payment field */}
                    <div className="rounded-xl p-6 flex flex-col justify-between border-[0.5px] border-gray-300/70">
                        <h2 className="text-xl font-bold mb-4">Payment Details</h2>

                        {/* Plan Info */}
                        <div className="flex items-center gap-4 mb-6">
                            <div>
                                <h3 className="font-semibold">{selectedPlan}</h3>
                                <p className="text-sm">One Time Payment Plan</p>
                            </div>
                        </div>

                        {/* Price Breakdown */}
                        <div className="space-y-2 text-sm border-t border-gray-300 pt-4">
                            <div className="flex justify-between">
                                <span>Item Total</span>
                                <span>₹{selectedPrice}</span>
                            </div>
                            <div className="flex justify-between text-green-600">
                                <span>Discount</span>
                                <span>- ₹500</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Coupon Discount</span>
                                <Link
                                    to={'/not-found'}
                                    className="text-blue-600 hover:underline text-xs" type="button">
                                    Apply Coupons
                                </Link
                                >
                            </div>
                            <div className="flex justify-between font-semibold border-t border-gray-200 pt-2">
                                <span>Sub total</span>
                                <span>₹{Math.max(selectedPrice - 500, 0)}</span>
                            </div>
                        </div>

                        {/* TOTAL */}
                        <div className="flex justify-between text-lg font-bold mt-4">
                            <span>TOTAL</span>
                            <span>₹{Math.max(selectedPrice - 500, 0)}</span>
                        </div>

                        {/* Help desk */}
                        <div className="mt-8 text-xs">
                            <p className="mb-1">NEED HELP?</p>
                            <Link
                                to={"/not-found"}
                                className="text-blue-600 hover:underline"
                            >
                                Refund Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default PaymentPage;
