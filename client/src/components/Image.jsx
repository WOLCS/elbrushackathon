import { Image as BaseImage } from '@mantine/core'
import { BASE_URL } from '../api/botApi'
export const Image = ({ elementLink, elementText }) => {
   const url = `${BASE_URL}/${elementLink}`
   return <BaseImage fit="contain" src={url} alt={elementText || 'img'} height={180} />
}
