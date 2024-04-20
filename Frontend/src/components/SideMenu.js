import React from "react";
import { Link } from "react-router-dom";

function SideMenu() {
  const localStorageData = JSON.parse(localStorage.getItem("user"));
  console.log(localStorageData);
  console.log(localStorageData.firstname);

  return (
    <div className="h-full flex-col justify-between  bg-white hidden lg:flex ">
      <div className="px-4 py-6">
        <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1">
          <Link
            to="/"
            className="flex items-center gap-2 rounded-lg hover:bg-gray-100 px-4 py-2 text-gray-700"
          >
            <img
              alt="dashboard-icon"
              src={require("../assets/dashboard-icon.png")}
            />
            <span className="text-sm font-medium"> Dashboard </span>
          </Link>

          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <Link to="/inventory">
                <div className="flex items-center gap-2">
                  <img
                    alt="inventory-icon"
                    src={require("../assets/inventory-icon.png")}
                  />
                  <span className="text-sm font-medium"> Inventory </span>
                </div>
              </Link>
            </summary>
          </details>
          <a
              href="https://medical-inventory-forecast.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <img
                alt="purchase-icon"
                src={require("../assets/supplier-icon.png")}
              />
              <span className="text-sm font-medium"> Sales Forecast</span>
            </a>

        
        </nav>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <div className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
        <img
                              className="h-8 w-8 rounded-full"
                              src={require('../assets/AdobeStock_620901550.jpeg')}
                              alt="profile"
                            />

          <div>
            <p className="text-xs">
              <strong className="block font-medium">
                {localStorageData.firstname}
              </strong>

              <span> {localStorageData.email} </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
