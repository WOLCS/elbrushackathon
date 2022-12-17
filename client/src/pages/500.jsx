import { createStyles, Title, Text, Button, Container, Group } from '@mantine/core'

const useStyles = createStyles(theme => ({
   root: {
      paddingTop: 80,
      paddingBottom: 120,
      backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background
   },

   label: {
      textAlign: 'center',
      fontWeight: 900,
      fontSize: 220,
      lineHeight: 1,
      marginBottom: theme.spacing.xl * 1.5,
      color: theme.colors[theme.primaryColor][3],

      [theme.fn.smallerThan('sm')]: {
         fontSize: 120
      }
   },

   title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      textAlign: 'center',
      fontWeight: 900,
      fontSize: 38,
      color: theme.white,

      [theme.fn.smallerThan('sm')]: {
         fontSize: 32
      }
   },

   description: {
      maxWidth: 540,
      margin: 'auto',
      marginTop: theme.spacing.xl,
      marginBottom: theme.spacing.xl * 1.5,
      color: theme.colors[theme.primaryColor][1]
   }
}))

export const ServerErrorPage = () => {
   const { classes } = useStyles()

   return (
      <div className={classes.root}>
         <Container>
            <div className={classes.label}>500</div>
            <Title className={classes.title}>Что-то пошло не так...</Title>
            <Text size="lg" align="center" className={classes.description}>
               Но не переживай, мы скоро починим!
            </Text>
            <Group position="center">
               <Button variant="white" size="md">
                  Обновить
               </Button>
            </Group>
         </Container>
      </div>
   )
}
