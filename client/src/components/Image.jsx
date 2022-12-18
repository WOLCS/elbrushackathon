import { Image as BaseText } from '@mantine/core'
import { useGetImagesQuery } from '../api/botApi'


export const Image = ({elementLink, elementText}) => {

    const { data: image } = useGetImagesQuery(elementLink);
    return <BaseText src={image} alt={elementText || 'img'} height={180} />
}
