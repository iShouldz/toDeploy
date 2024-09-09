import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserDataProps {
  email: string;
  token?: string;
  name?: string;
  notifications: INotifications[];
}

interface INotifications {
  title: string;
  description: string;
}

const userInicialState: UserDataProps = {
  email: "",
  token: "",
  notifications: [{ title: "", description: "" }],
};

const userSlice = createSlice({
  name: "user",
  initialState: userInicialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<UserDataProps>) {
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    logoutUser(state) {
      state.email = "";
      state.token = "";
    },
    addNotification(state, action: PayloadAction<INotifications>) {
      state.notifications.push(action.payload);
    },
    clearNotifications(state) {
      state.notifications = [];
    },
  },
});

export default userSlice;
export const {
  setCurrentUser,
  logoutUser,
  addNotification,
  clearNotifications,
} = userSlice.actions;
