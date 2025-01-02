import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";



const useCollegeDatas = () => {
    const axiosPublic=useAxiosPublic();
    const {data:collegeInfo=[],isPending:loading,refetch}=useQuery({
        queryKey:['collegeInfo'],
        queryFn:async()=>{
            const res=await axiosPublic.get('/collegeInfo')
            return res.data;
        }
       })
       return [collegeInfo,loading,refetch]
};

export default useCollegeDatas;