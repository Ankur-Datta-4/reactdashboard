import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/apiSetup";

const initialState = {
  loading: false,
  allusers: [],
  expandedUser: null,
  order: null,
  sales: [],
};

export const fetchAllUsers = createAsyncThunk(
  "user/fetchAllUsers",
  async () => {
    try {
      const response = await api.get("/users");

      const keyedData = response.data.users.map((user) => {
        return {
          ...user,
          key: `${user.id}`,
        };
      });
      return keyedData;
    } catch (error) {
      console.log(`error ${error}`);
    }
  }
);

export const fetchUserById = createAsyncThunk(
  "user/fetchUserById",
  async (id) => {
    const response = await api.get(`/users/${id}`);
    return response.data;
  }
);

// search users
export const searchUsers = createAsyncThunk(
  "user/searchUsers",
  async (search) => {
    const response = await api.get(`/users/search?tag=${search}`);
    const keyedData = response.data.users.map((user) => {
      return {
        ...user,
        key: `${user.id}`,
      };
    });
    return keyedData;
  }
);

// fetch user sales
export const fetchUserSales = createAsyncThunk(
  "user/fetchUserSales",
  async (id) => {
    const response = await api.get(`/users/${id}/sales`);
    const keyedSales = response.data.sales.map((sale, index) => {
      return {
        ...sale,
        key: `${index}`,
      };
    });
    return keyedSales;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      state.allusers = action.payload;
    });

    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.expandedUser = action.payload.user;
      state.order = action.payload.userOrder;
    });

    builder.addCase(searchUsers.fulfilled, (state, action) => {
      state.allusers = action.payload;
    });

    builder.addCase(fetchUserSales.fulfilled, (state, action) => {
      state.sales = action.payload;
    });
  },
});

export const { setLoading } = userSlice.actions;
export const selectLoading = (state) => state.user.loading;
export const selectAllUsers = (state) => state.user.allusers;
export const selectExpandedUser = (state) => state.user.expandedUser;
export const selectOrder = (state) => state.user.order;
export const selectSales = (state) => state.user.sales;

export default userSlice;
