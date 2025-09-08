import { useState } from "react";
import {
  Modal,
  TextInput,
  NumberInput,
  Select,
  Button,
  Stack,
} from "@mantine/core";

type AddExpenseModalProps = {
  opened: boolean;
  onClose: () => void;
  onAdd: (name: string, amount: number | string, category: string) => void;
};

export default function AddExpenseModal({
  opened,
  onClose,
  onAdd,
}: AddExpenseModalProps) {
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<string | number>(0);
  const [category, setCategory] = useState<string | null>(null);

  const handleSubmit = () => {
    if (!name.trim() || !amount || !category) return;
    onAdd(name, amount, category);
    setName("");
    setAmount("");
    setCategory(null);
  };

  // หากต้องการแปง type string เป็น type number สามารถดูตัวอย่างนี้ได้
  let val_number: number = Number("500.0");
  console.log(val_number + 100); // 600.0

  return (
    /* Type additional text here. */
    <Modal opened={opened} onClose={onClose} title="Add Task">
      <Stack>
        {/* TextInput, Textarea, Date */}
        <TextInput
          label="Expense Name"
          placeholder="E.g.,Coca-Cola"
          description="Expense Name"
          error={!name.trim() && "Expense Name is required"}
          value={name}
          onChange={(event) => setName(event.currentTarget.value)}
        />

        <NumberInput
          label="Amopunt"
          description="Amount"
          placeholder="0"
          error={!amount && "Amount is required"}
          value={amount}
          onChange={setAmount}
        />

        <Select
          label="Category"
          description="Category"
          placeholder="Select Category"
          data={["Food","Transport","Entertainment"]}
          error={!category && "Category is required"}
          onChange={setCategory}
        />
        <Button onClick={handleSubmit}>Save</Button>
      </Stack>
    </Modal>
  );
}
