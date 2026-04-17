import React from "react";

export default function Dashboard(){

    const router = useRouter();
    if(localStorage.getItem("token") === null){
        router.push("/login")
    }
    return(
        <div>
            Dashboard
        </div>
    )
}