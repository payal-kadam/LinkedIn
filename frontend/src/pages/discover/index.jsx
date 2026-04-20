import React, { useEffect } from "react";
import UserLayout from "../../layout/UserLayout";
import DashboardLayout from "../../layout/DashboardLayout"
import { getAllPosts } from "../../config/redux/action/postAction";
// import {getAllUsers} from "@/config/redux/reducer/authReducer"
import { getAllUsers } from "../../config/redux/action/authAction";
import { useRouter } from "next/router";
import { useDispatch,useSelector } from "react-redux";
export default function DiscoverPage(){

    const authState = useSelector((state)=>state.auth)
    const dispatch = useDispatch()
    useEffect(()=>{
        if(!authState.all_profiles_fetched){
            dispatch(getAllUsers());
        }
    },[])

    return(
         <UserLayout>
           

            <DashboardLayout>
                <div>
                    <h1>Discover</h1>
                </div>
                
            </DashboardLayout>
            
        </UserLayout>
        
    )
}