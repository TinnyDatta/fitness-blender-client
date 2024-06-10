import { Helmet } from "react-helmet-async";

const FrontPage = () => {
    return (
        <div>
            <Helmet>
          <title>Front Page</title>
        </Helmet>
            <p className="text-4xl text-[#8A3324] text-center">Welcome to the Dashboard!!!</p>
        </div>
    );
};

export default FrontPage;