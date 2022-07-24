import {ErrorMessage, useField} from 'formik'
import React, {FC, useState} from 'react'
import {MultiSelect} from 'react-multi-select-component'
import {ISelect} from '../../../models'
import './index.css'

type SelectProps = {
  name: string
  options: ISelect[]
  disabled?: boolean
}
const FormMultiSelect: FC<SelectProps> = ({name, options, disabled}) => {
  const [field, meta, helpers] = useField(name)
  return (
    <>
      <MultiSelect
        options={options}
        value={field.value}
        onChange={(e: any) => {
          helpers.setValue(e)
        }}
        labelledBy='Select'
        className='mtest'
        overrideStrings={{
          allItemsAreSelected: 'Đã chọn tất cả',
          selectAll: 'Chọn tất cả',
          selectSomeItems: 'Chọn danh sách ...',
        }}
        disabled={disabled}
      />
      {disabled ? null : (
        <div className='text-danger'>
          <ErrorMessage name={name} />
        </div>
      )}
    </>
  )
}

export default FormMultiSelect
