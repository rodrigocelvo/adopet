import crypto from 'crypto'

export function generateUniqueId() {
  return crypto.randomBytes(3).toString('hex');
}