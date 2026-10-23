// Helpers around the Nuxt Content collections defined in `content.config.ts`.

// The URL slug of a content item is the name of its file, e.g.
// `events/kick-off` -> `kick-off`
const withSlug = (item) => ({ ...item, slug: item.stem.split('/').pop() })

export const useIsPublic = () => useRuntimeConfig().public.scope === 'public'

// Single-file collections (term, faq, ...) hold exactly one document.
export const useSingleDoc = (collection) =>
  useAsyncData(`content-${collection}`, () =>
    queryCollection(collection).first()
  )

export const useEventList = () => {
  const isPublic = useIsPublic()
  return useAsyncData('content-events', async () => {
    let query = queryCollection('events').order('date', 'ASC')
    if (isPublic) query = query.where('is_public', '=', true)
    return (await query.all()).map(withSlug)
  })
}

export const useMilestoneList = () =>
  useAsyncData('content-milestones', async () =>
    (await queryCollection('milestones').order('deadline', 'ASC').all()).map(
      withSlug
    )
  )

export const useContentBySlug = (collection, slug) =>
  useAsyncData(`content-${collection}-${slug}`, async () => {
    const item = await queryCollection(collection)
      .where('stem', '=', `${collection}/${slug}`)
      .first()
    return item && withSlug(item)
  })
