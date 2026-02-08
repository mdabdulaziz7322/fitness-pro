import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import UseAuth from '../../hooks/UseAuth';

const GoogleSignIn = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from || '/';

    const {  signInWithGoogle } = UseAuth();

    const handleGoogleSignIn = async () => {
       try {
           const result = await signInWithGoogle();
           console.log("Google sign-in result:", result);
            alert("Signed in with Google successfully!");
           
           navigate(from);
       } catch (error) {
           console.error("Google sign-in error:", error);
       }
   };

    return (
        <div>
            <button onClick={handleGoogleSignIn} className="w-full py-3 border border-gray-300 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition">
                <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="google"
                    className="w-5 h-5"
                />
                <span className="font-medium">Sign in with Google</span>
            </button>
        </div>
    );
};

export default GoogleSignIn;