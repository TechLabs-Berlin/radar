<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <svg width="0" height="0" style="display: none" v-html="svgSprite" />
</template>

<script setup>
// Bundle every icon in assets/icons into a single SVG sprite, so they can be
// referenced with <TIcon icon="name" />.
const icons = import.meta.glob('@/assets/icons/*.svg', {
  eager: true,
  query: '?raw',
  import: 'default',
})

const svgSprite = Object.entries(icons)
  .map(([path, content]) => {
    // extract icon id from filename
    const id = path.replace(/^.*\/(.*)\.svg$/, '$1')
    return (
      content
        // drop title tags and the fill on the svg tag, so icons can be coloured with CSS
        .replace(/<title>.*?<\/title>/gs, '')
        .replace(/<svg[^>]*>/, (tag) => tag.replace(/\sfill="[^"]*"/, ''))
        // replace svg tags with symbol tags and id attribute
        .replace('<svg', `<symbol id="${id}"`)
        .replace('</svg>', '</symbol>')
    )
  })
  .join('\n')
</script>
