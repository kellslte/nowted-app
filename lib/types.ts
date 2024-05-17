export type Folder = {
    _id: string;
    name: string;
    user: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export type Note = {
    title: string;
    content: string;
    favourite: boolean;
    trashed: boolean;
    author: string;
    folder?: string | Folder;
    _id: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export type Notes = {
    folder: string;
    notes: Note[];
}[];

export type Favourites = Note[];

export type Trashed = Note[];

export type Archived = Note[];

export type RecentNotes = Note[];

export type Authorization = {
    type: string;
    token: string;
}

export type User = {
     sub: string;
    name: string;
    email: string;
    iat: number;
    exp: number;
}

export type Auth = {
  user: User;
  notes: Notes;
  favourites: Favourites;
  trashed: Trashed;
  archived: Archived;
  recentNotes: RecentNotes;
  token: string;
};