export interface DropdownProps {
  options: string[];
  backgroundColor?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}
