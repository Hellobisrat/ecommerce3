import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import api from '../utils/api.js'
import {toast} from 'react-toastify';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async(data,thunkAPI)=>{
    try {
      const res = await api.post('/auth/login',data);
      res.data
    } catch (error) {
       toast.error(err.response?.data?.message || "Login failed");
      return thunkAPI.rejectWithValue(err.response.data);

    }
  }
)

export const registerUser = createAsyncThunk(
   "auth/registerUser",
  async (data, thunkAPI) => {
    try {
      const res = await api.post("/auth/register", data);
      return res.data;
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
)

const authSlice =createSlice({
  name:"auth",
  initialState:{
    user:JSON.parse(localStorage.getItem("user")) || null,
    loading:false,
  },
  reducers:{
    logout:(state)=>{
      state.user=null;
      localStorage.removeItem("user");
      toast.success("Logged out")
    }
  },
  extraReducers:(builder)=>{
    builder
      .addCase(loginUser.pending,(state)=>{
        state.loading=true
      })
      .addCase(loginUser.fulfilled,(state,action)=>{
        state.loading=false;
        state.user=action.payload;
        localStorage.setItem("user",JSON.stringify(action.payload));
        toast.success("Login successful")
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        toast.success("Account created");
      });

  }
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;
