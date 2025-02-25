"use client"
import { postTransaction } from '../actions/actions'
export default function TransactionForm() {
    return (
        <form action={postTransaction}>
            <input type="text" id="comment" name="comment" required /> <br />
            <input type="number" id="amount" name="amount" defaultValue={0} required /><br />
            <input type="number" id="category" name="category" defaultValue={0} required /><br />
            <input type="number" id="type" name="type" defaultValue={0} required /><br />
            <input type="submit" defaultValue="Submit" />
        </form>
    );
}