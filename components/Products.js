"use client"
import Link from 'next/link';
const services = [

  {

    step: "01",

    name: "Coffee Premix Tin Jars",

    imageUrl:

      "/coffee-jar.webp",

    description:

      "refreshes Your Mind With Low Calories.",

  },

  {

    step: "02",

    name: "Tea Premix Tin Jars",

    imageUrl:

      "/tea-mix.webp",

    description:

      "Taste Which You Like & Health Which You Want",

  },

  {

    step: "03",

    name: "Original kadak Chai",

    imageUrl:

      "/original.png",

    description:

      "Sip the bold essence of our Original Kadak Chai, an invigorating brew inspired by the streets of India.",

  },

];



const Products = () => {

  return (

    <section className="py-16 mx-auto sm:py-20">

      <div className="mx-auto flex justify-center object-center px-4 py-16 sm:py-24 lg:max-w-7xl">

        <div className="flex items-center justify-center object-center flex-col gap-12 sm:gap-16">

          <h2 className="text-4xl  font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Services
          </h2>

          <div className="mx-auto grid gap-10 space-y-10 md:space-y-0 sm:gap-16 lg:grid-cols-3">

            {services.map((service) => (

              <div key={service.name} className="group h-96 w-96 [perspective:1000px]">

                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                  {/* { Front Face /}  */}

                  <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">

                    {service.imageUrl && (

                      <img

                        className="object-cover cursor-pointer object-left h-full w-full rounded-xl"

                        src={service.imageUrl}

                        alt={service.name}

                        width={320}

                        height={320}

                      />

                    )}

                    <p className="md:my-6 text-2xl">{service.name}</p>

                  </div>

                  {/* {/ Back Face} */}

                  <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">

                    <div className="flex min-h-full flex-col items-center justify-center">

                      <h2 className="text-2xl font-bold mb-4">{service.name}</h2>

                      <p className="text-lg text-pretty text-center mb-4">

                        {service.description}

                      </p>

                      <a href="tel:555-555-5555" className="inline-flex">

                        <button className="my-2 bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 w-auto rounded-full inline-flex items-center">

                          <span>Schedule Service</span>

                        </button>

                      </a>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

        <div>
        </div>

      </div>
      <div className="bg-white h-1 opacity-10 ">
      </div>
      <div className="mx-auto flex justify-center object-center px-4 py-16 sm:py-24 lg:max-w-7xl">

        <div className="flex items-center justify-center object-center flex-col gap-12 sm:gap-5">

          <h2 className="text-4xl  font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Products
          </h2>
          <img src="/logo.webp" alt="" />
          <p className="">There are many variations of our products.</p>
          <div className="  cursor-pointer grid gap-10 space-y-10 md:space-y-0 sm:gap-20  sm:grid-cols-2 lg:grid-cols-3 ">
            <div className="card flex justify-center items-center flex-col sm:gap-1 group h-96 w-60 rounded-xl   [perspective:1000px]">
              <img src="/original.png"
                className="  object-cover cursor-pointer object-center h-60 w-60 rounded-xl"
              />
              <h6 className="text-base ">Signature Chai</h6>
              <p className="text-sm  text-gray-400">Tea</p>
              <p className=" text-green-400">₹70.00</p>
              <button className="my-2 bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 w-auto rounded-full inline-flex items-center">
                <Link href={"/dashboard"}><span>Buy Now!</span></Link>
              </button>
            </div>
            <div className="card flex justify-center items-center flex-col sm:gap-1 group h-96 w-60 rounded-xl   [perspective:1000px]">
              <img src="/Indian.png"
                className="  object-cover cursor-pointer object-center h-60 w-60 rounded-xl"
              />
              <h6 className="text-base ">Indian Masala Chai</h6>
              <p className="text-sm  text-gray-400">Tea</p>
              <p className=" text-green-400">₹50.00</p>
              <button className="my-2 bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 w-auto rounded-full inline-flex items-center">
                <Link href={"/dashboard"}><span>Buy Now!</span></Link>
              </button>
            </div>
            <div className="card flex justify-center items-center flex-col sm:gap-1 group h-96 w-60 rounded-xl   [perspective:1000px]">
              <img src="/coffee-jar.webp"
                className="  object-cover cursor-pointer object-center h-60 w-60 rounded-xl"
              />
              <h6 className="text-base ">Royal Cup Coffee</h6>
              <p className="text-sm  text-gray-400">Coffee</p>
              <p className=" text-green-400">₹100.00</p>
              <button className="my-2 bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 w-auto rounded-full inline-flex items-center">
                <Link href={"/dashboard"}><span>Buy Now!</span></Link>
              </button>
            </div>
            <div className="card flex justify-center items-center flex-col sm:gap-1 group h-96 w-60 rounded-xl   [perspective:1000px]">
              <img src="/cappuccino.png"
                className="  object-cover cursor-pointer object-center h-60 w-60 rounded-xl "
              />
              <h6 className="text-base ">Cappuccino</h6>
              <p className="text-sm  text-gray-400">Coffee</p>
              <p className=" text-green-400">₹120.00</p>
              <button className="my-2 bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 w-auto rounded-full inline-flex items-center">
                <Link href={"/dashboard"}><span>Buy Now!</span></Link>
              </button>
            </div>
            <div className="card flex justify-center items-center flex-col sm:gap-1 group h-96 w-60 rounded-xl   [perspective:1000px]">
              <img src="/banarasi.png"
                className="  object-cover cursor-pointer object-center h-60 w-60 rounded-xl"
              />
              <h6 className="text-base ">Banarasi Paan Chai</h6>
              <p className="text-sm  text-gray-400">Tea</p>
              <p className=" text-green-400">₹150.00</p>
              <button className="my-2 bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 w-auto rounded-full inline-flex items-center">
                <Link href={"/dashboard"}><span>Buy Now!</span></Link>
              </button>
            </div>
            <div className="card flex justify-center items-center flex-col sm:gap-1 group h-96 w-60 rounded-xl   [perspective:1000px]">
              <img src="/chai.png"
                className="  object-cover cursor-pointer object-center h-60 w-60 rounded-xl "
              />
              <h6 className="text-base ">Milk tea</h6>
              <p className="text-sm  text-gray-400">Tea</p>
              <p className=" text-green-400">₹20.00</p>
              <button className="my-2 bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 w-auto rounded-full inline-flex items-center">
                <Link href={"/dashboard"}><span>Buy Now!</span></Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10 ">
      </div>
      <div className="mx-auto flex justify-center object-center px-4 py-16 sm:py-24 lg:max-w-7xl">

        <div className="flex items-center justify-center object-center flex-col gap-12 sm:gap-5">

          <h2 className="text-4xl  font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Featured Products
          </h2>
          <img src="/logo.webp" alt="" />
          <p className="">There are many variations of our products.</p>
          <div className="  cursor-pointer grid gap-10 space-y-10 md:space-y-0 sm:gap-20 sm:grid-cols-2 lg:grid-cols-3 ">
            <div className="card flex justify-center items-center flex-col sm:gap-1 group h-96 w-60 rounded-xl   [perspective:1000px]">
              <img src="/box1.webp"
                className="  object-cover cursor-pointer object-center h-60 w-60 rounded-xl"
              />
              <h6 className="text-base ">Amruttulya cardamom tea</h6>
              <p className="text-sm  text-gray-400">Tea</p>
              <p className=" text-green-400">₹249.00</p>
              <button className="  my-2 bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 w-auto rounded-full inline-flex items-center" >
                <Link href={"/dashboard"}><span>Buy Now!</span></Link>
              </button>
            </div>
            <div className="card flex justify-center items-center flex-col sm:gap-1 group h-96 w-60 rounded-xl   [perspective:1000px]">
              <img src="/box2.webp"
                className="  object-cover cursor-pointer object-center h-60 w-60 rounded-xl"
              />
              <h6 className="text-base ">Jaggery Basundi Tea</h6>
              <p className="text-sm  text-gray-400">Tea</p>
              <p className=" text-green-400">₹249.00</p>
              <button className="my-2 bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 w-auto rounded-full inline-flex items-center">
                <Link href={"/dashboard"}><span>Buy Now!</span></Link>
              </button>
            </div>
            <div className="card flex justify-center items-center flex-col sm:gap-1 group h-96 w-60 rounded-xl   [perspective:1000px]">
              <img src="/box3.webp"
                className="  object-cover cursor-pointer object-center h-60 w-60 rounded-xl"
              />
              <h6 className="text-base ">Jaggery Cardamom Tea</h6>
              <p className="text-sm  text-gray-400">Tea</p>
              <p className=" text-green-400">₹249.00</p>
              <button className="my-2 bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 w-auto rounded-full inline-flex items-center">
                <Link href={"/dashboard"}><span>Buy Now!</span></Link>
              </button>
            </div>
            <div className="card flex justify-center items-center flex-col sm:gap-1 group h-96 w-60 rounded-xl   [perspective:1000px]">
              <img src="/box4.webp"
                className="  object-cover cursor-pointer object-center h-60 w-60 rounded-xl"
              />
              <h6 className="text-base ">Jaggery Hot Coffee</h6>
              <p className="text-sm  text-gray-400">Coffee</p>
              <p className=" text-green-400">₹249.00</p>
              <button className="my-2 bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 w-auto rounded-full inline-flex items-center">
                <Link href={"/dashboard"}><span>Buy Now!</span></Link>
              </button>
            </div>
            <div className="card flex justify-center items-center flex-col sm:gap-1 group h-96 w-60 rounded-xl   [perspective:1000px]">
              <img src="/box5.webp"
                className="  object-cover cursor-pointer object-center h-60 w-60 rounded-xl"
              />
              <h6 className="text-base ">Jaggery Lemon Tea</h6>
              <p className="text-sm  text-gray-400">Tea</p>
              <p className=" text-green-400">₹249.00</p>
              <button className="my-2 bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 w-auto rounded-full inline-flex items-center">
                <Link href={"/dashboard"}><span>Buy Now!</span></Link>
              </button>
            </div>
            <div className="card flex justify-center items-center flex-col sm:gap-1 group h-96 w-60 rounded-xl   [perspective:1000px]">
              <img src="/box6.webp"
                className="  object-cover cursor-pointer object-center h-60 w-60 rounded-xl"
              />
              <h6 className="text-base ">Jaggery Plain Tea</h6>
              <p className="text-sm  text-gray-400">Tea</p>
              <p className=" text-green-400">₹249.00</p>
              <button className="my-2 bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 w-auto rounded-full inline-flex items-center">
                <Link href={"/dashboard"}><span>Buy Now!</span></Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10 ">
      </div>

      {/* <div className="mx-auto flex justify-center object-center px-4 py-16 sm:py-24 lg:max-w-7xl">

        <div className="flex items-center justify-center object-center flex-col gap-12 sm:gap-5">

          <h2 className="text-4xl  font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          How It Works
          </h2>
          <img src="/logo.webp" alt="" />
          <p className="">Advantages of Organic Jaggery.</p>

          <div className=" cursor-pointer grid gap-10 space-y-10 md:space-y-0 sm:gap-20 lg:grid-cols-3 ">
          <div className=" flex items-end  flex-col sm:gap-1 group h-screen w-96 rounded-xl  3   [perspective:1000px]">
            
              <div className="flex mt-40 flex-row items-center gap-6 ">
                <h3 className="text-2xl ">Improve digestion</h3>
              <Link href={"/products"}> 
                <img src="/digestion.png" alt="" /></Link>
              
            </div>
              <div className="flex mt-20 flex-row items-center gap-6 ">
                <h3 className="text-2xl ">Useful for joint pain</h3>
            <Link href={"/products"}> 
              <img src="/joint.png" alt="" /></Link>
              
            </div>
              <div className="flex mt-20 flex-row items-center gap-6 ">
                <h3 className="text-2xl ">Increases immune system</h3>
              <Link href={"/products"}> 
                <img src="/immune.png" alt="" /></Link>
              
            </div>
              <div className="flex mt-20 flex-row items-center gap-6 ">
                <h3 className="text-2xl ">Reduces pain during periods</h3>
              <Link href={"/products"}> 
                <img src="/pain.png" alt="" /></Link>
              
            </div>
            </div>
          <div className="flex justify-center items-center flex-col sm:gap-1 group h-screen w-96 rounded-xl  3  [perspective:1000px]">
            <img src="/box7.webp" alt="" />
            </div>
          <div className=" flex items-start flex-col sm:gap-1 group h-screen w-96 rounded-xl  3   [perspective:1000px]">
          <div className="flex mt-40 flex-row items-center gap-6 ">
              <Link href={"/products"}> 
                <img src="/reduce.png" alt="" /></Link>
                <h3 className="text-2xl ">Helps to reduce weight</h3>
              
            </div>
              <div className="flex mt-20 flex-row items-center gap-6 ">
            <Link href={"/products"}> 
              <img src="/weakness.png" alt="" /></Link>
                <h3 className="text-2xl ">Helps to relieve weakness</h3>
              
            </div>
              <div className="flex mt-20 flex-row items-center gap-6 ">
              <Link href={"/products"}> 
                <img src="/skin.png" alt="" /></Link>
                <h3 className="text-2xl ">Beneficial for skin & hair</h3>
              
            </div>
              <div className="flex mt-20 flex-row items-center gap-6 ">
              <Link href={"/products"}> 
                <img src="/anemia.png" alt="" /></Link>
                <h3 className="text-2xl ">Helps in anemia & BP</h3>
              
            </div>
            </div>
            </div>
          </div>

      </div> */}
      <div className="mx-auto px-4 py-16 sm:py-24 lg:max-w-7xl text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-12">
          How It Works
        </h2>

        <div className="flex justify-between items-center gap-5 w-full">

   
          <div className="flex flex-col gap-8 w-full">
            {[
              { text: "Improve digestion", icon: "/digestion.png" },
              { text: "Useful for joint pain", icon: "/joint.png" },
              { text: "Increases immune system", icon: "/immune.png" },
              { text: "Reduces pain during periods", icon: "/pain.png" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between gap-4 text-white text-sm sm:text-base">
                <h3 className="flex-1 text-left">{item.text}</h3>
                <Link href="/products">
                  <img className="w-8 sm:w-10 h-auto" src={item.icon} alt={item.text} />
                </Link>
              </div>
            ))}
          </div>

  
          <div className="w-full flex justify-center items-center">
            <img className=" max-w-[250px]" src="/box7.webp" alt="box" />
          </div>

          <div className="flex flex-col gap-8 w-full">
            {[
              { text: "Helps to reduce weight", icon: "/reduce.png" },
              { text: "Helps to relieve weakness", icon: "/weakness.png" },
              { text: "Beneficial for skin & hair", icon: "/skin.png" },
              { text: "Helps in anemia & BP", icon: "/anemia.png" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between gap-4 text-white text-sm sm:text-base">
                <Link href="/products">
                  <img className="w-8 sm:w-10 h-auto" src={item.icon} alt={item.text} />
                </Link>
                <h3 className="flex-1 text-right">{item.text}</h3>
              </div>
            ))}
          </div>

        </div>
      </div>



    </section>
  );

};



export default Products;