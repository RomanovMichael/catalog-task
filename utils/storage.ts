export const saveToStorage = <T>(key: string, data: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data))
  }
  catch (err) {
    console.error(`[Storage] Ошибка при сохранении "${key}":`, err)
  }
}

export const loadFromStorage = <T>(key: string): T | null => {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) as T : null
  }
  catch (err) {
    console.error(`[Storage] Ошибка при загрузке "${key}":`, err)
    return null
  }
}
