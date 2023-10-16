import { Fragment, useState, useEffect } from 'react'
import { Dialog, Popover, Transition } from '@headlessui/react'
import { MenuIcon, SearchIcon, ShoppingCartIcon, XIcon } from '@heroicons/react/outline'
import image from "../Images/black.png";
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import { logout } from '../Features/User'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const navigation = {
  page: [
    { name: 'Home', href: '/' },
  ],
  category: [
    {
      name: 'Category',
      featured: [
        { name: 'Kitchen and Dining', id: 1 },
        { name: 'Home Decor', id: 2 },
        { name: 'Bedding and Linens', id: 3 },
        { name: 'Appliances', id: 4 },
      ],
      collection: [
        { name: 'Cleaning Supplies', id: 5 },
        { name: 'Furniture', href: 'http://localhost:3000/api/products/byCategory/6' },
      ],
      categories: [
        
        { name: 'Gardening and Outdoor Living', href: 'http://localhost:3000/api/products/byCategory/7' },
        { name: 'Pet Supplies', href: 'http://localhost:3000/api/products/byCategory/8' },
      ],
      brands: [
        { name: 'Storage Solutions', href: 'http://localhost:3000/api/products/byCategory/9' },
      ],
    },
  ],
  pages: [
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/aboutus' },
    { name: 'Contact Us', href: '/contactus' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const user = useSelector((state)=> state.user.value);
  const uid = localStorage.getItem('uid');
  const userId = uid;
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const Dispatch = useDispatch();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  const handleAuth = () => {
    Dispatch(logout());
    window.location.reload();
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/');
  }

  const [open, setOpen] = useState(false);
  const [popen, setpOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };
  const toggleProfile = () => {
    setpOpen(!popen);
    
  };
  const setprofile = () => {
    setpOpen(false);
  }

  useEffect(() => {
    const userId = localStorage.getItem('uid');
    const fetchData = async () => {
      const bearerToken = localStorage.getItem('token');
      try {
        // Fetch user's cart data
        const cartResponse = await axios.get(`http://localhost:8080/api/users/${userId}/cart`, {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        });
  
        if (!cartResponse.ok) {
          throw new Error(`HTTP error! Status: ${cartResponse.status}`);
        }
  
        const cartData = cartResponse.data;
        console.log('Cart Items Data:', cartData);
  
        const cartItemsArray = cartData.cartItems?.length ? cartData.cartItems : [];
        setCartItems(cartItemsArray);
  
        // Fetch category data
        const categoryResponse = await axios.get('http://localhost:8080/api/productcategory');
        if (!categoryResponse.ok) {
          throw new Error(`HTTP error! Status: ${categoryResponse.status}`);
        }
  
        const categoryData = categoryResponse.data;
        console.log('Category Data:', categoryData);
  
        setCategories(categoryData);
  
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [userId]);
  
  
  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 pt-5 pb-2 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                <div className="flow-root">
                  <a href="/" className="-m-2 p-2 block font-medium text-gray-900">
                    Home
                  </a>
                </div>
                <div className="flow-root">
                  <a href="/products" className="-m-2 p-2 block font-medium text-gray-900">
                    Products
                  </a>
                </div>
                <div className="flow-root">
                  <a href="/category" className="-m-2 p-2 block font-medium text-gray-900">
                    Category
                  </a>
                </div>
                <div className="flow-root">
                  <a href="/aboutus" className="-m-2 p-2 block font-medium text-gray-900">
                    About Us
                  </a>
                </div>
                <div className="flow-root">
                  <a href="/ContactUs" className="-m-2 p-2 block font-medium text-gray-900">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <header className="relative">
        <nav aria-label="Top">
          {/* Top navigation */}
          <div className="bg-gray-900">
            <div className="max-w-7xl mx-auto h-10 px-4 flex items-center justify-between sm:px-6 lg:px-8">
              {/* Currency selector */}
              <form className="hidden lg:block lg:flex-1">
              </form>
              <p className="flex-1 text-center text-sm font-medium text-white lg:flex-none overflow-hidden">
      <span className="animate-marquee">
        Get free delivery on orders over ₹1000
      </span>
    </p>
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
              </div>
            </div>
          </div>

          {/* Secondary navigation */}
          <div className="bg-white ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
              <div className="border-b border-gray-200 ">
                <div className="h-16 flex items-center justify-between">
                  {/* Logo (lg+) */}
                  <div className="hidden lg:flex lg:items-center float-left mr-12">
                    <a href="/">
                      <img
                        className="h-16 w-auto"
                        src={image}
                        alt="Essentia"
                      />
                    </a>
                  </div>
                  <div className="hidden h-full lg:flex text-decoration-line: none focus:outline-none">
                    {/* Mega menus */}
                    <Popover.Group className="ml-8">
                      <div className="h-full flex justify-center space-x-8 focus:outline-none">
                      {navigation.page.map((page) => (
                        <a
                          key={page.name}
                          href={page.href}
                          className="flex items-center text-sm font-medium text-gray-800 hover:text-gray-400 focus:outline-none"
                        >
                          {page.name}
                        </a>
                      ))}
                        {navigation.category.map((category, categoryIdx) => (
                          <Popover key={category.name} className="flex-absolute top-0 inset-x-0 text-gray-500 sm:text-sm z-50 mt-[16.5%] focus:outline-none">
                            {({ open }) => (
                              <>
                                <div className="relative flex">
                                  <Popover.Button
                                    className={classNames(
                                      open
                                        ? 'border-transparent focus:outline-none text-decoration-none'
                                        : 'border-transparent focus:outline-none text-gray-800 hover:text-gray-400',
                                      'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                                    )}
                                  >
                                    {category.name}
                                  </Popover.Button>
                                </div>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="opacity-0"
                                  enterTo="opacity-100"
                                  leave="transition ease-in duration-150"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Popover.Panel className="absolute top-full inset-x-0 text-gray-500 sm:text-sm">
                                    {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                    <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                                    <div className="relative bg-white">
                                      <div className="max-w-7xl mx-auto px-8">
                                        <div className="grid grid-cols-2 items-start gap-y-10 gap-x-8 pt-10 pb-12">
                                          <div className="grid grid-cols-2 gap-y-10 gap-x-8">
                                            <div>
                                              <p
                                                id={`desktop-featured-heading-${categoryIdx}`}
                                                className="font-medium text-gray-900"
                                              >
                                                Featured
                                              </p>
                                              <ul
                                                role="list"
                                                aria-labelledby={`desktop-featured-heading-${categoryIdx}`}
                                                className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                              >
                                              {category.featured && category.featured.map((item) => (
                                                <li key={item.name} className="flex">
                                                  {/* Use Link from react-router-dom to handle navigation */}
                                                  <a href={`/api/products/byCategory/${item.id}`} className="hover:text-gray-800">
                                                    {item.name}
                                                    </a>
                                                </li>
                                              ))}
                                              </ul>
                                            </div>
                                            <div>
                                              <p id="desktop-categories-heading" className="font-medium text-gray-900">
                                                Categories
                                              </p>
                                              <ul
                                                role="list"
                                                aria-labelledby="desktop-categories-heading"
                                                className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                              >
                                                {category.categories && category.categories.map((item) => (
                                                  <li key={item.name} className="flex">
                                                    <a href={`/api/products/byCategory/${item.id}`} className="hover:text-gray-800">
                                                      {item.name}
                                                    </a>
                                                  </li>
                                                ))}
                                              </ul>
                                            </div>
                                          </div>
                                          <div className="grid grid-cols-2 gap-y-10 gap-x-8">
                                            <div>
                                              <p id="desktop-collection-heading" className="font-medium text-gray-900">
                                                Collection
                                              </p>
                                              <ul
                                                role="list"
                                                aria-labelledby="desktop-collection-heading"
                                                className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                              >
                                                {category.collection && category.collection.map((item) => (
                                                  <li key={item.name} className="flex">
                                                    <a href={`/api/products/byCategory/${item.id}`} className="hover:text-gray-800">
                                                      {item.name}
                                                    </a>
                                                  </li>
                                                ))}
                                              </ul>
                                            </div>

                                            <div>
                                              <p id="desktop-brand-heading" className="font-medium text-gray-900">
                                                Brands
                                              </p>
                                              <ul
                                                role="list"
                                                aria-labelledby="desktop-brand-heading"
                                                className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                              >
                                                {category.brands && category.brands.map((item) => (
                                                  <li key={item.name} className="flex">
                                                    <a href={`/api/products/byCategory/${item.id}`} className="hover:text-gray-800">
                                                      {item.name}
                                                    </a>
                                                  </li>
                                                ))}
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Popover.Panel>
                                </Transition>
                              </>
                            )}
                          </Popover>
                        ))}
                      </div>
                    </Popover.Group>
                    </div>
               <div className="hidden h-full lg:flex">
                    <Popover.Group className="ml-8">
                      <div className="h-full flex justify-center space-x-8">
                        {navigation.pages.map((page) => (
                          <a
                            key={page.name}
                            href={page.href}
                            className="flex items-center text-sm font-medium text-gray-800 hover:text-gray-400"
                          >
                            {page.name}
                          </a>
                        ))}
                      </div>
                    </Popover.Group>
                  </div>
                  <div className="flex-1 flex items-center lg:hidden">
                    <button
                      type="button"
                      className="-ml-2 bg-white p-2 rounded-md text-gray-400"
                      onClick={() => setOpen(true)}
                    >
                      <span className="sr-only">Open menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <a href="/" className="lg:hidden">
                    <span className="sr-only">Workflow</span>
                    <img
                      src={image}
                      alt=""
                      className="h-8 w-auto"
                    />
                  </a>
                  <div className="flex-1 flex items-center justify-end">
                    <div className="flex items-center lg:ml-8">
                      <div className="flex space-x-8">
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="relative ">
                          <div className="flex flex-row space-x-10">
                            <button
                            onClick={toggleProfile}
                              type="button"
                              className="flex-shrink-0 text-gray-400 hover:text-gray-500 font-blackh-6 w-6 relative flex text-sm "
                              id="user-menu-button"
                              aria-expanded="false"
                              aria-haspopup="true"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
                            </button>
                  </div>
                        {user.name ? (
                          <div
                            className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                              popen ? "block" : "hidden"
                            }`}
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="user-menu-button"
                            tabIndex="-20"
                          >
                            <h1
                              className="block px-4 py-2 text-sm text-gray-700"
                              role="menuitem"
                              tabIndex="-1"
                              id="user-menu-item-0"
                            >
                              Hello <span className="font-bold">{user.name}</span>
                            </h1>
                            <Link
                              to="#"
                              className="block px-4 py-2 text-sm text-gray-700"
                              role="menuitem"
                              tabIndex="-1"
                              id="user-menu-item-2"
                              onClick={handleAuth}
                            >
                              Sign out
                            </Link>
                          </div>
                        ) : (
                          <div
                            className={`absolute right-0 z-10 mt-2 w-[250px] origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                              popen ? "block" : "hidden"
                            }`}
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="user-menu-button"
                            tabIndex="-20"
                          >
                            <h1
                              className="block px-4 py-2 text-sm text-black font-bold"
                              role="menuitem"
                              tabIndex="-1"
                              id="user-menu-item-0"
                            >
                              Welcome
                            </h1>
                            <p
                              className="text-s block px-4 py-1 text-sm text-black font-light -tracking-[-1px]]"
                              role="definition"
                              tabIndex="-1"
                            >
                              To access Account and Manage Orders
                            </p>
                            <Link
                              to="/login"
                              className="block px-4 py-2 text-sm text-gray-700"
                              role="menuitem"
                              tabIndex="-1"
                              id="user-menu-item-0"
                            >
                              <button className='bg-transparent text-black font-semibold py-2 px-4 border-[3px] hover:bg-gray-100 border-gray-200 hover:transition-border-color hover:transition-timing-function:ease-in-out hover:transition-duration:200ms hover:border-black'>
                                Login/SignUp
                              </button>
                            </Link>
                          </div>
                        )}                     
                      </div>
                      </div>
                      </div>
                      <span className="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true" />
                      <div className="flow-root">
                        <a href="/cart" className="group -m-2 p-2 flex items-center">
                          <ShoppingCartIcon
                            className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}