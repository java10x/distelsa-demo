import { UsersProvider } from "./contexts/UsersContext";
import Users from "./components/Users";

export default function Home() {
  return (
    <UsersProvider>
      <main className="flex justify-center p-10">
        <Users />
      </main>
    </UsersProvider>
  );
}
