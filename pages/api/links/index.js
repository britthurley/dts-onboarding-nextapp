import { links } from '../../../database/links'
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(links)
  } else if (req.method === 'POST') {
    const title = req.body.title
    const url = req.body.url
    const length = req.body.length
    const language = req.body.language
    const newLink = {
      id: Date.now(),
      title,
      url,
      length,
      language,
    }
    links.push(newLink)
    res.status(201).json(newLink)
  }
}
