import {
  Dialog,
  Group,
  Button,
  TextInput,
  Textarea,
  Text,
} from "@mantine/core";

interface CustomizeDialogProps {
  opened: boolean;
  onClose: () => void;
}

export default function CustomizeDialog({
  opened,
  onClose,
}: CustomizeDialogProps) {
  return (
    <Dialog
      opened={opened}
      withCloseButton
      onClose={onClose}
      size="lg"
      radius="md"
    >
      <Text size="lg" fw={600} mb="sm">
        New Message
      </Text>
      <TextInput
        label="To"
        placeholder="recipient@example.com"
        mb="sm"
        required
      />

      <TextInput label="Subject" placeholder="Subject" mb="sm" />

      <Textarea
        label="Message"
        placeholder="Write your message here..."
        autosize
        minRows={6}
        mb="md"
      />

      <Group justify="flex-end">
        <Button onClick={onClose} className="bg-blue-500">
          Send
        </Button>
      </Group>
    </Dialog>
  );
}
