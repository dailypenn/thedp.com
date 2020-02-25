export const generateSlug = (slug: string, created_at: string): string => {
  const firstIndex = created_at.indexOf('-')
  const year = created_at.substring(0, firstIndex)
  const month = created_at.substring(firstIndex + 1, created_at.indexOf('-', firstIndex + 1))
  return `${year}/${month}/${slug}`
}

export const IMAGE_URL = (attachment_uuid: string, extension: string): string => 
  `https://snworksceo.imgix.net/dpn/${attachment_uuid}.sized-1000x1000.${extension}?w=1000`