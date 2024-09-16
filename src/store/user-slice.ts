import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserDataProps {
  email: string;
  token?: string;
  name?: string;
  chavePix?: string;
  isDarkMode: boolean;
  notifications: INotifications[];
}

interface INotifications {
  title: string;
  description: string;
}

const userInicialState: UserDataProps = {
  email: "",
  token: "",
  chavePix: "",
  notifications: [{ title: "", description: "" }],
  isDarkMode: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: userInicialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<UserDataProps>) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.notifications = [{ title: "", description: "" }];
      state.isDarkMode = false;
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
    setDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
    setChavePix(state, action: PayloadAction<string>) {
      state.chavePix = action.payload;
    },
  },
});

export default userSlice;
export const {
  setCurrentUser,
  logoutUser,
  addNotification,
  clearNotifications,
  setDarkMode,
  setChavePix
} = userSlice.actions;
