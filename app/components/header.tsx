import React from "react";

const Header = () => {
  return (
    <header className="z-5">
      <svg width="0" height="0" style={{}}>
        <defs>
          <filter id="drop-shadow" x="0" y="0" width="200%" height="200%">
            <feOffset result="offOut" in="SourceAlpha" dx="-5" dy="5" />
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="5" />
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
          </filter>
        </defs>
      </svg>
      <nav className="justify-end">
        {/*<div className=" flex flex-wrap h-10 w-1/2 mx-1/2 max-w-1/2">
          <a href="https://Vrdhwl.com" className="flex px-10">
            <img
              src="/vrdhwl.png"
              className="mr-3 max-h-10"
              alt="Vrdhwl Logo"
              style={{ filter: "url(#drop-shadow)" }}
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Vrdhwl
            </span>
          </a>
        </div>*/}
        <div className=" flex flex-wrap justify-end h-10 mx-1/2 max-w-1/2">
          <div className="relative group">
            <div className="inline-flex items-center px-5 dark:hover:bg-gray-800 overflow-hidden rounded-xl border dark:border-gray-800 dark:bg-gray-900">
              <a
                href="#"
                className="px-2 pl-2 py-2 text-sm border-e-gray-800 text-gray-300 hover:bg-gray-800 hover:text-gray-200"
              >
                Scroll
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="absolute right-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
              <div className="p-2">
                <a
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                  role="menuitem"
                >
                  View on Storefront
                </a>
                <a
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                  role="menuitem"
                >
                  View Warehouse Info
                </a>
                <a
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                  role="menuitem"
                >
                  Duplicate Product
                </a>
                <a
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                  role="menuitem"
                >
                  Unpublish Product
                </a>
                <form method="POST" action="#">
                  <button
                    type="submit"
                    className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50 dark:text-red-500 dark:hover:bg-red-600/10"
                    role="menuitem"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    Delete Product
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
