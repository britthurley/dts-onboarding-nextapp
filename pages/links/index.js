import { useState } from 'react'

function LinksPage() {
  const [title, setTitle] = useState([])
  const [url, setURL] = useState([])
  const [length, setLength] = useState([])
  const [lan, setLan] = useState([])
  const [links, setLinks] = useState([])

  const deleteLink = async (linkId) => {
    console.log('linkId at top of deleteLink' + linkId)
    const response = await fetch(`/api/links/{linkId}`, {
      method: 'DELETE',
    })
    console.log('linkId after responsek' + linkId)
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
        length,
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
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1 container rounded-xl bg-white p-4 shadow-lg ">
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-1">{'Title: '}</div>
            <div className="col-span-2">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="col-span-1">{'URL: '}</div>
            <div className="col-span-2">
              <input
                type="text"
                value={url}
                onChange={(e) => setURL(e.target.value)}
              />
            </div>

            <div className="col-span-1">{'Length: '}</div>
            <div className="col-span-2">
              <input
                type="text"
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
            </div>

            <div className="col-span-1">{'Language: '}</div>
            <div className="col-span-2">
              <input
                type="text"
                value={lan}
                onChange={(e) => setLan(e.target.value)}
              />
            </div>

            <div className="col-start-2 col-span-2">
              <button
                className="font-display rounded focus:ring-1 focus:ring-black focus:ring-offset-2 py-2 px-10 whitespace-pre bg-[#173451] text-white text-center border border-[#173451] active:bg-[#21303F] hover:bg-#245C81 grid place-items-center"
                onClick={submitLink}
              >
                Submit link
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-2 container rounded-xl bg-white p-4 shadow-lg">
          <div>
            <button
              className="font-display rounded focus:ring-1 focus:ring-black focus:ring-offset-2 py-2 px-10 whitespace-pre bg-[#173451] text-white text-center border border-[#173451] active:bg-[#21303F] hover:bg-#245C81 grid place-items-center"
              onClick={fetchLinks}
            >
              Get the latest links
            </button>
          </div>
          <div>
            <div className="flex flex-col">
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                {' '}
                {links.map((link) => {
                  return (
                    <div className="flex items-start rounded-xl bg-white shadow-lg justify-center">
                      <div className="m-3" key={link.id}>
                        <h2 className="font-semibold">
                          {' '}
                          <a href={link.url} target="_blank">
                            {' '}
                            {link.title}{' '}
                          </a>
                        </h2>
                        <p className="mt-2 mb-2 text-sm text-gray-500">
                          {link.length} - {link.language}
                        </p>
                        <button
                          className="font-display rounded focus:ring-1 focus:ring-black focus:ring-offset-2 py-2 px-7 whitespace-pre bg-[#173451] text-white text-center border border-[#173451] active:bg-[#21303F] hover:bg-#245C81 grid place-items-center"
                          onClick={() => deleteLink(link.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )
                })}{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
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
