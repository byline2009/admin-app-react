import {useState, useEffect, FC} from 'react'
import MySelect from './MySelect'
import './index.css'
import {components} from 'react-select'
import {memberOptions} from '../../dataExamples'
import {IPerson} from '../../../models'
const Option = (props: any) => {
  return (
    <div className='select-person-option'>
      <components.Option {...props}>
        <label>
          {props.value !== '*' && <img src={props.data.imgUrl} alt='' />}
          {props.label}
        </label>
        <input type='checkbox' checked={props.isSelected} onChange={() => null} />
      </components.Option>
    </div>
  )
}

const MultiValue = (props: any) => (
  <components.MultiValue {...props}>
    <span>{props.data.label}</span>
  </components.MultiValue>
)
interface PropsType {
  selectedList?: IPerson[]
  setSelectedList: (e: any) => void
  allList?: {value: string; label: string; position: string; imgUrl: string}[]
  placeholder?: string
}

const MultiSelectPerson: FC<PropsType> = ({selectedList = [], setSelectedList, allList, placeholder}) => {
  const [localSelectedList, setLocalSelectedList] = useState(selectedList)

  useEffect(() => {
    setLocalSelectedList(selectedList)
  }, [selectedList])

  const handleChange = (selectedOptions: any) => {
    setLocalSelectedList(selectedOptions)
    setSelectedList(selectedOptions)
  }
  return (
    <MySelect
      options={allList ? allList : memberOptions}
      isMulti
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      components={{Option, MultiValue}}
      onChange={handleChange}
      allowSelectAll={true}
      value={localSelectedList}
      placeholder={placeholder}
    />
  )
}

export default MultiSelectPerson
