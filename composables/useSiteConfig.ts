/** @ts-ignore */
import { fetchOneEntry } from '@builder.io/sdk-vue'

export const useSiteConfig = () => {
    const { builderApiKey } = useRuntimeConfig().public

    const config = useAsyncData(
        'site-config',
        () =>
            fetchOneEntry({
                model: 'site-config',
                apiKey: builderApiKey,
            }),
        {
            transform: ({ data }) => data,
        },
    )

    return useState('site-config', () => config.data)
}
