import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const NewsletterSubscriber = () => {

    const axiosSecure = useAxiosSecure();

    const {data: subscribers = []} = useQuery({
        queryKey: ['subscribers'],
        queryFn: async() => {
        const {data} = await axiosSecure.get('/subscribers');
        return data;
        }
    })

    return (
        <div>
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