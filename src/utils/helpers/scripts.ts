import {subjectOptions} from '.'

export function formatBytes(bytes: number, decimals = 2) {
  if (bytes == 0) return '0 Bytes'
  const k = 1024,
    dm = decimals || 2,
    sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}

export const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).slice(2)
}

export const handleSubject = (val: string) => {
  const text = subjectOptions.find((item) => item.value === val)
  return text?.label
}
