"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

export default function Home() {
  const [numRows, setNumRows] = useState(1);
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-semibold">Transactions</h1>
      <form>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: numRows }).map((_, i) => (
              <Row key={i} id={i} />
            ))}
          </TableBody>
        </Table>
        <Button
          type="button"
          onClick={() => setNumRows((numRows) => numRows + 1)}
        >
          Add row
        </Button>
      </form>
    </div>
  );
}

function Row(id: { id: number }) {
  return (
    <TableRow>
      <TableCell>
        <Input type="text" name={`${id}:date`} />
      </TableCell>
      <TableCell>
        <Select name={`${id}:category`}>
          <SelectTrigger>
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="food">Food</SelectItem>
            <SelectItem value="salary">Salary</SelectItem>
          </SelectContent>
        </Select>
      </TableCell>
      <TableCell>
        <Input type="text" name={`${id}:description`} />
      </TableCell>
      <TableCell>
        <Input type="text" name={`${id}:amount`} />
      </TableCell>
    </TableRow>
  );
}
