import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const NewsletterSubscriber = () => {

    const axiosSecure = useAxiosSecure();

    const {data: subscribers = [], isLoading} = useQuery({
        queryKey: ['subscribers'],
        queryFn: async() => {
        const {data} = await axiosSecure.get('/subscribers');
        return data;
        }
    })

    if(isLoading){
      return <span className="loading loading-bars loading-lg"></span>
  }

    return (
        <div>
          <Helmet>
          <title>Newsletter Subscribers</title>
        </Helmet>
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
     {
        subscribers?.map((subscriber, index) =>
<tr  key={subscriber._id} className="bg-base-200 py-2 ">
        <th>{index + 1}</th>
        <td >{subscriber.name}</td>
        <td>{subscriber.email}</td>
      </tr>

         )
     }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default NewsletterSubscriber;