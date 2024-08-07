export interface IUser {
  username: string;
  password: string;
}

export interface ITask {
  _id: string;
  userId: string;
  title: string;
  description: string;
  completed: boolean;
  expireTime: Date;
  prority: "LOW" | "MEDIUM" | "HIGH";
}
