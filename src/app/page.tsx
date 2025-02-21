import { getServerSession } from "next-auth";
import NavMenu from "./components/NavMenu";
import { prisma } from "./lib/db";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  //const session = await getServerSession(authOptions);
  const transactions = await prisma.transaction.findMany();
  //console.log(transactions);
  return (
    <div>
      <NavMenu />
      HOMEPAGE:
    </div>
  );
}
