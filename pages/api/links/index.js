import { links } from '../../../database/links'
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(links)
  } else if (req.method === 'POST') {
    const title = req.body.title
    const pages = req.body.pages
    const language = req.body.language
    const newLink = {
      id: Date.now(),
      title,
      pages,
      language,
    }
    links.push(newLink)
    res.status(201).json(newLink)
  }
}
