import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./features/auth/userReducer";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});

//HOST
export const server = "https://dull-jade-dibbler-tutu.cyclic.app/api/v1";

// export const server = "https://unusual-fly-loafers.cyclic.app/api/v1";

// export const server = "http://192.168.43.98:8084/api/v1";

//https://unusual-fly-loafers.cyclic.app/
