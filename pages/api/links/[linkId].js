import { links } from '../../../database/links'

export default function handler(req, res) {
  const { linkId } = req.query
  if (req.method === 'GET') {
    const link = links.find((link) => link.id === parseInt(linkId))
    res.status(200).json(link)
  } else if (req.method === 'DELETE') {
    const deletedlink = links.find((link) => link.id === parseInt(linkId))
    const index = links.findIndex((link) => link.id === parseInt(linkId))
    links.splice(index, 1)
    res.status(200).json(deletedlink)
  }
}
