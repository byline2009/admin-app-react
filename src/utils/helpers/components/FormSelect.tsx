import {ErrorMessage, useField} from 'formik'
import {FC} from 'react'
import {ISelect} from '../../models'
type SelectProps = {
  name: string
  options: ISelect[]
  disabled?: boolean
}
const FormSelect: FC<SelectProps> = ({name, options, disabled}) => {
  const [field, meta, helpers] = useField(name)
  return (
    <>
      <select
        name={name}
        value={field.value}
        onChange={(e: any) => {
          helpers.setValue(e.target.value!)
        }}
        onBlur={() => helpers.setTouched(true)}
        className='form-select form-select-white form-select-md'
        disabled={disabled}
      >
        <option value=''></option>
        {options.map((x, y) => (
          <option key={y} value={x.value}>
            {x.label}
          </option>
        ))}
      </select>
      {disabled ? null : (
        <div className='text-danger'>
          <ErrorMessage name={name} />
        </div>
      )}
    </>
  )
}
export default FormSelect
