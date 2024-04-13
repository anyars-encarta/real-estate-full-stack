import { create } from 'zustand';
import apiRequest from './apiRequest';

export const useNotificationStore = create((set) => ({
    number: 0,
    fetch: async () => {
        const response = await apiRequest("/users/notification");
        set({ number: response.data });
    },

    decrease: () => {
        set((prev) => ({ number: prev.number - 1 }));
    },
    reset: () => {
        set({ number: 0 });
    },
}));