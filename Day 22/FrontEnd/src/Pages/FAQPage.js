import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
const faqs = [
  {
    question: "How do I register?",
    answer:
      "You can register by clicking on the Sign In section located at the top right corner on the home page. Please provide the required information in the form that appears and click on submit. We will send a one-time password (OTP) to verify your mobile number. Post verification, you can start shopping on Essentia.",
  },
  {
    question: "Do I need to register before shopping on Essentia?",
    answer:
      "Yes, you do need to register before shopping with us. However, you can browse the website without registration. You are required to login or register while you checkout.",
  },
  {
    question: "How do I look for a particular Product?",
    answer:
      "You can search for a product by navigating through the category pages or by using search tab on the top of every page",
  },
  {
    question: "How do I know if I placed my order correctly?",
    answer:
      "Upon the successful completion of your order, an order confirmation e-mail and SMS containing your order details will be sent to your registered email ID and phone number.",
  },
  {
    question: "What are the various modes of payment I can use for shopping?",
    answer:
      "You can pay for your order using the following modes of payment: " +
      "UPI, " +
      "Credit Card / Debit Card, " +
      "Netbanking, " +
      "e-Wallets, " +
      "Meal Cards, " +
      "Pay Later, " +
      "Cash on Delivery.",
  },
  {
    question: "How can I check for an expected date of delivery of an order I placed?",
    answer:
      "You can check for an estimated date of delivery on the product description page by entering your pin code. Date of delivery may vary from product to product and is also dependent on the pin code of the delivery address. We try our best to delivery your orders as early as possible.",
  },
  {
    question: "What is delivery fee? Why am I being charged?",
    answer:
      "A Delivery fee is the amount that is charged to a customer, aside from the order total, to cover shipping and handling costs. This fee covers the cost of fulfilling the given customer's order, including storage costs, packaging, shipping etc. We are charging a nominal delivery fee of Rs.40 on all the orders less than cart value of Rs.250 for selected categories in Essentia. We are not charging any delivery fees for orders above Rs.250."
      +"\n"+
      "As a goodwill gesture to our new customer, we do not charge any delivery fee for your first 3 orders.",
  },
  {
    question: "If I cancel/return the product, will I get back my delivery fees?",
    answer:
      "In case of complete cancellation of order, delivery fee will be refunded to you along with the product amount you paid. In case of return of already delivered product, delivery fee will not be refunded, only product amount will be refunded.",
  },
  {
    question: "Why is my delivery fee greater than my order amount? (Ex- Order value less than Rs.40, but my delivery fee is Rs. 40)",
    answer:
      "Any order which is less than Rs.250 a nominal delivery fee of Rs.40 is charged per order.",
  },
  {
    question: "Would I get the delivery fee back if my product is damaged, wrong item etc., and in non-returnable category?",
    answer:
      "Delivery fee will not be refunded, in case of both complete/partial return of order, as it is charged as a service for the order which has been already delivered.",
  },
  {
    question: "Why did I not receive a delivery fee refund on the partial cancellation?",
    answer:
      "Delivery fee is charged below threshold of Rs. 250. Considering post partial cancellation threshold still remains below Rs. 250, customer will need to pay the delivery charge for remaining order to be delivered, and only product amount will be refunded for partial cancellation.",
  },
  {
    question: "What should customers do in case they have become victim to any fraud?",
    answer:
      "General public and prospective customers are advised to immediately report any suspicious incident to the concerned authorities and to us. Please note that any person dealing with such fraudsters will be dealing at his/her own risk and responsibility. Essentia and/or any of its Group Company will not be responsible for any loss suffered or otherwise in this respect.",
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div>
       <Navbar/>
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
        <div className='pb-4'>
          <h2 className="text-center text-5xl font-extrabold text-gray-900 sm:text-5xl mt-[-1%]">Frequently asked questions</h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 pt-2 pl-4">Check out this section to get answers for all the frequently asked questions.</p>
          </div>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200 font-serif"> 
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400 mt-2">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
            <p></p>
          </dl>
          </div>
          <p className="text-center text-gray-600 textbase mt-12 mb-[-1%]">Didn’t find the answer you are looking for? <a href="/faq2" title="" className="font-medium text-yellow-500 transition-all duration-200 hover:text-yelllow-800 focus:text-yellow-700 hover:underline">Contact our support</a></p>
          </div>
          </div>
    <Footer/> 
    </div>
  )
}