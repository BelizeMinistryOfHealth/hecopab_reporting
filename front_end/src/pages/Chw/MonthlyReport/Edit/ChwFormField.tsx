import React, { ChangeEvent } from 'react';
import { Box, FormField, Text, TextInput } from 'grommet';

interface ChwFormFieldProps {
  label: string;
  maleValue: number;
  femaleValue: number;
  maleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  femaleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  maleFieldName: string;
  femaleFieldName: string;
}

const ChwFormField = (props: ChwFormFieldProps) => {
  const {
    label,
    maleValue,
    femaleValue,
    maleOnChange,
    femaleOnChange,
    maleFieldName,
    femaleFieldName,
  } = props;
  return (
    <Box
      border
      direction={'column'}
      align={'start'}
      pad={{ top: 'small', left: 'small', right: 'small' }}
    >
      <Text size={'medium'}>{label}</Text>
      <Box direction={'row'} align={'start'}>
        <FormField
          name={maleFieldName}
          label={<Text size={'small'}>Male</Text>}
          pad={false}
        >
          <TextInput
            name={maleFieldName}
            size={'small'}
            value={maleValue}
            onChange={maleOnChange}
          />
        </FormField>
        <FormField
          name={femaleFieldName}
          label={<Text size={'small'}>Female</Text>}
          pad={false}
        >
          <TextInput
            name={femaleFieldName}
            size={'small'}
            value={femaleValue}
            onChange={femaleOnChange}
          />
        </FormField>
      </Box>
    </Box>
  );
};

export default ChwFormField;
