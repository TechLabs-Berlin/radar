<script>
import { links } from '~/assets/content'

export default {
  fetch({ params, redirect, error }) {
    const link = links[params.pathMatch.toUpperCase()]
    if (typeof link !== 'undefined') {
      redirect(301, link)
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>
