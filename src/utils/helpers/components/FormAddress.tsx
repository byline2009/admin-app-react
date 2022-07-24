import {ErrorMessage, useField} from 'formik'
import {FC} from 'react'

const FormSelectAddress: FC<{disabled?: boolean; name: string; options: any; callback: (e: any) => void}> = ({
  name,
  options,
  callback,
  disabled,
}) => {
  const [field, meta, helpers] = useField(name)
  return (
    <>
      <select
        name={name}
        value={field.value}
        onChange={(e: any) => {
          helpers.setValue(e.target.value!)
          callback(e.target.value)
        }}
        onBlur={() => helpers.setTouched(true)}
        className='form-select form-select-white form-select-md'
        disabled={disabled}
      >
        <option value=''></option>
        {options.map((x: any, y: number) => (
          <option key={y} value={x.code}>
            {x.name_with_type}
          </option>
        ))}
      </select>
      <div className='text-danger'>
        <ErrorMessage name={name} />
      </div>
    </>
  )
}
export default FormSelectAddress
