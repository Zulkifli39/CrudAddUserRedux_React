import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email, phone } = action.payload;
      const updUse = state.find((user) => user.id == id);

      if (updUse) {
        updUse.name = name;
        updUse.email = email;
        updUse.phone = phone;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;

      // Hapus user dengan id tertentu
      const newState = state.filter((user) => user.id !== id);

      // Atur ulang ID menjadi berurutan dari 1
      return newState.map((user, index) => ({
        ...user,
        id: index + 1,
      }));
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
