import { configureStore } from '@reduxjs/toolkit'
import blogReducer from './pages/blog/blog.reducer'

// Store: Lưu trữ trạng thái ứng dụng.
// Reducer: Cập nhật trạng thái dựa trên action.
// Action: Mô tả những gì xảy ra trong ứng dụng.
// Action Creator: Tạo ra action để gửi đến store.
// Dispatch: Gửi action đến store để cập nhật trạng thái.
// useSelector và useDispatch: Hook để kết nối các component React với Redux store.
// Provider: Bao bọc ứng dụng React để cung cấp store cho các component con.
// Middleware: Xử lý các action phức tạp hoặc bất đồng bộ.

export const store = configureStore({
  reducer: {
    blog: blogReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
