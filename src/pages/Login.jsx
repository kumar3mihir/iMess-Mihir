import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import nitrLogo from "../assets/nitrlogo.png";
// Import your logos with a relative path


function Login() {
    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic here (e.g., validate credentials, make API calls, etc.)
        // You can use state or context to manage user authentication
        console.log("User clicked login!");
    };

    const handleForgotPassword = () => {
        // Handle forgot password logic here (e.g., show a modal, navigate to a reset password page, etc.)
        console.log("User clicked forgot password!");
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="p-8 text-left bg-white rounded shadow-md w-96">
                <div className="flex items-center mb-4">
                    {/* Display the resized logo on the left */}
                    <img src={nitrLogo} alt="NIT Logo" className="w-16 h-16" />

                    {/* Text on the right side of the logo */}
                    <div className="ml-4">
                        <p className="text-lg font-bold">NIT Rourkela</p>
                        <p className="text-sm">Sign in to Mess portal</p>
                    </div>
                </div>

                {/* Line and background for icons */}
                <div className="p-4 mb-4 bg-gray-200 rounded">
                    <div className="flex items-center justify-center pb-2 mb-2 border-b border-gray-300">
                        <PersonIcon />
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full px-4 py-2 ml-2 focus:outline-none"
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <LockIcon />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 ml-2 focus:outline-none"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none"
                    onClick={handleLogin}
                >
                    Sign In
                </button>
                <p
                    className="mt-4 text-right text-blue-500 cursor-pointer hover:underline"
                    onClick={handleForgotPassword}
                >
                    Forgot Password?
                </p>
            </div>
        </div>
    );
}

export default Login;