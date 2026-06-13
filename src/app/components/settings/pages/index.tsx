import type { SettingsOptions } from '@/app/components/settings/options'
import { Accounts } from './accounts'
import { Account } from './account'
import { Appearance } from './appearance'
import { Audio } from './audio'
import { CacheSettings } from './content/cache'
import { Content } from './content'
import { Desktop } from './desktop'
import { Language } from './language'
import { LocalMusicSettings } from './content/local-music'
import { Privacy } from './privacy'

const pages: Record<SettingsOptions, JSX.Element> = {
  appearance: <Appearance />,
  audio: <Audio />,
  language: <Language />,
  content: <Content />,
  'local-music': <LocalMusicSettings />,
  cache: <CacheSettings />,
  accounts: <Accounts />,
  account: <Account />,
  desktop: <Desktop />,
  privacy: <Privacy />,
}

export function Pages({ page }: { page?: SettingsOptions }) {
  const currentPage = page ?? 'appearance'

  if (currentPage === 'accounts') {
    return (
      <div className="mx-auto max-w-2xl">
        {pages[currentPage]}
      </div>
    )
  }

  return pages[currentPage]
}
