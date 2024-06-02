
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
			<img src="/public/images/aboutUs.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-3xl leading-none sm:text-6xl">Welcome to
            <br />
				<span className="text-[#CD5C5C]"> FitnessBlender </span>club
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Every member will get some free fitness program
				<br  className="hidden md:inline lg:hidden" /> about a variety of exercises and ways to learn.
			</p>
			<div>
				<p className="text-2xl text-[#8A3324]">Contact us for details</p>
			</div>
		</div>
	</div>
</section>
            </div>
        </div>
    );
};

export default AboutUs;