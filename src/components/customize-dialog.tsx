import {
  Dialog,
  Group,
  Button,
  TextInput,
  Textarea,
  Text,
} from "@mantine/core";
import { useState } from "react";
import { db } from "../../src/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

interface CustomizeDialogProps {
  opened: boolean;
  onClose: () => void;
}

export default function CustomizeDialog({
  opened,
  onClose,
}: CustomizeDialogProps) {
  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    message: "",
  });
  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addDoc(collection(db, "emails"), {
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      createdAt: serverTimestamp(),
    });
  };
  return (
    <Dialog
      opened={opened}
      withCloseButton
      onClose={onClose}
      size="lg"
      radius="md"
    >
      <form onSubmit={submitHandler}>
        <Text size="lg" fw={600} mb="sm">
          New Message
        </Text>
        <TextInput
          label="To"
          placeholder="recipient@example.com"
          mb="sm"
          required
          name="to"
          onChange={changeHandler}
          value={formData.to}
        />
        <TextInput
          label="Subject"
          placeholder="Subject"
          name="subject"
          mb="sm"
          onChange={changeHandler}
          value={formData.subject}
        />
        <Textarea
          label="Message"
          placeholder="Write your message here..."
          autosize
          minRows={6}
          name="message"
          mb="md"
          onChange={changeHandler}
          value={formData.message}
        />
        <Group justify="flex-end">
          <Button type="submit" onClick={onClose} className="bg-blue-500">
            Send
          </Button>
        </Group>
      </form>
    </Dialog>
  );
}
