"use client"
import { fetchpayments, fetchuser, initiate } from '@/actions/useractions'
import { useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const PaymentPage = ({ username }) => {
  const { data: session } = useSession()

  const [paymentform, setPaymentform] = useState({ name: "", message: "", amount: "" })
  const [currentUser, setcurrentUser] = useState({})
  const [payments, setPayments] = useState([])
  const searchParams = useSearchParams()
  const router = useRouter()


  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    if (searchParams.get("paymentdone") == "true") {
      toast('Thanks for your donation!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
    router.push(`/${username}`)


  }, [])


  const handleChange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
  }

  const getData = async () => {
    let u = await fetchuser(username)
    setcurrentUser(u)
    let dbpayments = await fetchpayments(username)
    setPayments(dbpayments)
  }

  useEffect(() => {


    if (!session) {
      router.push('/')
    }
    else {
      getData()
    }
  }, [])


  const pay = async (amount) => {
    // Get the order Id 
    let a = await initiate(amount, username, paymentform)
    let orderId = a.id
    var options = {
      "key": process.env.NEXT_PUBLIC_KEY_ID, // Enter the Key ID generated from the Dashboard
      "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Get Me A Chai Or Coffee",
      "description": "Test Transaction",
      "image": "tea.gif",
      "order_id": orderId,
      "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      "prefill": {
        "name": "vivek",
        "email": "vivek.vini@example.com",
        "contact": "9000090000"
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#3399cc"
      }
    }

    var rzp1 = new Razorpay(options);
    rzp1.open();
  }


  return (

    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <div className='cover w-full bg-red-50 relative'>
        <img className='object-cover w-full h-48 md:h-[350px]' src="/bg-cafe_1.webp" alt="Cafe background" />
        <div className='absolute -bottom-20 left-1/2 transform -translate-x-1/2 border-white overflow-hidden border-2 rounded-full size-24 md:size-36'>
          <img className='rounded-full object-cover size-full' src="/avatar.gif" alt="Avatar" />
        </div>
      </div>

      <div className="info flex justify-center items-center min-h-[100vh] pt-32 pb-20 flex-col px-4 gap-3 text-center">
        <div className='font-bold text-xl md:text-2xl'>
          @{username}
        </div>
        <div className='text-slate-500 text-sm md:text-base'>
          Let’s help {username} get a chai!
        </div>
        <div className='text-slate-500 text-sm md:text-base'>
          {payments.length} Payments · ₹{payments.reduce((a, b) => a + b.amount, 0)} raised
        </div>

        <div className="payment flex flex-col lg:flex-row gap-6 w-full max-w-[1000px] mt-10">
          {/* Supporters leaderboard */}
          <div className="supporters w-full lg:w-1/2 bg-slate-900 rounded-lg text-white px-4 py-6 md:px-6 md:py-8">
            <h2 className='text-xl md:text-2xl font-bold mb-4'>Top 10 Supporters</h2>
            <ul className='text-base'>
              {payments.length === 0 && <li>No payments yet</li>}
              {payments.map((p, i) => (
                <li key={i} className='my-4 flex gap-3 items-start'>
                  <img width={36} className="rounded-full" src="/avatar.gif" alt="user avatar" />
                  <span className='text-left'>
                    <strong>{p.name}</strong> donated <span className='font-bold'>₹{p.amount}</span><br />
                    <span className="italic text-sm text-slate-300">{p.message}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Make payment form */}
          <div className="makePayment w-full lg:w-1/2 bg-slate-900 rounded-lg text-white px-4 py-6 md:px-6 md:py-8">
            <h2 className='text-xl md:text-2xl font-bold mb-4'>Make a Payment</h2>
            <div className='flex flex-col gap-3'>
              <input
                onChange={handleChange}
                value={paymentform.name}
                name='name'
                type="text"
                className='w-full p-3 rounded-lg bg-slate-800'
                placeholder='Enter Name'
              />
              <input
                onChange={handleChange}
                value={paymentform.message}
                name='message'
                type="text"
                className='w-full p-3 rounded-lg bg-slate-800'
                placeholder='Enter Message'
              />
              <input
                onChange={handleChange}
                value={paymentform.amount}
                name="amount"
                type="number"
                className='w-full p-3 rounded-lg bg-slate-800'
                placeholder='Enter Amount'
              />
              <button
                onClick={() => pay(Number.parseInt(paymentform.amount) * 100)}
                type="button"
                className="bg-gradient-to-br from-purple-900 to-blue-900 hover:from-purple-700 hover:to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:from-slate-600"
                disabled={
                  paymentform.name?.length < 3 ||
                  paymentform.message?.length < 4 ||
                  paymentform.amount?.length < 1
                }
              >
                Pay
              </button>
            </div>

            {/* Quick pay buttons */}
            <div className='flex flex-wrap gap-3 mt-6 justify-center'>
              {[10, 20, 30].map((amt) => (
                <button
                  key={amt}
                  onClick={() => pay(amt * 100)}
                  className='bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg text-sm'
                >
                  Pay ₹{amt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default PaymentPage
