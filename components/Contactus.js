"use client"
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const Contactus = () => {


  const { data: session, update } = useSession()
  const router = useRouter()
  // const [form, setForm] = useState({})
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '', // default empty value
  });
  


  // const handleChange = (e) => {
  //   setform({ ...form, [e.target.name]: e.target.value })
  // }
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


  // const handleSubmit = async (e) => {


  //   toast('Message sent successfully', {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //     transition: Bounce,
  //   });
  // }

  const handleSubmit = async (e) => {
    try {
      const res = await fetch('/api/contactus', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        toast('Message sent successfully', {
          position: "top-right",
          autoClose: 5000,
          theme: "light",
          transition: Bounce,
        });
        setForm({
          name: "",
          email: "",
          phone: "",
          message: ""
        });

      } else {
        toast.error('Failed to send message');
      }
    } catch (err) {
      toast.error('Something went wrong');
      console.error(err);
    }
  };


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
      <section>
        <form action={handleSubmit}>
          {/* <div className="contact flex justify-center items-center flex-col gap-6 ">
            <h1 className="font-bold text-5xl mt-32">GET IN TOUCH </h1>
            <p className="break-words">you can call us in working time or visit our office. All mails will get the response within 24 hours. Love to hear from you!</p>
            <div className="flex flex-row gap-1">
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z" />
              </svg><p>Phone:916389416687</p>
            </div>
            <div className="flex flex-row gap-1">
              <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
              </svg>

              <p>Email:vivekvis9565@gmail.com</p>
            </div>
            <div className="flex flex-row gap-1">
              <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z" />
              </svg> <p>Address:Vision College Of Management, Maharajpur, Hathipur, Kanpur Nagar-208007</p>
            </div>
            <div className="flex flex-row gap-32">
              <div className="flex flex-col gap-7  ">
                <input value={form.name} name="name" type="text" placeholder="Your Name" onChange={handleChange} className="rounded w-96 h-12 p-2  text-slate-600 outline-none text-2xl  font-sans" />
                <input value={form.email} name="email" type="text" placeholder="Your Email" onChange={handleChange} className="rounded w-96 h-12 p-2 text-slate-600 outline-none text-2xl font-sans" />
                <input value={form.phone} name="phone" type="text" placeholder="Your Phone" onChange={handleChange} className="rounded w-96 h-12 p-2 text-slate-600 outline-none text-2xl font-sans" />
              </div>
              <textarea  value={form.message} onChange={handleChange} name="message" id="message" type="text" placeholder="Your Message" className="w-96 h-48 p-2 rounded font-sans outline-none text-slate-600"></textarea>
            </div>
            <button name="button" type="submit" className="font-bold text-xl bg-red-600 rounded m-2 p-2  disabled:bg-slate-600 disabled:from-purple-100  " disabled={form.name?.length < 5 || form.email?.length < 5 || form.phone?.length < 10 || form.message?.length < 20} > SEND MESSAGE</button>
            
          </div> */}
          <div className="contact flex justify-center items-center flex-col gap-6 px-4 sm:px-8 md:px-12 lg:px-16">
            <h1 className="font-bold text-5xl mt-32 text-center">GET IN TOUCH</h1>
            <p className="text-center break-words sm:text-lg md:text-xl">
              You can call us during working hours or visit our office. All mails will get a response within 24 hours. Love to hear from you!
            </p>

            <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-8 mt-6">
              {/* Phone */}
              <div className="flex flex-row gap-2 items-center justify-center">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z" />
                </svg>
                <p className="text-sm sm:text-base">Phone: 916389416687</p>
              </div>

              {/* Email */}
              <div className="flex flex-row gap-2 items-center justify-center">
                <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                </svg>
                <p className="text-sm sm:text-base">Email: vivekvis9565@gmail.com</p>
              </div>

              {/* Address */}
              <div className="flex flex-row gap-2 items-center justify-center">
                <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z" />
                </svg>
                <p className="text-sm sm:text-base">Address: Vision College Of Management, Maharajpur, Hathipur, Kanpur Nagar-208007</p>
              </div>
            </div>

            {/* Form Section */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full mt-8">
              <div className="flex flex-col gap-6 w-full sm:w-1/2">
                <input
                  value={form.name}
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  onChange={handleChange}
                  className="rounded w-full sm:w-96 h-12 p-2 text-slate-600 outline-none text-lg sm:text-xl font-sans"
                />
                <input
                  value={form.email}
                  name="email"
                  type="text"
                  placeholder="Your Email"
                  onChange={handleChange}
                  className="rounded w-full sm:w-96 h-12 p-2 text-slate-600 outline-none text-lg sm:text-xl font-sans"
                />
                <input
                  value={form.phone}
                  name="phone"
                  type="text"
                  placeholder="Your Phone"
                  onChange={handleChange}
                  className="rounded w-full sm:w-96 h-12 p-2 text-slate-600 outline-none text-lg sm:text-xl font-sans"
                />
              </div>

              <textarea
                value={form.message}
                onChange={handleChange}
                name="message"
                id="message"
                placeholder="Your Message"
                className="w-full sm:w-96 h-48 p-2 rounded font-sans outline-none text-slate-600"
              />
            </div>
            <button
              name="button"
              type="submit"
              className={`font-bold text-xl bg-red-600 rounded m-2 p-2 ${form.message?.length < 20 ? 'disabled:bg-slate-600 disabled:opacity-50' : ''}`}
              disabled={form.message?.length < 20}
            >
              SEND MESSAGE
            </button>


          </div>


        </form>

      </section >
    </>
  )
}

export default Contactus