// config.js
import fs from 'fs'
import 'dotenv/config'

const file = './lib/configdb.json'

function loadRaw() {
  return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file)) : { config: {} }
}

function get(key, fallback) {
  const db = loadRaw()
  return db.config?.[key] ?? fallback
}

export default {
  get PREFIX() { return get('prefix', '!') },
  get MODE() { return get('mode', 'public') },
  get CREATOR() { return get('creator', '918731810311@s.whatsapp.net') },
  get OWNER_NUMBERS() { return get('owner_numbers', ['918731810311']) },
  get MONGODB_URI() { return get('mongodb_uri', '') },
  get BOT_NAME() { return get('bot_name', 'Along') },
  get FOOTER() { return get('footer', '© Powered by ALONG') },
  get ANTIDELETE_MODE() { return get('antidelete_mode', 'on') },
  get AUTOVIEW_STATUS() { return get('autoview_status', false) },
  get AUTOLIKE_STATUS() { return get('autolike_status', false) },
  get SESSION_ID() { return process.env.SESSION_ID || 'DAVE-S*F=BXTEP24W6J' }
}
