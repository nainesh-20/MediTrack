import React, { useEffect, useState } from "react";
import QuantityOverTime from "../components/QuantityOverTime";
import TotalQuantityBySupplyType from '../components/TotalQuantityBySupplyType';


function Dashboard() {
  const [saleAmount, setSaleAmount] = useState("");
  const [budgetAmount,setBudgetAmount] = useState("");
  const [stores, setStores] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchTotalSaleAmount();
    fetchBudgetAmount();
    fetchStoresData();
    fetchProductsData();
  }, [saleAmount]);


// Fetching total sale amount
const fetchTotalSaleAmount = () => {
  fetch(`http://localhost:4012/api/product/get`)
    .then((response) => response.json())
    .then((salesData) => {
      const totalSaleAmount = salesData.reduce((total, sale) => total + Number(sale.Unit_Price), 0);
      setSaleAmount(totalSaleAmount);
    })
    .catch((error) => console.error(error));
};

// Total Budget remaining
const fetchBudgetAmount = () => {
  const budgetAmount = 700000; // replace with your constant value
  const remainingBudget = budgetAmount - saleAmount;
  setBudgetAmount(remainingBudget);
};

// Fetching all stores data
const fetchStoresData = () => {
  fetch(`http://localhost:4012/api/product/get`)
    .then((response) => response.json())
    .then((products) => {
      const uniqueBusinessNames = [...new Set(products.map(product => product.businessname))];
      setStores(uniqueBusinessNames.length);
    })
    .catch((error) => console.error(error));
};


  // Fetching Data of All Products
  const fetchProductsData = () => {
    fetch(`http://localhost:4012/api/product/get`)
      .then((response) => response.json())
      .then((datas) => setProducts(datas))
      .catch((err) => console.log(err));
  };

 

  return (
    <>
      <div className="grid grid-cols-1 col-span-12 lg:col-span-10 gap-6 md:grid-cols-3 lg:grid-cols-4  p-4 ">
        <article className="flex flex-col gap-4 rounded-lg border  border-gray-100 bg-white p-6  ">
          <div className="inline-flex gap-2 self-end rounded bg-green-100 p-1 text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>

            <span className="text-xs font-medium"> 67.81% </span>
          </div>

          <div>
            <strong className="block text-sm font-medium text-gray-500">
            Expenditure
            </strong>

            <p>
              <span className="text-2xl font-medium text-gray-900">
                {" "}
                ${saleAmount}
              </span>

              <span className="text-xs text-gray-500"> from $240.94 </span>
            </p>
          </div>
        </article>

        <article className="flex flex-col  gap-4 rounded-lg border border-gray-100 bg-white p-6 ">
          <div className="inline-flex gap-2 self-end rounded bg-red-100 p-1 text-red-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
              />
            </svg>

            <span className="text-xs font-medium"> 67.81% </span>
          </div>

          <div>
            <strong className="block text-sm font-medium text-gray-500">
              Budjet Remaining
            </strong>

            <p>
              <span className="text-2xl font-medium text-gray-900">
                {" "}
                $ {budgetAmount}
              </span>

              <span className="text-xs text-gray-500"> from $700000 </span>
            </p>
          </div>
        </article>
        <article className="flex flex-col   gap-4 rounded-lg border border-gray-100 bg-white p-6 ">
        <div className="inline-flex gap-2 self-end rounded bg-green-100 p-1 text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>

            <span className="text-xs font-medium"> 67.81% </span>
          </div>

          <div>
            <strong className="block text-sm font-medium text-gray-500">
              Total Products
            </strong>

            <p>
              <span className="text-2xl font-medium text-gray-900">
                {" "}
                {products.length}
              </span>
            </p>
          </div>
        </article>
        <article className="flex flex-col   gap-4 rounded-lg border border-gray-100 bg-white p-6 ">
        <div className="inline-flex gap-2 self-end rounded bg-green-100 p-1 text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>

            <span className="text-xs font-medium"> 50% </span>
          </div>
          <div>
            <strong className="block text-sm font-medium text-gray-500">
              Total Vendor Stores
            </strong>

            <p>
              <span className="text-2xl font-medium text-gray-900">
                {" "}
                {stores}
              </span>
            </p>
          </div>
        </article>
      {/* plot  */}
      <div className="flex flex-col justify-around bg-white rounded-lg py-8 col-span-full justify-center" style={{padding: "1em"}} >
          {/* <div> */}
          <TotalQuantityBySupplyType />
          </div>
          {/* </div> */}
          <div className="flex flex-col justify-around bg-white rounded-lg py-8 col-span-full justify-center" style={{padding: "1em"}}>
          {/* <div> */}
            <QuantityOverTime />
           </div> 





      </div>
    </>
  );
}

export default Dashboard;
