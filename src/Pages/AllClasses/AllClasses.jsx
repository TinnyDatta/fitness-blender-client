import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const AllClasses = () => {

    // const [itemsPerPage, setItemsPerPage] = useState(6);
    // const [count, setCount] = useState(0);
    const [classesPerPage, setClassesPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);
    const [count, setCount] = useState(0);

    const [search, setSearch] = useState('');
    const axiosSecure = useAxiosSecure();

    const {data: classes = [], isLoading} = useQuery({
         queryKey: ['classes', search, currentPage, classesPerPage],
        queryFn: async() => {
        const {data} = await axiosSecure.get(`/classes?search=${search}&page=${currentPage}&size=${classesPerPage}`);
        setCount(data.length)
        return data;
        }
    })

    useEffect(() => {
        const getClassCount = async () => {
          const {data} = await axios.get('http://localhost:5000/classes-count')
          setCount(data.count)
          // return data;
        }
        getClassCount()
      },[])

    console.log(count);
   const numberOfPages = Math.ceil(count/classesPerPage)
   const pages = [...Array(numberOfPages).keys()].map(
    element => element + 1
);

  // pagination button
  const handlePaginationBtn = (value) => {
    console.log(value);
    setCurrentPage(value);
   }

    const handleSearch = e =>{
        e.preventDefault();
        const searchText = e.target.search.value;
        // console.log(searchText);
        setSearch(searchText);
      }

    const {data: trainers = []} = useQuery({
        queryKey: ['trainers'],
        queryFn: async() => {
        const {data} = await axiosSecure.get('/trainers');
        return data;
        }
    })

    if(isLoading){
        return <span className="loading loading-bars loading-lg"></span>
    }

    const getRandomTrainers = () => {
        const shuffledTrainers = [...trainers].sort(() => 0.5 - Math.random());
        return shuffledTrainers.slice(0, 5);
      };



    return (
        <div className="my-10 max-w-6xl mx-auto ">
            <Helmet>
            <title>All Classes || FitnessBlender</title>
        </Helmet>
        <div className="text-center my-10">
          <h2 className="text-2xl text-[#8A3324] mb-5">Search class by the name </h2>
          <form onSubmit={handleSearch}>
            <input type="text" name="search" id="" placeholder="type here" className="py-2 mr-1" />
            <input type="submit" value="Search" className="btn bg-[#CD5C5C] text-white" />
          </form>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
            classes?.map(item => {
                const trainers = getRandomTrainers();
   return(
    <div key={item._id} className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
	<img src={item.classImage} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
    <div className="flex flex-row mt-10 gap-5">
    {trainers.map((trainer, idx) => (
                <div key={idx} className="trainer">
                  <Link to={`/details/${trainer._id}`}>
                  <img className="w-16 h-12 rounded-3xl" src={trainer.profileImage} alt="" /></Link>
                </div>
            ))}
    </div>
	<div className="mt-6 mb-2">
		<h2 className="text-xl text-[#8A3324] font-semibold tracking-wide">{item.className}</h2>
	</div>
	<p className="dark:text-gray-800">{item.classDetails}</p>
</div>
   )
})
        }
        </div>
        {/* pagination */}
        <div className="text-center mt-10">
        <button 
        disabled={currentPage === 1}
        onClick={() => handlePaginationBtn(currentPage - 1)}
        type="submit" className="btn mx-2 text-white bg-[#CD5C5C]">Previous</button>
            {
                pages.map(btnNum => 
                <button
                  onClick={() => handlePaginationBtn(btnNum)}
                    className={`btn mx-2 ${currentPage === btnNum? 'text-white bg-[#CD5C5C]' : ''}`} key={btnNum}>{btnNum}</button>)
            }
             <button 
             disabled={currentPage === numberOfPages}
             onClick={() => handlePaginationBtn(currentPage + 1)}
             type="submit" className="btn text-white bg-[#CD5C5C] mx-2">Next</button>
        </div>
        </div>
    );
};

export default AllClasses;