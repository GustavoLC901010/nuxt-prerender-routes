import { defu } from 'defu'
import type { Nuxt } from '@nuxt/schema'
import { minify } from 'html-minifier'

export function prepareNitroConfig(_nuxt: Nuxt, routes: string) {
  _nuxt.options.nitro.prerender = defu(_nuxt.options.nitro.prerender, { crawlLinks: true, routes: [...routes] })
}

export async function minifyFiles(filePath: string, content: string) {
  if (filePath.endsWith('.html')) {
    return minify(content, {
      collapseWhitespace: true,
      removeComments: true,
    })
  }
  else if (filePath.endsWith('.json')) {
    return JSON.stringify(JSON.parse(content))
  }
  return content
}
