import NavMenu from "../components/NavMenu";
import TransactionForm from "../components/TransactionForm";
import { prisma } from "../lib/db";

export default async function TransactionsPage() {
  const transactions = await prisma.transaction.findMany();
  console.log(transactions);
  return (
    <div>
      <NavMenu />

      Create Transcation:
      <TransactionForm />
    </div>
  );
}
