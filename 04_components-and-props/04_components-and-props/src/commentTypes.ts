export type author = {
  avatarUrl: string
  name: string
}

type comment = {
  text: string,
  author: author
  date: Date
}
export default comment;
