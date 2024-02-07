"use client"

import { 
  createContext,
  useState, 
  useContext, 
  useEffect, 
  PropsWithChildren, 
  FC 
} from "react";

interface IUser {
  avatar: string
  email: string
  id: number
  first_name: string
  last_name: string
}

interface IUserContext {
  users: IUser[],
  totalPages: number
  currentPage: number
  setCurrentPage: Function
}

const defaultValue = { users: [], totalPages: 100, currentPage: 1, setCurrentPage: () => {} };
const UsersContext = createContext<IUserContext>(defaultValue);

const getUsers = async (page: number) => {
  const res = await fetch(`https://reqres.in/api/users?page=${page}`);
  const jsonRes = await res.json();
  return jsonRes;
}

export const UsersProvider: FC<PropsWithChildren> = ({ children }) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [totalPages, setTotalPages] = useState<number>(100);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    getUsers(currentPage).then(value => {
      const { data, total_pages } = value;
      setUsers(data);
      setTotalPages(total_pages);
    });
  }, [currentPage]);

  return (
    <UsersContext.Provider value={{ users, totalPages, currentPage, setCurrentPage }}>
      {children}
    </UsersContext.Provider>
  );
}

export const useUsers = () => useContext(UsersContext);