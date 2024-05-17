import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  Archived,
  Auth,
  Favourites,
  Notes,
  RecentNotes,
  Trashed,
  User,
} from "./types";

export type Store = {
  user: User;
  notes: [] | Notes;
  favourites: [] | Favourites;
  trashed: [] | Trashed;
  archived: [] | Archived;
  recentNotes: [] | RecentNotes;
  token: string;
};

export type Actions = {
  setToken: (token: string) => void;
  getUser: () => User;
  getNotes: () => Notes;
  getFavourites: () => Favourites;
  getTrashed: () => Trashed;
  getArchived: () => Archived;
  getRecentNotes: () => RecentNotes;
  setAuth: (payload: Auth) => void;
  getToken: () => string;
};

export const useStore = create<Store & Actions>()(
  persist(
    (set, get) => ({
      user: {
        sub: "",
        name: "",
        email: "",
        iat: 0,
        exp: 0,
      } as User,
      notes: [] as Notes,
      favourites: [] as Favourites,
      trashed: [] as Trashed,
      archived: [] as Archived,
      recentNotes: [] as RecentNotes,
      token: "",
      getUser: () => get().user,
      getNotes: () => get().notes,
      getFavourites: () => get().favourites,
      getTrashed: () => get().trashed,
      getArchived: () => get().archived,
      getRecentNotes: () => get().recentNotes,
      setToken: (token: string) => set({ token: token }),
      getToken: () => get().token,
      setAuth: (payload: Auth) =>
        set({
          user: payload.user,
          notes: payload.notes,
          favourites: payload.favourites,
          trashed: payload.trashed,
          archived: payload.archived,
          recentNotes: payload.recentNotes,
          token: payload.token,
        }),
    }),
    {
      name: "nowtedStore"
    }
  )
);
