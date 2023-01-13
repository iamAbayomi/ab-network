import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";


interface usersOrderState {
    users: {
      user_name: string;
      email_address: string;
    };
  }

const usersOrderAdapter = createEntityAdapter<usersOrderState>({})



const initialState = usersOrderAdapter.getInitialState({
    users: {
      user_name: "",
      email: "",
    },
  });



const usersOrderSlice = createSlice({
    name: "Users",
    initialState,
    reducers: {
        addUsersData(state, action) {
            state.users = action.payload
        }
    }
})



export const getUsersData = (state: any) => {
    return state.users.users
}


export default usersOrderSlice.reducer
