import React from 'react';
import { Box, Button, Text } from 'grommet';
import { useHistory } from 'react-router';

interface SidebarButtonProps {
  label: string;
  onClick: () => void;
}

const SidebarButton = (props: SidebarButtonProps) => {
  const { label, onClick } = props;
  return (
    <Button plain onClick={onClick}>
      {({ hover }: { hover: boolean }) => (
        <Box
          background={hover ? 'accent-4' : undefined}
          margin={{ top: 'small' }}
          pad={{ horizontal: 'small', vertical: 'small' }}
        >
          <Text size={'small'}>{label}</Text>
        </Box>
      )}
    </Button>
  );
};

export interface SidebarItems {
  label: string;
  link: string;
}

export interface SidebarProps {
  labels: SidebarItems[];
}

const Sidebar = (props: SidebarProps) => {
  const { labels } = props;
  const history = useHistory();
  return (
    <Box
      fill={'vertical'}
      width={'small'}
      background={'dark-2'}
      elevation={'xlarge'}
    >
      <Button label={'Home'} />
      <Box flex overflow='auto'>
        {labels.map((l) => (
          <SidebarButton label={l.label} onClick={() => history.push(l.link)} />
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
