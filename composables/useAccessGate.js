// A simple, optional password gate for the whole Radar (see ACCESS_PASSWORD in
// nuxt.config.ts). It keeps casual visitors away, e.g. people who only have a
// link from marketing material, but it is NOT real protection: the content is
// public in the repository and in the generated static files.

const STORAGE_KEY = 'radar-access'

export const hashPassword = async (password) => {
  const digest = await crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(password)
  )
  return Array.from(new Uint8Array(digest), (byte) =>
    byte.toString(16).padStart(2, '0')
  ).join('')
}

const remember = (hash) => {
  try {
    localStorage.setItem(STORAGE_KEY, hash)
  } catch {
    // e.g. blocked storage: the password is asked again on the next visit
  }
}

const recall = () => {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

export const useAccessGate = () => {
  const { accessHash } = useRuntimeConfig().public

  // 'checking' until the browser has looked up an earlier unlock, then 'locked'
  // or 'unlocked'. Without a password the gate is always open.
  const status = useState('access-status', () =>
    accessHash ? 'checking' : 'unlocked'
  )

  onMounted(() => {
    if (status.value === 'checking') {
      status.value = recall() === accessHash ? 'unlocked' : 'locked'
    }
  })

  const unlock = async (password) => {
    const hash = await hashPassword(password.trim())
    if (hash !== accessHash) return false
    remember(hash)
    status.value = 'unlocked'
    return true
  }

  return { status, unlock }
}
