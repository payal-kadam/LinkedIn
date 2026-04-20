import { createAsyncThunk } from "@reduxjs/toolkit";
import clientServer from "@/config/clientServer";

// ✅ LOGIN
export const loginUser = createAsyncThunk(
    "user/login",
    async (user, thunkAPI) => {
        try {
            const response = await clientServer.post("/login", {
                email: user.email,
                password: user.password
            });

            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
                return response.data.token; // ✅ simpler
            } else {
                return thunkAPI.rejectWithValue({
                    message: "Token not provided"
                });
            }

        } catch (err) {
            return thunkAPI.rejectWithValue(
                err.response?.data || { message: "Login Failed" }
            );
        }
    }
);

// ✅ REGISTER
export const registerUser = createAsyncThunk(
    "user/register",
    async (user, thunkAPI) => {
        try {
            const response = await clientServer.post("/register", {
                username: user.username,
                password: user.password,
                email: user.email,
                name: user.name,
            });

            return response.data; // ✅ FIXED

        } catch (err) {
            console.log("Register Error:",err.response?.data)
            return thunkAPI.rejectWithValue(
                err.response?.data 
            );
        }
    }
);


export const getAboutUser = createAsyncThunk(
    "user/getAboutUser",
    async(user,thunkAPI)=>{
        try{
            const response = await clientServer.get("/get_user_and_profile",{
                params:{
                    token:user.token
                }
            })

            return response.data

        }catch(err){
            return thunkAPI.rejectWithValue(err.response.data)
        }
    }
)


export const getAllUsers = createAsyncThunk(
    "user/getAllUsers",
    async(_ , thunkAPI)=>{
        try{
            const response = await clientServer.get("/user/get_all_users")

            return thunkAPI.fulfillWithValue(response.data)
        }catch(err){
            return thunkAPI.rejectWithValue(err.response.data);
        }
    }
)