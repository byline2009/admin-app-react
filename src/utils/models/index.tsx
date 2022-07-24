export interface ICompany {
  id: string
  name: string
}

export interface IAddress {
  province: IProvince
  district: IDistrict
  ward: IWard
  number?: string
  street?: string
  description?: string
}
export interface ISelect {
  value: string
  label: string
}
export interface IProvince {
  name: string
  slug?: string
  type?: string
  name_with_type?: string
  code: string
}
export interface IDistrict {
  name: string
  type?: string
  slug?: string
  name_with_type?: string
  path?: string
  path_with_type: string
  code: string
  parent_code: string
}
export interface IWard {
  name: string
  type?: string
  slug?: string
  name_with_type?: string
  path?: string
  path_with_type?: string
  code: string
  parent_code: string
  name_with_path?: string
}
export type PreviewImageType = {
  id: string
  name: string
  src: string
  size?: number
  note?: string
  file?: any
  extension?: string
  progress?: number
}

export interface IPerson {
  value: string
  label: string
  position: string
  imgUrl: string
}
export interface Coordination {
  lat: number
  lng: number
  address?: string
}
export interface IBlockAlbum {
  id: number
  name: string
  image: string
  album: number
}
