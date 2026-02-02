import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) return;
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-[#FFCC01] py-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-black">

        {/* LEFT SECTION */}
        <div className="space-y-2 text-sm md:text-base">
          <p className="font-semibold">hello@fitness-pro.de</p>
          <p className="font-semibold">(+49) 176 84937322</p>
          <p className="text-black/70">Studio 1A, Vettersstraße 70,</p>
          <p className="text-black/70">Berlin, 10115</p>
        </div>

        {/* MIDDLE SECTION */}
        <div className="flex flex-col space-y-2 text-sm md:text-base">
          <a href="/careers" className="hover:text-black/80 transition">Careers</a>
          <a href="/contact" className="hover:text-black/80 transition">Contact</a>
          <a href="/privacy-policy" className="hover:text-black/80 transition">Privacy Policy</a>
          <a href="/terms" className="hover:text-black/80 transition">Terms & Conditions</a>
        </div>

        {/* RIGHT SECTION - Newsletter */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg md:text-xl font-extrabold">SUBSCRIBE TO OUR NEWSLETTER</h3>

          {/* Split input + submit button */}
          <div className="flex w-full max-w-md shadow-md bg-white">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-l-xl focus:outline-none text-black"
            />
            <button
              onClick={handleSubscribe}
              className="bg-black text-white px-6 py-3  hover:bg-gray-900 transition"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="mt-12 text-center text-sm text-black/70">
        &copy; {new Date().getFullYear()} Fitness Pro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
