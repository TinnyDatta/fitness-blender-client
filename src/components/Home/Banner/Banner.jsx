
const Banner = () => {
    return (
      <div className="hero h-[400px] my-10">
  <div className="hero-content  flex-col lg:flex-row-reverse">
    <img  src="/images/fitnessBanner.jpg" className="w-[300px] h-[300px] rounded-lg shadow-2xl" />
    <div className="mr-8">
      <p className="text-[#CD5C5C] my-4 text-xl">Breathe, Relax and br Healthy</p>
      <h1 className="text-5xl text-[#8A3324] ">This is FitnessBlender center</h1>
      <p className="py-6">By joining with us you can stay fit by various physical and mental classes.</p>
      <button className="btn bg-[#CD5C5C] text-white border-0 border-b-4 border-b-black">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;