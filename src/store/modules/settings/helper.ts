import { ss } from '@/utils/storage'

const LOCAL_NAME = 'settingsStorage'

export interface SettingsState {
  systemMessage: string
  temperature: number
  top_p: number
}

export function defaultSetting(): SettingsState {
  return {
    systemMessage: 'You are ChatGPT, a large language model trained by OpenAI.\nKnowledge cutoff: undefined\nCurrent model: gpt-4-gizmo-g-rCH98bflk\nCurrent time: 2024/4/6 20:15:50\nLatex inline: $x^2$\nLatex block: $$e=mc^2$$',
    temperature: 0.8,
    top_p: 1,
  }
}

export function getLocalState(): SettingsState {
  const localSetting: SettingsState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: SettingsState): void {
  ss.set(LOCAL_NAME, setting)
}

export function removeLocalState() {
  ss.remove(LOCAL_NAME)
}
