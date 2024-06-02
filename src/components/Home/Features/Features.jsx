
import { MdOutlinePersonalInjury } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { MdOutlineSupportAgent } from "react-icons/md";
import { SiWellfound } from "react-icons/si";
import { TfiThumbUp } from "react-icons/tfi";
import { FaSpa } from "react-icons/fa";

const Features = () => {
    return (
        <div className="my-10 ml-20">
            <h2 className="text-[#CD5C5C] text-center my-2 text-xl">Features</h2>
            <p className="text-4xl text-[#8A3324] text-center">Services you will get </p>
            <p className="text-center text-lg mt-3 mb-10">These are the main features of FitnessBlender but there are also a vast services <br /> these can take anyone from anywhere. </p>
            {/* cards */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="max-w-xs rounded-md shadow-md">
	<div>
    < MdOutlinePersonalInjury className="text-8xl ml-24 text-[#CD5C5C]"/>
    </div>
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-2xl">Personal Training</h2>
			<p className="text-lg text-gray-500">Tailored workouts with expert guidance for optimal results.</p>
		</div>
	</div>
</div>
            <div className="max-w-xs rounded-md shadow-md">
	<div>
    < GrGroup className="text-8xl ml-24 text-[#CD5C5C]"/>
    </div>
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-2xl">Group Classes</h2>
			<p className="text-lg text-gray-500">Dynamic fitness sessions for all skill levels and interests.</p>
		</div>
	</div>
</div>
            <div className="max-w-xs rounded-md shadow-md">
	<div>
    < MdOutlineSupportAgent className="text-8xl ml-24 text-[#CD5C5C]"/>
    </div>
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-2xl">Nutritional Counseling</h2>
			<p className="text-lg text-gray-500">Personalized diet plans to complement your fitness goals.</p>
		</div>
	</div>
</div>
            <div className="max-w-xs rounded-md shadow-md">
	<div>
    < SiWellfound className="text-8xl ml-24 text-[#CD5C5C]"/>
    </div>
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-2xl">Wellness Programs</h2>
			<p className="text-lg text-gray-500">Comprehensive plans for overall health and well-being.</p>
		</div>
	</div>
</div>
            <div className="max-w-xs rounded-md shadow-md">
	<div>
    < TfiThumbUp className="text-8xl ml-24 text-[#CD5C5C]"/>
    </div>
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-2xl">Fitness Assessments</h2>
			<p className="text-lg text-gray-500">Detailed evaluations to track and improve performance.</p>
		</div>
	</div>
</div>
            <div className="max-w-xs rounded-md shadow-md">
	<div>
    < FaSpa className="text-8xl ml-24 text-[#CD5C5C]"/>
    </div>
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-2xl">Spa Services</h2>
			<p className="text-lg text-gray-500">Relaxing treatments to aid recovery and rejuvenation.</p>
		</div>
	</div>
</div>
            </div>
        </div>
    );
};

export default Features;