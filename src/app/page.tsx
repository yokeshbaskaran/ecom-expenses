import { NavLink } from "@/components/Nav";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>This is a user page</p>
      <br />
      <NavLink href="/admin">To ADMIN</NavLink>
    </div>
  );
}
