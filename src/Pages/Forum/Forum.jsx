import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../hooks/useAxiosCommon";

const Forum = () => {

    const axiosCommon = useAxiosCommon();

    const {data: posts = [], isLoading} = useQuery({
        queryKey: ['posts'],
        queryFn: async() => {
        const {data} = await axiosCommon.get('/posts');
        return data;
        }
    })

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
		<button>Upvote</button>
        <button>Downvote</button>
		
	</div>
</div>

            ))
        }
    </div>
        </div>
    );
};

export default Forum;