/* eslint-disable react/jsx-no-undef */
import {FC, useEffect, useState} from 'react'
import {toAbsoluteUrl} from '../AssetHelpers'
import {KTSVG} from './KTSVG'
import SVG from 'react-inlinesvg'

type PropsType = {
  arrayText: string[]
  placeHolder?: string
  disabled?: boolean
  callbackArrayText?: (arrayText: string[]) => void
}
const FormArrayText: FC<PropsType> = ({arrayText, placeHolder, disabled, callbackArrayText}) => {
  const [localArray, setLocalArray] = useState<string[]>(arrayText)
  useEffect(() => {
    setLocalArray(arrayText)
  }, [arrayText])
  const onFormSubmit = (e: any) => {
    e.preventDefault()
    if (e.target.value != '') {
      setLocalArray([...localArray, e.target.value])
      callbackArrayText && callbackArrayText([...localArray, e.target.value])
      e.target.value = null
    }
  }
  const deleteText = (e: any) => {
    const newArray = localArray.filter((item) => item != e)
    setLocalArray(newArray)
    callbackArrayText && callbackArrayText(newArray)
  }
  return (
    <>
      <div className='col-12 border rounded py-5'>
        {disabled ? null : (
          <div className='d-flex  align-items-center position-relative mx-2 mb-2 '>
            <KTSVG path='/media/icons/duotune/general/gen021.svg' className='svg-icon-3 position-absolute ms-3' />
            <input
              type='text'
              className='form-control form-control-white form-control-sm w-100 ps-9 border-top-0 border-right-0 border-left-0 '
              style={{borderRadius: 0}}
              placeholder={placeHolder ? placeHolder : 'Nhập khu vực hoạt động'}
              onKeyPress={(e) => {
                e.key === 'Enter' && onFormSubmit(e)
              }}
            />
          </div>
        )}

        <div className='d-flex flex-wrap'>
          {Array.from(localArray as string[]).length > 0 &&
            Array.from(localArray as string[]).map((item, index) => {
              return (
                <div
                  className='border d-flex d-block-inline py-2 mx-2 my-2 ps-2 pe-5 rounded position-relative'
                  style={{
                    backgroundColor: '#F5F5FA',
                  }}
                  key={index}
                >
                  <span>{item}</span>
                  <button
                    className='btn btn-active-light-primary fs-6  position-absolute'
                    style={{
                      right: 0,
                      top: 0,
                      padding: 0,
                      borderRadius: '50%',
                    }}
                    onClick={() => deleteText(item)}
                    type='button'
                    disabled={disabled}
                  >
                    <span>
                      <SVG src='/media/icons/app/delete.svg' className='mh-50px mb-1' />
                    </span>
                  </button>
                </div>
              )
            })}
        </div>
      </div>
    </>
  )
}
export default FormArrayText
