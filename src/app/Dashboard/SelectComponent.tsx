import * as React from 'react';
import { SelectOptionObject, Select, SelectOption, SelectVariant } from '@patternfly/react-core';

const SelectComponent: React.FunctionComponent = () => {
  const titleId = 'foo';
  const [isOpen, setIsOpen] = React.useState(false);
  const [selection, setSelection] = React.useState<string | SelectOptionObject>();
  const options = [
    { value: 'Mr', disabled: false, isPlaceholder: false },
    { value: 'Miss', disabled: false },
    { value: 'Mrs', disabled: false },
    { value: 'Ms', disabled: false },
    { value: 'Dr', disabled: false },
    { value: 'Other', disabled: false }
  ];

  const onToggle = (isOpen: boolean) => {
    setIsOpen(isOpen);
  }

  const onSelect = (
    event: React.MouseEvent<Element, MouseEvent> | React.ChangeEvent<Element>,
    value: string | SelectOptionObject,
    isPlaceholder?: boolean | undefined) => {
    if (isPlaceholder) {
      clearSelection();
    } else {
      setIsOpen(false);
      setSelection(value);
    }
  }

  const clearSelection = () => {
    setSelection(undefined);
    setIsOpen(false);
  }

  return (
    <div>
    <span id={titleId} hidden>
      Title
    </span>
    <Select
      variant={SelectVariant.single}
      placeholderText="Select an option"
      aria-label="Select Input with descriptions"
      onToggle={onToggle}
      onSelect={onSelect}
      selections={selection}
      isOpen={isOpen}
      aria-labelledby={titleId}
      isDisabled={false}
    >
      {options.map((option, index) => (
        <SelectOption
          isDisabled={option.disabled}
          key={index}
          value={option.value}
          isPlaceholder={option.isPlaceholder}
          description="This is a description"
        />
      ))}
    </Select>
  </div>
  )
}

export { SelectComponent };
