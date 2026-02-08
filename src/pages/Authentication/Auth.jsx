import { useState } from "react";
import { Camera } from "lucide-react";
import UseAuth from "../../hooks/UseAuth";
import { useForm } from "react-hook-form";
import GoogleSignIn from "./GoogleSignIn";
import { useLocation, useNavigate } from "react-router";


const Auth = () => {
  const [activeTab, setActiveTab] = useState("signin");
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
   const from = location.state?.from || '/';
   const navigate = useNavigate();

  const { createUser, signInUser } = UseAuth();

  // react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // ================= IMAGE PREVIEW (UI ONLY) =================
  // const handleImageUpload = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setPreview(URL.createObjectURL(file));
  //   }
  // };

  // ================= SIGN IN =================
  const onSignIn = async (data) => {
    try {
      setLoading(true);

      const result = await signInUser(data.email, data.password);
      console.log("SIGNED IN:", result);

      alert("Signed in successfully!");
      navigate(from);
      reset();

    } catch (error) {
      console.error("SIGN IN ERROR:", error);
      alert(error.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  // ================= SIGN UP =================
  const onSignUp = async (data) => {
    try {
      setLoading(true);

      // 1️⃣ Create auth account
      const result = await createUser(data.email, data.password);
      console.log("USER CREATED:", result);

      // 2️⃣ Optional: Save extra info to backend (JSON)
      const userInfo = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        uid: result.user?.uid, // if using Firebase
        // photoURL: preview (NOT recommended — upload later properly)
      };

      console.log("USER INFO TO BACKEND:", userInfo);

      // await axios.post("/api/users", userInfo);

      alert("Account created successfully!");
      reset();
      setPreview(null);
      setActiveTab("signin");

    } catch (error) {
      console.error("SIGN UP ERROR:", error);
      alert(error.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        
        {/* Tabs */}
        <div className="flex mb-8 border-b">
          <button
            onClick={() => setActiveTab("signin")}
            className={`flex-1 py-3 text-center font-semibold transition
              ${activeTab === "signin"
                ? "border-b-4 border-yellow-400 text-yellow-500"
                : "text-gray-400 hover:text-gray-600"}
            `}
          >
            Sign In
          </button>
          <button
            onClick={() => setActiveTab("signup")}
            className={`flex-1 py-3 text-center font-semibold transition
              ${activeTab === "signup"
                ? "border-b-4 border-yellow-400 text-yellow-500"
                : "text-gray-400 hover:text-gray-600"}
            `}
          >
            Sign Up
          </button>
        </div>

        {/* ============ SIGN IN ============ */}
        {activeTab === "signin" && (
          <form onSubmit={handleSubmit(onSignIn)} className="space-y-5">
            
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-3 border-2 border-yellow-100 focus:border-yellow-400 rounded-lg outline-none transition"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
              className="w-full px-4 py-3 border-2 border-yellow-100 focus:border-yellow-400 rounded-lg outline-none transition"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}

            <div className="text-sm text-right">
              <button
                type="button"
                onClick={() => setActiveTab("signup")}
                className="text-yellow-500 hover:underline"
              >
                New here? Register
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-lg transition"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
            <GoogleSignIn></GoogleSignIn>
          </form>
        )}

        {/* ============ SIGN UP ============ */}
        {activeTab === "signup" && (
          <form onSubmit={handleSubmit(onSignUp)} className="space-y-5">
            
            {/* Upload Avatar (UI only for now) */}
            <div className="flex justify-center">
              <label className="relative w-24 h-24 rounded-full border-4 border-yellow-400 flex items-center justify-center cursor-pointer overflow-hidden bg-gray-100">
                
                {preview ? (
                  <img
                    src={preview}
                    alt="preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Camera className="w-8 h-8 text-gray-400" />
                )}

                <input
                  type="file"
                  accept="image/*"
                  // onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>

            <input
              type="text"
              placeholder="Full Name"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-3 border-2 border-yellow-100 focus:border-yellow-400 rounded-lg outline-none transition"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}

            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-3 border-2 border-yellow-100 focus:border-yellow-400 rounded-lg outline-none transition"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            <input
              type="tel"
              placeholder="Phone Number"
              {...register("phone")}
              className="w-full px-4 py-3 border-2 border-yellow-100 focus:border-yellow-400 rounded-lg outline-none transition"
            />

            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
              })}
              className="w-full px-4 py-3 border-2 border-yellow-100 focus:border-yellow-400 rounded-lg outline-none transition"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}

            <div className="text-sm text-right">
              <button
                type="button"
                onClick={() => setActiveTab("signin")}
                className="text-yellow-500 hover:underline"
              >
                Already have an account? Sign In
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-lg transition"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Auth;
