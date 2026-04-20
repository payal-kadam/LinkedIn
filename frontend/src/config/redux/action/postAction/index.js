
import {createAsyncThunk} from "@reduxjs/toolkit";
import clientServer from "@/config/clientServer";

export const getAllPosts = createAsyncThunk(
    "post/getAllPosts",
    async (_,thunkAPI)=>{
        try{
            const response = await clientServer.get('/posts')

            return response.data
        }
        catch(err){
            return thunkAPI.rejectWithValue(err.response.data)
        }
    }
)


export const createPost = createAsyncThunk(
    "post/createPost",
    async(userData ,thunkAPI )=>{
        const {file,body}=userData;

        try{
            const formData = new FormData();
            formData.append('token',localStorage.getItem('token'))
            formData.append('body',body);
            formData.append('media',file);

            const response = await clientServer.post("/post",formData ,{
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            });


            if(response.status==200){
                return thunkAPI.fulfillWithValue("post uploaded")
            }
            else{
                return thunkAPI.rejectWithValue("post not uploaded")
            }

        }catch(err){
            return thunkAPI.rejectWithValue(err.response.data);
        }

    }
)

export  const deletePost = createAsyncThunk(
    "post/deletePost",
    async(post_id ,thunkAPI)=>{
        try{
            console.log("TOKEN SENT:", localStorage.getItem("token"));
            const response = await clientServer.delete("/delete_post",{
                data:{
                    token:localStorage.getItem("token"),
                    post_id:post_id,
                }
            });
            // return thunkAPI.fulfillWithValue(response.data) 
            // return post_id
            return response.data;
        }catch(err){
            return thunkAPI.rejectWithValue("Something went wrong")
        
        }
    }
)


export const incrementPostLike = createAsyncThunk(
    "post/incrementLike",
    async(post,thunkAPI)=>{
        try{
            const response = await clientServer.post('/increment_post_like',{
                // token: localStorage.getItem("token"),
                post_id :post.post_id
        })

        return response.data
        }catch(error){
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
        

        

    }
)