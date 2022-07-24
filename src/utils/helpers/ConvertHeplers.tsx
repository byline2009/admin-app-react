import {uid} from './scripts'
import {ISelect} from '../models'
import {typeHousingOptions, typeOptions} from './dataExamples'

export function convertStatus(status?: string) {
  switch (status) {
    case '1':
      return 'Đang cập nhật'
    case '2':
      return 'Sắp mở bán'
    case '3':
      return 'Đang mở bán'
    case '4':
      return 'Đã bàn giao'
    default:
      return ''
  }
}
export function convertTypeFacilitiesToText(status?: string) {
  switch (status) {
    case '1':
      return 'Trường học'
    case '2':
      return 'Bệnh viện/Trạm y tế'
    case '3':
      return 'Chợ'
    case '4':
      return 'Trung tâm thương mại'
    case '5':
      return 'Khu công nghiệp'
    case '6':
      return 'Hành chính'
    case '7':
      return 'Công viên'
    case '8':
      return 'Trung tâm thể thao'
    default:
      return ''
  }
}

export function convertType(projectTypes?: number[]) {
  const arrayText: string[] = []
  projectTypes?.forEach((e: number) => {
    const item = typeOptions.filter((item) => item.value == e.toString())
    item && arrayText.push(item[0].label)
  })
  return arrayText
}
export function convertTypeToArrayObject(projectTypes?: number[]) {
  const arrayObject: ISelect[] = []
  projectTypes?.forEach((e: number) => {
    const item = typeOptions.filter((item) => item.value == e.toString())
    item && arrayObject.push(item[0])
  })
  return arrayObject
}
export function convertApartmentTypeToArrayObject(projectTypes?: number[]) {
  const arrayObject: ISelect[] = []
  projectTypes?.forEach((e: number) => {
    const item = typeHousingOptions.filter((item) => item.value == e.toString())
    item && arrayObject.push(item[0])
  })
  return arrayObject
}
export const convertFileToBase64 = (file: any) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsBinaryString(file)

    reader.onload = () => {
      const fileRes = btoa(reader.result as string)
      const srcFile = `data:image/jpg;base64,${fileRes}`
      resolve({
        id: uid(),
        src: srcFile,
        fileName: file.name,
        size: file.size,
        note: '',
        file: file,
      })
    }
    reader.onerror = () => {
      reject()
      console.log('There is a problem while uploading...')
    }
  })
export function convertDateToStringMonthYear(dateString: string) {
  const date = new Date(dateString)
  if (date.getMonth() < 1) {
    return '01' + '/' + date.getFullYear()
  } else if (date.getMonth() < 10) {
    return '0' + (date.getMonth() + 1).toString() + '/' + date.getFullYear()
  } else return (date.getMonth() + 1).toString() + '/' + date.getFullYear()
}
export function getPageNumer(total: number, limit: number) {
  return Math.ceil(total / limit)
}
