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
} from "@/lib/types";

export type State = {
  notes: [] | Notes;
  favourites: [] | Favourites;
  trashed: [] | Trashed;
  archived: [] | Archived;
  recentNotes: [] | RecentNotes;
};

export type Actions = {
  getNotes: () => Notes;
  getFavourites: () => Favourites;
  getTrashed: () => Trashed;
  getArchived: () => Archived;
  getRecentNotes: () => RecentNotes;
  setAuth: (payload: Auth) => void;
};

export const useStore = create<State & Actions>()(
  persist(
    (set, get) => ({
      notes: [] as Notes,
      favourites: [] as Favourites,
      trashed: [] as Trashed,
      archived: [] as Archived,
      recentNotes: [] as RecentNotes,
      token: "",
      getNotes: () => get().notes,
      getFavourites: () => get().favourites,
      getTrashed: () => get().trashed,
      getArchived: () => get().archived,
      getRecentNotes: () => get().recentNotes,
      setAuth: (payload: Auth) =>
        set({
          notes: payload.notes,
          favourites: payload.favourites,
          trashed: payload.trashed,
          archived: payload.archived,
          recentNotes: payload.recentNotes,
        }),
    }),
    {
      name: "nowtedStore"
    }
  )
);
