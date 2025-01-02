import axios from "axios";

const axiosPublic=axios.create({
    baseURL:`https://job-hunting-server-sigma.vercel.app`
});
const useAxiosPublic=()=>{
    return axiosPublic;
}
export default useAxiosPublic;