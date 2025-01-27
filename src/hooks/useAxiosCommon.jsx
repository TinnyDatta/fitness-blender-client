import axios from "axios";

const axiosCommon = axios.create({
    baseURL: 'https://fitness-blender-server.vercel.app'
})

const useAxiosCommon = () => {
    return axiosCommon;
};

export default useAxiosCommon;