import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { coursesSlice, coursesStoreKey } from "./courses";


export const store = configureStore({
    reducer: {
        [coursesStoreKey]: coursesSlice.reducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;
