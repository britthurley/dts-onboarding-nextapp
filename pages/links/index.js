import { useState } from 'react'

function LinksPage() {
  const [title, setTitle] = useState([])
  const [readingTime, setReadingTime] = useState([])
  const [lan, setLan] = useState([])
  const [links, setLinks] = useState([])

  const deleteLink = async (linkId) => {
    const response = await fetch(`/api/links/{linkId}`, {
      method: 'DELETE',
    })
    fetchLinks()
  }
  const fetchLinks = async () => {
    const response = await fetch('/api/links')
    const data = await response.json()
    console.log(data)
    setLinks(data)
  }

  const submitLink = async () => {
    const response = await fetch('/api/links', {
      method: 'POST',
      body: JSON.stringify({
        title,
        readingTime,
        language: lan,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    console.log(data)
  }
  return (
    <>
      <div align="center">
        {'Title: '}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        {'Reading Time: '}
        <input
          type="text"
          value={readingTime}
          onChange={(e) => setReadingTime(e.target.value)}
        />
        <br />
        {'Language: '}
        <input
          type="text"
          value={lan}
          onChange={(e) => setLan(e.target.value)}
        />
        <br />
        <button onClick={submitLink}>Submit link</button>
      </div>{' '}
      <br />
      <br /> <br />
      <div align="center">
        <button onClick={fetchLinks}>Get the latest links</button>
      </div>{' '}
      {links.map((link) => {
        return (
          <div align="center" key={link.id}>
            {link.id}.<br />
            {'Title: '}
            {link.title}.<br />
            {'Reading Time: '} {link.readingTime}.<br />
            {'Language: '}
            {link.language} <br />
            <button onClick={() => deleteLink(link.id)}>Delete</button>
            <hr />
          </div>
        )
      })}{' '}
    </>
  )
}

export default LinksPage

export async function getServerSideProps({ locale }) {
  const meta = {
    data_en: {
      title: 'Next Template - Canada.ca',
      desc: 'English',
      author: 'Service Canada',
      keywords: '',
    },
    data_fr: {
      title: 'Next Template - Canada.ca',
      desc: 'Français',
      author: 'Service Canada',
      keywords: '',
    },
  }

  return {
    props: {
      locale,
      meta,
      nextPublicExampleEnv:
        process.env.NEXT_PUBLIC_ENV_EXAMPLE ?? 'Env variable not set',
      exampleEnv: process.env.ENV_EXAMPLE ?? 'Env variable not set',
    },
  }
}
