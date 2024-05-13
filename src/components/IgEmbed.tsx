import { InstagramEmbed } from 'react-social-media-embed';

export default function IgEmbed({url}: {url: string}) {
  return (
    <div style={{ maxWidth: '400px' }}>
      <InstagramEmbed url={url} />
    </div>
  )
}
