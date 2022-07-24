import axios from 'axios'
import APIV2 from '../../utils/api/ApiV2'
import {IDistrict} from '../../utils/models'
const API_URL_V2 = process.env.REACT_APP_API_URL_V2

export const getProvinces = async (data: any) => {
  try {
    const response = await APIV2.get(API_URL_V2 + '/locations/provinces', {params: data})
    if (response) {
      if (response && response.data) {
        const arrayProvince = response.data.results.map((item: any) => ({
          name: item.name,
          slug: item.slug,
          name_with_type: item.name_with_type,
          code: item.code,
        }))
        return arrayProvince
      }
    } else return null
  } catch (err: any) {
    console.log(err.toString())
  }
}
export const getDistricts = async (data: any) => {
  try {
    const response = await APIV2.get(API_URL_V2 + '/locations/districts', {params: data})
    if (response) {
      if (response && response.data) {
        const arrayDistrict = response.data.results.map(
          (item: any) =>
            ({
              name: item.name,
              slug: item.slug,
              type: item.type.toString(),
              path: item.path.toString(),
              name_with_type: item.name_with_type,
              code: item.id.toString(),
              parent_code: item.province.toString(),
              path_with_type: item.path_with_type,
            } as IDistrict)
        )
        return arrayDistrict
      }
    } else return null
  } catch (err: any) {
    console.log(err.toString())
  }
}
export const getWards = async (data: any) => {
  try {
    const response = await APIV2.get(API_URL_V2 + '/locations/wards', {params: data})
    if (response) {
      if (response && response.data) {
        const arrayWard = response.data.results.map(
          (item: any) =>
            ({
              name: item.name,
              slug: item.slug,
              type: item.type.toString(),
              path: item.path.toString(),
              name_with_type: item.name_with_type,
              code: item.id.toString(),
              parent_code: item.district.toString(),
              path_with_type: item.path_with_type,
            } as IDistrict)
        )
        return arrayWard
      }
    } else return null
  } catch (err: any) {
    console.log(err.toString())
  }
}
