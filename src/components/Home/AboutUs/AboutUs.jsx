import { MdEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";

const AboutUs = () => {
    return (
        <div className="mb-10">
            <h2 className="text-[#CD5C5C] text-center my-2 text-xl">About Us</h2>
            <p className="text-4xl text-[#8A3324] text-center">Learn about us </p>
            <p className="text-center text-lg mt-3 mb-10">Our vision is to provide lesson to people <br /> about healthy, happy life.  </p>
            <div>
            <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-evenly">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="/images/aboutUs.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-3xl leading-none sm:text-6xl">Welcome to
            <br />
				<span className="text-[#CD5C5C]"> FitnessBlender </span>club
			</h1>
			<p className="mt-4 mb-2 text-lg ">Every member will get some free fitness program
				<br  className="hidden md:inline lg:hidden" /> about a variety of exercises and ways to learn.
			</p>
			<p className="text-2xl text-[#8A3324]">Contact us for details...</p>
            <div className="mt-4 text-xl bg-[#CD5C5C] text-white p-5 rounded-xl text-center">
             <h2 className="flex flex-row items-center gap-2"><MdEmail /> fitnessBlender@gmail.com</h2>
             <h2 className="flex flex-row items-center gap-2"><IoCallOutline /> +000 888 234 765</h2>
             <p className="flex flex-row items-center gap-2"><MdOutlineWatchLater />Open Hours <br />
             9:00 AM - 7:00 PM
              </p>
            </div>
		</div>
	</div>
</section>
            </div>
        </div>
    );
};

export default AboutUs;