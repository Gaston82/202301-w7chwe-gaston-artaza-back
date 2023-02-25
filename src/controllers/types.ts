export interface UserStructure {
  username: string;
  password: string;
  email: string;
  image: string;
  friends: UserStructure[];
  foes: UserStructure[];
}

export interface FriendStructure {
  username: string;
  email: string;
  image: string;
}
