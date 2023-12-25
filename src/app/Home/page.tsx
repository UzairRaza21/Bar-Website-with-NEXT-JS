import Image from "next/image"
import Link from "next/link"
// import {Home-page} from "@/app/Home/page"
import logo from "@/app/Images/logo.png"
import cover from "@/app/Images/cover.jpg"
import pic1 from "@/app/Images/pic-1.jpg"
import pic2 from "@/app/Images/pic-2.jpg"
import pic3 from "@/app/Images/pic-3.jpg"
import pic8 from "@/app/Images/pic-8.jpg"
import pic4 from "@/app/Images/pic-4.jpeg"
import pic5 from "@/app/Images/pic-5.jpg"
import pic6 from "@/app/Images/pic-6.jpg"
import pic7 from "@/app/Images/pic-7.jpeg"

export const Home = () => {
    return (
        <div>
            {/* Header */}
            <div>
            <Image className="absolute" src={cover} alt="cover"/>


            {/* Nav */}
            <div className="flex justify-around text-white relative ">
                <div className="flex items-center">
                <Image className="" src={logo} alt="Bar" width={40} height={30}/>
                <h1 className="text-[40px] font-medium">BAR</h1>
                <h1 className="text-sm ">121</h1>
                </div>

                <div className="flex items-center gap-x-24">
                <Link className="hover:text-yellow-300 text-sm" href="/Home">Home</Link>
                <Link className="hover:text-yellow-300 text-sm" href="/Menu">Menu</Link>
                <Link className="hover:text-yellow-300 text-sm" href="/About">About</Link>
                <Link className="hover:text-yellow-300 text-sm" href="/Contact">Contact</Link>
                </div>
            </div>


            {/* Hero-section */}
            <div className="text-white relative bg-black w-[600px] h-[800px] flex flex-col justify-center items-center gap-5 left-96 top-36 rounded-t-full">
                <Image className="shadow-white" src={logo} alt="bar" width={40} height={30} />
                <h2 className="text-4xl">121</h2>
                <h1 className="text-[160px] font-semibold">BAR</h1>
                <p>Local Bar with Live Music</p>
                <button className="w-[200px] h-[50px] bg-white text-black border hover:bg-black hover:text-white transition-all">Book a Table</button>
                <p>_______________________________</p>
                <p>Saddar Town, Florance Street, Karachi</p>
            </div>
            </div>

            {/* Section */}

            <div className="relative top-60 w-full bg-black text-white flex justify-evenly p-16">
                <div >
                    <h1 className="text-6xl font-semibold m-2">About</h1>
                    <h3 className="text-lg">Your neighborhood Institute</h3>
                </div>

                <p className="w-[500px] font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae fugiat consequuntur at eius neque illum dolorum provident tempora, accusantium et distinctio repellat suscipit quia cumque labore maiores, enim nisi voluptatibus.</p>
            </div>

            <div className="relative top-60 w-full bg-black text-white p-10">
                <h1 className="text-6xl font-semibold m-2 px-44">What&apos;s On</h1>
            </div>
            {/* Mid-Section */}
           <div className="relative top-60 bg-black text-white flex justify-center p-5">
            <Image  src={pic2} alt="Happy Hour" width={500}/>
            <div className="p-10 pt-32 w-96">
            <h3 className="text-xl m-3">Happy Hour</h3>
            <h1 className="text-5xl m-3">50% on all cocktails</h1>
            
            <p className="m-3">Monday to Thursday <br /> 3pm to 9pm</p>
            <button className="w-[200px] h-[50px] bg-white text-black border hover:bg-black hover:text-white transition-all m-3">Book a Table</button>
            </div>
           </div>

             {/* Mid-Section */}
           <div className="relative top-60 bg-black text-white flex justify-center p-5">
            <div className="p-10 pt-40 w-96">
            <h3 className="text-xl m-3">Friday Night Live</h3>
            <h1 className="text-5xl m-3">Atif Aslam</h1> 
            <p className="m-3">Every Friday<br />9pm</p>
            <button className="w-[200px] h-[50px] bg-white text-black border hover:bg-black hover:text-white transition-all m-3">Book a Table</button>
            </div>
            <Image src={pic4} alt="Happy Hour"  width={500} />
           </div>

           {/* Mid-Section */}
           <div className="relative top-60 w-full bg-black text-white p-10">
                <h1 className="text-6xl font-semibold m-2 px-44 text-center">Come down & Grab a pint</h1>
            </div>

            {/* Mid-gallary */}
            <div className="grid grid-cols-12 grid-rows-4 relative top-60 gap-4 bg-black">
                <Image className="col-span-6 row-span-4" src={pic5} alt="Bar"/>
                <Image src={pic2} alt="Bar" className="col-span-3 row-span-2" />
                <Image src={pic3} alt="Bar" className="col-span-3 row-span-2"/>
                <Image src={pic1} alt="Bar" className="col-span-3 row-span-2"/>
                <Image src={pic7} alt="Bar" className="bg-orange-400 col-span-3 row-span-2"/>
            </div>

            {/* Reservation Table */}
            <div className="relative top-60 w-full bg-black text-white p-10">
                <h1 className="text-6xl font-semibold m-2 px-44 text-center">Reserve a Table</h1>
            </div>

            
            <form action="" className="grid grid-cols-12 grid-rows-1 relative top-60 bg-black text-white p-4 ">
                <label htmlFor="Party size" className="col-span-3" >Party size <br />
                <input className="bg-black border border-white w-60 p-1" type="number" name="party-size" id="party-size" placeholder="2 guests" />
                </label>
                <label htmlFor="Date" className="col-span-3" >Date <br />
                <input className="bg-black border border-white w-60 p-1" type="date" name="date" id="date" placeholder="6pm" />
                </label>
                <label htmlFor="Time" className="col-span-3">Time <br />
                <input className="bg-black border border-white w-60 p-1" type="time" name="time" id="time" placeholder="6pm" />
                </label>
                <button className="w-[200px] h-[60px] bg-yellow-600 text-black border hover:bg-black hover:text-yellow-600 hover:border-yellow-600 transition-all col-span-3">Book a Table</button>
            </form>

            {/* Footer */}

            <div className="grid grid-cols-12 grid-rows-1 relative top-60">

                <div className="col-span-3">1

                </div>

            </div>


       










        </div>
    )
}