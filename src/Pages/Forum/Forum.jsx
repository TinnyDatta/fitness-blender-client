
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { useEffect, useState } from "react";
import axios from "axios";

const Forum = () => {

    const axiosCommon = useAxiosCommon();
    const [votes, setVotes] = useState({});
    const [postsPerPage, setPostsPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);
    const [count, setCount] = useState(0);

    const {data: posts = [], isLoading} = useQuery({
        queryKey: ['posts', currentPage, postsPerPage],
        queryFn: async() => {
        const {data} = await axiosCommon.get(`/posts?page=${currentPage}&size=${postsPerPage}`);
        // setCount(data.length)
        return data;
        }
    })

    useEffect(() => {
      const getCount = async () => {
        const {data} = await axios.get('https://fitness-blender-server.vercel.app/posts-count')
        setCount(data.count)
        // return data;
      }
      getCount()
    },[])

    
    console.log(count);

     // pagination
     const numberOfPages = Math.ceil(count/postsPerPage)
     const pages = [...Array(numberOfPages).keys()].map(
      element => element + 1
  );

  // pagination button
     const handlePaginationButton = (value) => {
      console.log(value);
      setCurrentPage(value);
     }

    const handleUpvote = (postId) => {
        setVotes((prevVotes) => ({
          ...prevVotes,
          [postId]: (prevVotes[postId] || 0) + 1,
        }));
      };
    
    const handleDownvote = (postId) => {
        setVotes((prevVotes) => ({
          ...prevVotes,
          [postId]: Math.max((prevVotes[postId] || 0) - 1, 0),
        }));
      };


    if(isLoading){
        return <span className="loading loading-bars loading-lg"></span>
    }

    return (
        <div className="my-10 max-w-6xl mx-auto">
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
        {
            posts?.map(post => (
                <div key={post._id} className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
	<div className="flex space-x-4">
		<div className="flex flex-col space-y-1">
			<a rel="noopener noreferrer" href="#" className="text-lg font-semibold">Posted By : {post.name}</a>
		</div>
	</div>
	<div>
		<img src={post.image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
		<h2 className="mb-1 text-xl font-bold">{post.title}</h2>
		<p className="text-lg dark:text-gray-600">{post.description}</p>
	</div>
    <div className="flex flex-wrap gap-10">
              
              <button
                onClick={() => handleUpvote(post._id)}
                className="flex flex-row items-center gap-2"
              >
                Upvote <BiUpvote />
              </button>
              <p>Votes: {votes[post._id] || 0}</p>
              <button
                onClick={() => handleDownvote(post._id)}
                className="flex flex-row items-center gap-2"
              >
                Downvote <BiDownvote />
              </button>
            </div>
</div>

            ))
        }
    </div>

    {/* pagination */}
    <div className="text-center mt-10">
        <button
        disabled={currentPage === 1} 
        onClick={() => handlePaginationButton(currentPage - 1)}
        type="submit" className="btn mx-2 text-white bg-[#CD5C5C]">Previous</button>
            {
                pages.map(btnNumber => (
                <button 
                onClick={() => handlePaginationButton(btnNumber)}
                    className={`btn mx-2 ${currentPage === btnNumber? 'text-white bg-[#CD5C5C]' : ''}`} key={btnNumber}>{btnNumber}</button>
                ))
            }
             <button 
             disabled={currentPage === numberOfPages}
             onClick={() => handlePaginationButton(currentPage + 1)}
             type="submit" className="btn text-white bg-[#CD5C5C] mx-2">Next</button>
        </div>
    
        </div>
    );
};

export default Forum;

// import { useQuery } from "@tanstack/react-query";
// import useAxiosCommon from "../../hooks/useAxiosCommon";
// import { BiUpvote, BiDownvote } from "react-icons/bi";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const Forum = () => {
//     const axiosCommon = useAxiosCommon();
//     const [votes, setVotes] = useState({});
//     const [postsPerPage, setPostsPerPage] = useState(6);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [count, setCount] = useState(0);

//     const { data: posts = [], isLoading, refetch } = useQuery({
//         queryKey: ['posts', currentPage, postsPerPage],
//         queryFn: async () => {
//             const { data } = await axiosCommon.get(`/posts?page=${currentPage}&size=${postsPerPage}`);
//             console.log('Fetched posts:', data); // Debug log
//             return data;
//         },
//         keepPreviousData: true,
//     });

//     useEffect(() => {
//         const getCount = async () => {
//             const { data } = await axios.get('http://localhost:5000/posts-count');
//             console.log('Fetched count:', data); // Debug log
//             setCount(data.count);
//         };
//         getCount();
//     }, []);

//     // Debug logs
//     console.log('Current page:', currentPage);
//     console.log('Posts per page:', postsPerPage);
//     console.log('Total count:', count);

//     // Pagination
//     const pages = [...Array(Math.ceil(count / postsPerPage)).keys()].map(element => element + 1);

//     // Pagination button handler
//     const handlePaginationButton = (value) => {
//         console.log('Pagination button clicked:', value); // Debug log
//         setCurrentPage(value);
//         refetch(); // Ensure query refetches data
//     };

//     const handleUpvote = (postId) => {
//         setVotes((prevVotes) => ({
//             ...prevVotes,
//             [postId]: (prevVotes[postId] || 0) + 1,
//         }));
//     };

//     const handleDownvote = (postId) => {
//         setVotes((prevVotes) => ({
//             ...prevVotes,
//             [postId]: Math.max((prevVotes[postId] || 0) - 1, 0),
//         }));
//     };

//     useEffect(() => {
//         refetch(); // Refetch data whenever currentPage changes
//     }, [currentPage, refetch]);

//     if (isLoading) {
//         return <span className="loading loading-bars loading-lg"></span>;
//     }

//     return (
//         <div className="my-10 max-w-6xl mx-auto">
//             <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
//                 {posts?.map(post => (
//                     <div key={post._id} className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
//                         <div className="flex space-x-4">
//                             <div className="flex flex-col space-y-1">
//                                 <a rel="noopener noreferrer" href="#" className="text-lg font-semibold">Posted By : {post.name}</a>
//                             </div>
//                         </div>
//                         <div>
//                             <img src={post.image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
//                             <h2 className="mb-1 text-xl font-bold">{post.title}</h2>
//                             <p className="text-lg dark:text-gray-600">{post.description}</p>
//                         </div>
//                         <div className="flex flex-wrap gap-10">
//                             <button onClick={() => handleUpvote(post._id)} className="flex flex-row items-center gap-2">
//                                 Upvote <BiUpvote />
//                             </button>
//                             <p>Votes: {votes[post._id] || 0}</p>
//                             <button onClick={() => handleDownvote(post._id)} className="flex flex-row items-center gap-2">
//                                 Downvote <BiDownvote />
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Pagination */}
//             <div className="text-center mt-10">
//                 <button
//                     onClick={() => handlePaginationButton(Math.max(currentPage - 1, 1))}
//                     className="btn mx-2 text-white bg-[#CD5C5C]"
//                     disabled={currentPage === 1}
//                 >
//                     Previous
//                 </button>
//                 {pages.map(btnNumber => (
//                     <button
//                         onClick={() => handlePaginationButton(btnNumber)}
//                         className={`btn mx-2 ${currentPage === btnNumber ? 'btn-active' : ''}`}
//                         key={btnNumber}
//                     >
//                         {btnNumber}
//                     </button>
//                 ))}
//                 <button
//                     onClick={() => handlePaginationButton(Math.min(currentPage + 1, pages.length))}
//                     className="btn text-white bg-[#CD5C5C] mx-2"
//                     disabled={currentPage === pages.length}
//                 >
//                     Next
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Forum;












