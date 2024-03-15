import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'

import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto('format').fit('max').url()
}

export const thumbnail = (source: Image) => {
	return imageBuilder?.image(source).width(480).height(360).auto('format').fit('scale').url()
}

export const urlClean = (source: Image) => {
	return imageBuilder?.image(source).url()
}

export const ogImage = (source: Image) => {
	return imageBuilder?.image(source).width(1200).height(630).auto('format').fit('max').url()
}
