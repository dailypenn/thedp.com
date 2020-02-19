export interface IAuthor {
  id: string
  uuid: string
  name: string
  email: string
  slug: string
  bio: string
  tagline: string
  ceo_id: string
  status: string
}

export interface IArticle {
  id: string
  uuid: string
  slug: string
  headline: string
  subhead: string
  abstract: string
  content: string
  infobox: string
  template: string
  short_token: string
  status: string
  weight: string
  media_id: string
  created_at: string
  modified_at: string
  published_at: string
  metadata: string[]
  hits: string
  authors: IAuthor[]
  dominantMedia: {
    id: string
    uuid: string
    attachment_uuid: string
    title: string
    content: string

  }
}