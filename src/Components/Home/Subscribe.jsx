import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const handleSubscribe = (e) => {
    // Muestro por consola el mail subscrito y limpio el input
    e.preventDefault();
    console.log(
      `%cThis email: ${email} was subscribed, thank you!`,
      "background: green; color:white"
    );
    setEmail("");
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <>
      <section className="relative pb-4 sm:pb-2 md:pb-6 lg:pb-6 xl:pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className=" py-14  sm:py-24 md:py-36 lg:py-24 xl:py-24">
            <h1 className="mb-5 text-6xl font-bold text-slate-300 hover:text-amber-600 transition-colors ease-in-out">
              Subscribe to our newsletter
            </h1>
            <h1 className="mb-9 text-2xl font-semibold text-slate-400">
              Enter your email address and get our newsletters straight away.
            </h1>
            <form onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="juancarlos@example.com"
                name="email"
                autoComplete="email"
                value={email}
                required
                onChange={(e) => handleChange(e)}
                className="block sm:block md:inline lg:inline xl:inline border border-gray-600 w-fit mb-2 mx-auto pr-2 pl-2 py-3 mt-2 rounded-md  text-gray-200 font-semibold hover:border-gray-400 bg-black"
              />{" "}
              <button
                className="inline-flex items-center px-14 py-3 mt-4 sm:mt-4 md:mt-4 lg:mt-2 xl:mt-0 ml-0 sm:ml-0 md:ml-2 lg:ml-2 xl:ml-2  font-medium text-black transition duration-500 ease-in-out transform hover:bg-stone-800  border border-stone-400 rounded-lg bg-stone-900"
                type="submit"
              >
                <span className="justify-center text-stone-300">Subscribe</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
