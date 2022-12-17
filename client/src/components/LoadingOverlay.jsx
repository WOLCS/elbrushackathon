import { LoadingOverlay as BaseLoadingOverlay } from '@mantine/core'

export const LoadingOverlay = () => {
   return (
      <BaseLoadingOverlay
         loaderProps={{ size: 'xl', variant: 'dots' }}
         overlayOpacity={0.3}
         overlayBlur={2}
         overlayColor="#c5c5c5"
         visible
      />
   )
}
