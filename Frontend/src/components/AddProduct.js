import { Fragment, useContext, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import AuthContext from "../AuthContext";

export default function AddProduct({
  addProductModalSetting,
  handlePageUpdate,
}) {
  const authContext = useContext(AuthContext);
  const [product, setProduct] = useState({

      provider_id: "",
      businessname: "",
      practicename: "",
      address1: "",
      city: "",
      state: "",
      zip_code: "",
      telephonenumber: "",
      specialitieslist: "",
      supplieslist: "",
      Unit_Price: "",
      Quantity: "",
      days_in_store: "",
      date_Purchased: "",
    
  });
  console.log("----",product)

  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);

  const handleInputChange = (key, value) => {
    setProduct({ ...product, [key]: value });
  };

  
  const handleDateChange = (e) => {
    setProduct({ ...product, Date_Purchased: e.target.valueAsDate || new Date() });
  };





  const addProduct = () => {
    fetch("http://localhost:4012/api/product/add", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((result) => {
        alert("Product ADDED");
        handlePageUpdate();
        addProductModalSetting();
      })
      .catch((err) => console.log(err));
  };

  return (
    // Modal

    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                      <PlusIcon
                        className="h-6 w-6 text-blue-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left ">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-semibold leading-6 text-gray-900 "
                      >
                        Add Product
                      </Dialog.Title>
                      
                      <form action ="#" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid gap-4 mb-4 sm:grid-cols-2">
                          
                          <div> 
                            <label
                              htmlFor="provider_id"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Provider ID
                            </label>
                            <input

                              type="text"
                              name="provider_id"
                              id="provider_id"
                              value={product.provider_id}
                              onChange={(e) =>
                                handleInputChange(e.target.name, e.target.value)
                              }
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              placeholder="Provider_id"
                            />
                          </div>
                          <div>
                            <label 
                              htmlFor="businessname"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Business Name
                            </label>
                            <input
                              type="text"
                              name="businessname"
                              id="businessname"
                              value={product.businessname}
                              onChange={(e) =>
                                handleInputChange(e.target.name, e.target.value)
                              }
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              placeholder="Business Name"
                                       />
                          </div> 
                          <div>
                            <label
                              htmlFor="practicename"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Practice Name
                            </label>
                            <input
                              type="text"
                              name="practicename"
                              id="practicename"
                              value={product.practicename}
                              onChange={(e) =>
                                handleInputChange(e.target.name, e.target.value)
                              }
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              placeholder="Practice Name"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="address1"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Address
                            </label>
                            <input
                              type="text"
                              name="address1"
                              id="address1"
                              value={product.address1}
                              onChange={(e) =>
                                handleInputChange(e.target.name, e.target.value)
                              }
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              placeholder="Address"
                            />  
                          </div>
                          <div>
                            <label
                              htmlFor="city"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              City
                            </label>
                            <input
                              type="text"
                              name="city"
                              id="city"
                              value={product.city}
                              onChange={(e) =>
                                handleInputChange(e.target.name, e.target.value)
                              }
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              placeholder="City"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="state"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            > 
                              State
                            </label>
                            <input
                              type="text"
                              name="state"
                              id="state"
                              value={product.state}
                              onChange={(e) =>
                                handleInputChange(e.target.name, e.target.value)
                              }
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              placeholder="State"
                            />  
                          </div>
                          <div>
                            <label
                              htmlFor="zip_code"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Zip Code
                            </label>
                            <input
                              type="text"
                              name="zip_code"
                              id="zip_code"
                              value={product.zip_code}
                              onChange={(e) =>
                                handleInputChange(e.target.name, e.target.value)
                              }
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              placeholder="Zip Code"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="telephonenumber"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Telephone Number
                            </label>
                            <input
                              type="text"
                              name="telephonenumber"
                              id="telephonenumber"
                              value={product.telephonenumber}
                              onChange={(e) =>
                                handleInputChange(e.target.name, e.target.value)
                              }
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              placeholder="Telephone Number"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="specialitieslist"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Specialities List
                            </label>
                            <input
                              type="text"
                              name="specialitieslist"
                              id="specialitieslist"
                              value={product.specialitieslist}
                              onChange={(e) =>
                                handleInputChange(e.target.name, e.target.value)
                              }
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              placeholder="Specialities List"
                            />
                            </div>
                            <div>
                            <label
                              htmlFor="supplieslist"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Supplies List
                            </label>
                            <input
                              type="text"
                              name="supplieslist"
                              id="supplieslist"
                              value={product.supplieslist}
                              onChange={(e) =>
                                handleInputChange(e.target.name, e.target.value)
                              }
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              placeholder="Supplies List"
                            />
                            </div>
                            <div>
                            <label
                              htmlFor="Unit_Price"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Unit Price
                            </label>
                            <input
                              type="text"
                              name="Unit_Price"
                              id="Unit_Price"
                              value={product.Unit_Price}
                              onChange={(e) =>
                                handleInputChange(e.target.name, e.target.value)
                              }
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              placeholder="Unit Price"
                            />
                             </div>
                             <div>
                            <label
                              htmlFor="Quantity"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Quantity
                            </label>
                            <input
                              type="text"
                              name="Quantity"
                              id="Quantity"
                              value={product.Quantity}
                              onChange={(e) =>
                                handleInputChange(e.target.name, e.target.value)
                              }
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              placeholder="Quantity"
                            />
                            </div>
                            <div>
                            <label
                              htmlFor="days_in_store"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Days In Store
                            </label>
                            <input
                              type="text"
                              name="days_in_store"
                              id="days_in_store"
                              value={product.days_in_store}
                              onChange={(e) =>
                                handleInputChange(e.target.name, e.target.value)
                              }
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              placeholder="Days In Store"
                            />
                            </div>
                            <div>
                            <label
                              htmlFor="Date_Purchased"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Date Purchased
                            </label>
                            <input
                              type="date"
                              name="Date_Purchased"
                              id="Date_Purchased"
                              value={product.Date_Purchased}
                              onChange={handleDateChange}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            />
                            </div>           
                        </div> 
                        <div className="flex items-center space-x-4">

                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                    onClick={addProduct}
                  >
                    Add Product
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => addProductModalSetting()}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}


