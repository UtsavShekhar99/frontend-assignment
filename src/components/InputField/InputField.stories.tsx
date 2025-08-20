import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputField } from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
};
export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
    helperText: "Helper text here",
  },
};

export const Error: Story = {
  args: {
    label: "Email",
    placeholder: "Enter email",
    invalid: true,
    errorMessage: "Invalid email address",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    placeholder: "Can't type here",
    disabled: true,
  },
};

export const Clearable: Story = {
  args: {
    label: "Clearable Input",
    placeholder: "Type something...",
    clearable: true,
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    type: "password",
  },
};

export const DarkMode: Story = {
  args: {
    label: "Dark Mode Input",
    placeholder: "Works with Tailwind dark class",
    helperText: "Toggle dark mode in preview",
  },
};
