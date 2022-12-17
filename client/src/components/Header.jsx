import { useState } from 'react';
import { Navbar, Tooltip, UnstyledButton, createStyles, Stack } from '@mantine/core';
import {
  IconHome2,
  IconArrowBarLeft,
} from '@tabler/icons';
import { useNavigate } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  active: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));


function NavbarLink({ icon: Icon, label, active, onClick }) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
        <Icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}




export function Header() {
  const [active] = useState(2);
  const navigate = useNavigate();

const home = [
  { icon: IconHome2, label: 'Home'},
];
const back = [
  { icon: IconArrowBarLeft, label: 'Back' },
];


  const homeView = home.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => navigate('/')}
    />
  ));
  const backView = back.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => navigate(-1)}
    />
  ));

  return (
    <Navbar height={750} width={{ base: 80 }} p="md">
      <Navbar.Section grow mt={90}>
        <Stack justify="center" spacing={800}>
          {homeView}
          </Stack>
        </Navbar.Section>
        <Navbar.Section grow mt={90}>
        <Stack justify="center" spacing={600}>
          {backView}
        </Stack>
      </Navbar.Section>
      
    </Navbar>
  );
}