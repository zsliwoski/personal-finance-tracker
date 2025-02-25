import NavMenu from "../components/nav-menu";
import TransactionForm from "../components/transaction-form";
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
