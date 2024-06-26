import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function UpdateProduct({ updateProductData, updateModalSetting }) {
  const {
    _id,
    provider_id,
    businessname,
    practicename,
    address1,
    city,
    state,
    zip_code,
    telephonenumber,
    specialitieslist,
    supplieslist,
    Unit_Price,
    Quantity,
    days_in_store,
    Date_Purchased,
  } = updateProductData;

  const [product, setProduct] = useState({
    productId: _id,
    provider_id: provider_id,
    businessname: businessname,
    practicename: practicename,
    address1: address1,
    city: city,
    state: state,
    zip_code: zip_code,
    telephonenumber: telephonenumber,
    specialitieslist: specialitieslist,
    supplieslist: supplieslist,
    Unit_Price: Unit_Price,
    Quantity: Quantity,
    days_in_store: days_in_store,
    Date_Purchased: Date_Purchased,

  });

  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);

  const handleInputChange = (key, value) => {
    setProduct({ ...product, [key]: value });
    console.log(product);
  };



  const updateProduct = async () => {
    try {
      console.log(product);
      const response = await fetch(`https://meditrack-4w9w.onrender.com/api/product/:${product.productId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
  
      if (!response.ok) {
        throw new Error('HTTP error ' + response.status);
      }
  
      const data = await response.json();
      //if sucessful close the modal and refresh the page
      alert("Product Updated");
      setOpen(false);
      window.location.reload();
      
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
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
                      <PlusIcon className="h-6 w-6 text-blue-400" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg font-semibold leading-6 text-gray-900">
                        Update Product
                      </Dialog.Title>
                      <form action="#">
                        <div className="grid gap-4 mb-4 sm:grid-cols-2">
                          {/* Input fields generated dynamically from model properties */}
                          {Object.keys(product).map(key => (
                            key !== "productID" && (
                              <div key={key}>
                                <label htmlFor={key} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                  {key.replace(/_/g, " ").replace(/^\w/, c => c.toUpperCase())}
                                </label>
                                <input
                                  type={key.includes("Date") ? "date" : "text"}
                                  name={key}
                                  id={key}
                                  value={product[key]}
                                  onChange={(e) => handleInputChange(key, e.target.value)}
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                  placeholder={`Enter ${key.replace(/_/g, " ")}`}
                                />
                              </div>
                            )
                          ))}
                        </div>
                        <div className="flex items-center space-x-4">
                          <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                            onClick={updateProduct}
                          >
                            Update Product
                          </button>
                          <button
                            type="button"
                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            onClick={() => updateModalSetting()}
                            ref={cancelButtonRef}
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
