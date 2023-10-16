import React from "react";

export default function Example() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Used by the worlds most multinational companies
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
            Elevate your business to new heights with cutting-edge solutions trusted by industry leaders worldwide. Our innovative technologies and global expertise redefine success for multinational enterprises, ensuring a future of unparalleled growth and efficiency.
            </p>
            <div className="mt-8 sm:flex">
              <div className="rounded-md shadow">
                <a
                  href="/register"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:text-white"
                >
                  Create Account
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="/contactus"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-12"
                src="https://uploads-ssl.webflow.com/6312535109af3402143e250c/6312535109af3410163e264c_google_-%20logo-300x82.png"
                alt="Google"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12" src="https://uploads-ssl.webflow.com/6312535109af3402143e250c/6312535109af34b7653e2519_amazon_-%20logo-300x119.png" alt="Mirage" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12" src="https://uploads-ssl.webflow.com/6312535109af3402143e250c/6312535109af344f1c3e2683_red_bull%20-%20logo-300x115.png" alt="Tuple" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-12"
                src="https://uploads-ssl.webflow.com/6312535109af3402143e250c/6312535109af3459f93e267e_pepsi_-%20logo-300x115.png"
                alt="Laravel"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-12"
                src="https://uploads-ssl.webflow.com/6312535109af3402143e250c/6312535109af34e1663e2691_walmart_-%20logo-300x67.png"
                alt="StaticKit"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-12"
                src="https://uploads-ssl.webflow.com/6312535109af3402143e250c/6312535109af34084f3e2573_colgate_-%20logo-300x119.png"
                alt="Statamic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}