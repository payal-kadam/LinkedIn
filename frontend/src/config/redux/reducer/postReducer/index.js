import { createSlice } from "@reduxjs/toolkit"
import { getAllPosts ,deletePost} from "../../action/postAction"
// import { stat } from "node:fs"

const initialState={
    posts:[],
    isError:false,
    postFetched:false,
    isLoading:false,
    loggedIn:false,
    message:"",
    comments:[],
    postId:"",

}


const postSlice = createSlice({
    name:"post",
    initialState,
    reducers:{
        reset:()=> initialState,
        resetPostId:(state)=>{
            state.postId=""
        },
    },
    extraReducers:(builder)=>{
        builder 
            .addCase(getAllPosts.pending,(state)=>{
                state.isLoading=true
                state.message="Fetching all the posts.."
            })
            .addCase(getAllPosts.fulfilled,(state,action)=>{
                state.isLoading=false;
                state.isError=false;
                state.postFetched=true;
                state.posts=action.payload.posts.reverse()
            })
            .addCase(getAllPosts.rejected,(state,action)=>{
                state.isLoading=false;
                state.isError=true;
                state.message=action.payload?.message || "Failed to fetch posts";
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.posts = state.posts.filter(
                    (post) => post._id !== action.payload
                );
            });
    }
    
})


export default postSlice.reducer