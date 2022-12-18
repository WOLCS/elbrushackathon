import { Box, Button as BaseButton, Container, Flex, Group, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useNavigate } from 'react-router-dom'
import JWTDecode from 'jwt-decode'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { usePostCredentialsMutation } from '../api/botApi'
import { updateUser } from '../store/botReducer'

export const LoginPage = () => {
   const [auth, properties] = usePostCredentialsMutation()
   const navigate = useNavigate()
   const accessToken = useSelector(state => state.bot.accessToken)
   const dispatch = useDispatch()
   const form = useForm({
      initialValues: {
         login: '',
         password: ''
      }
   })
   const onSubmit = async () => {
      const authToken = await auth(form.values)
      dispatch(updateUser(authToken.data.token))
   }
   React.useEffect(() => {
      if (accessToken) {
         const decodedToken = JWTDecode(accessToken)
         if (decodedToken.role === 'ROLE_ADMIN') {
            navigate('/admin')
         }
      }
   }, [accessToken])

   return (
      <Container size="sm">
         <Flex gap="xl" align="stretch" direction="column">
            <Box>
               <form>
                  <TextInput withAsterisk label="Login" placeholder="login" {...form.getInputProps('login')} />
                  <TextInput
                     withAsterisk
                     label="Password"
                     type="password"
                     placeholder="password"
                     {...form.getInputProps('password')}
                  />
                  <Group position="right" mt="md">
                     <BaseButton onClick={onSubmit}>Submit</BaseButton>
                  </Group>
               </form>
            </Box>
         </Flex>
      </Container>
   )
}
