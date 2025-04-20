"use client"
import { useSession } from "next-auth/react"
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession()

  return (
    <>
      <div className="flex justify-center flex-col gap-4 items-center text-white h-[44vh] px-5 md:px-0 text-xs md:text-base bg-cover bg-[url('/bg-cafe_1.webp')]">
        <div className="font-bold gap-6 md:gap-0  flex  md:text-3xl justify-center items-center text-3xl">Get Me a Chai Or Coffee <span><img className="invertImg" src="/coffee-t.gif" width={70} alt="Logo" /></span></div>
        <p className="text-center md:text-left font-bold">
          A crowdfunding platform for creators to fund their projects.

        </p>
        <p className="text-center md:text-center font-bold text-white">

          A place where your fans can buy you a chai or coffee. Unleash the power of your fans and get your projects funded.
        </p>
        <div className="btn">
          {!session && (
            <Link href={"/login"}>

              <button type="button" className=" button-86 ">Start Here</button>
            </Link>
          )}
          <Link href="/about">
            <button type="button" className=" button-86">Read More</button>
          </Link>

        </div>
      </div>
      <div className="bg-white h-1 opacity-10">
      </div>
      <div className="text-white container mx-auto pb-32 pt-14 px-10">
        <h2 className="text-3xl font-bold text-center mb-14">Your Fans can buy you a Chai or coffee</h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/man.gif" alt="images" />
            <p className="font-bold text-center">Fans want to help</p>
            <p className="  text-center">Your fans are available to support you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/coin.gif" alt="images" />
            <p className="font-bold text-center">Fans want to contribute</p>
            <p className=" text-center">Your fans are willing to contribute financially</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/group.gif" alt="images" />
            <p className="font-bold text-center">Fans want to collaborate</p>
            <p className=" text-center">Your fans are ready to collaborate with you</p>
          </div>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10">
      </div>
      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-center mb-14">Learn more about us</h2>

        {/* Signature Chai */}
        <div className="us flex flex-col md:flex-row justify-between items-center gap-10 mx-4 mb-24">
          <img className="w-full md:w-[500px] h-auto" src="/original.png" alt="Signature Chai" />
          <div className="flex flex-col mt-8 md:mt-0">
            <h2 className="text-white font-bold text-3xl md:text-5xl my-5 text-center md:text-left">Signature Chai</h2>
            <p className="text-center md:text-left">Experience the epitome of tea excellence with our Signature Chai, a carefully curated blend that transcends the ordinary. Our expertly crafted infusion combines the finest tea leaves with a symphony of aromatic spices, creating a sensory delight. The robust flavor profile unfolds layers of warmth, awakening the senses with every sip. From the first fragrant note to the lingering finish, our Signature Chai is a journey through exquisite taste. Elevate your tea ritual with this extraordinary blend, an embodiment of craftsmanship and passion, delivering a transformative tea experience that lingers on the palate and enriches your tea-loving moments.</p>
          </div>
        </div>

        {/* Indian Masala Chai */}
        <div className="us flex flex-col-reverse md:flex-row justify-between items-center gap-10 mx-4 mb-24">
          <div className="flex flex-col mt-8 md:mt-0">
            <h2 className="text-white font-bold text-3xl md:text-5xl my-5 text-center md:text-left">Indian Masala Chai</h2>
            <p className="text-center md:text-left">Embark on a sensory journey with our authentic Indian Masala Chai, a tribute to the rich tapestry of flavors that define traditional chai. Handcrafted with a symphony of robust Assam tea leaves, warm spices like cardamom, cinnamon, and cloves, our blend is an aromatic embrace of India&apos;s chai culture. Simmered to perfection, the infusion unfolds layers of bold flavor, offering a harmonious balance of spice and sweetness. Indulge in the warmth and nostalgia of this age-old recipe, an invitation to savor the heritage and warmth of Indian tea rituals. Experience the soulful comfort of our Indian Masala Chai in every rejuvenating cup.</p>
          </div>
          <img className="w-full md:w-[500px] h-auto" src="/Indian.png" alt="Indian Masala Chai" />
        </div>

        {/* Banarasi Paan Chai */}
        <div className="us flex flex-col md:flex-row justify-between items-center gap-10 mx-4 mb-24">
          <img className="w-full md:w-[500px] h-auto" src="/banarasi.png" alt="Banarasi Paan Chai" />
          <div className="flex flex-col mt-8 md:mt-0">
            <h2 className="text-white font-bold text-3xl md:text-5xl my-5 text-center md:text-left">Banarasi Paan Chai</h2>
            <p className="text-center md:text-left">Introducing our Banarasi Paan Chai, a unique fusion that pays homage to the vibrant flavors of Banaras. Immerse yourself in the essence of paan, blended with robust Assam tea leaves, creating a melody of tastes. Infused with betel leaves, cardamom, and sweetened with a hint of gulkand, this chai is an aromatic journey through the gullies of Banaras. The sweet and spicy notes harmonize, offering a symphony of flavors that captivates the palate. Indulge in the cultural richness of Banaras with each fragrant sip, as our Banarasi Paan Chai transcends tradition, delivering an extraordinary chai experience.</p>
          </div>
        </div>

        {/* Royal Cup Coffee */}
        <div className="us flex flex-col-reverse md:flex-row justify-between items-center gap-10 mx-4 mb-24">
          <div className="flex flex-col mt-8 md:mt-0">
            <h2 className="text-white font-bold text-3xl md:text-5xl my-5 text-center md:text-left">Royal Cup Coffee</h2>
            <p className="text-center md:text-left">Royal Cup is known for its terrific variety of exceptional, high-quality coffees and teas. Our dedication to developing long-term relationships with farmers and importers, along with our top-notch roasting capabilities, enables us to provide consistently superior products to our customers.In addition to our coffees and teas, we also offer a full range of beverage supplies. Royal Cup is the right call to meet all beverage supply needs, whether you’re searching for a distributor of wholesale fountain beverages and juices, dependable water-filtration systems or a reliable provider of sugar, creamer and other condiments.</p>
          </div>
          <img className="w-full md:w-[500px] h-auto" src="/coffee-jar.webp" alt="Royal Cup Coffee" />
        </div>
      </div>

    </>
  );
}
