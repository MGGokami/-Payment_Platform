import { ReactNode, useState } from 'react'
import { EnableSounds } from '.'
import { Select, useAudio } from '../../../common'
import { sounds } from '..'

interface ItemProps {
  children: ReactNode
  label: string
}

function Item(p: ItemProps) {
  return (
    <div className='grid grid-cols-3 gap-2'>
      <div className='flex items-center'>
        <label>{p.label}</label>
      </div>
      <div className='col-span-2 flex items-center justify-end'>
        {p.children}
      </div>
    </div>
  )
}

export function SettingsForm() {
  const [enabled, setEnabled] = useState(true)
  const { play, changeAudio } = useAudio('/livechat-129007.mp3')

  const checkTheme = () => {
    if (document.documentElement.classList.contains('dark')) return 'dark'
    return 'light'
  }

  const handleChangeSound = (url: string) => {
    if (url !== 'something') {
      changeAudio(url)
      setTimeout(() => {
        play()
      }, 100);
    }
  }

  const handleChangeTheme = (theme: string) => {
    if (theme === 'something') return;
    if (theme === 'dark')
      document.documentElement.classList.add('dark')
    else
      document.documentElement.classList.remove('dark')
  }

  return (
    <div className='flex flex-col gap-2'>
      <button onClick={play}>play</button>
      <Item label='Tema'>
        <Select
          onChange={handleChangeTheme}
          default={checkTheme()}
          options={[
            { id: 'dark', name: 'Oscuro' },
            { id: 'light', name: 'Claro' },
          ]}
        />
      </Item>
      <div>
        <hr className='dashed' />
      </div>
      <Item label='Reproducir sonidos'>
        <EnableSounds {...{ enabled, setEnabled }} />
      </Item>
      <Item label='Sonidos de notificación'>
        <Select
          options={sounds}
          onChange={handleChangeSound}
        />
      </Item>
    </div>
  )
}