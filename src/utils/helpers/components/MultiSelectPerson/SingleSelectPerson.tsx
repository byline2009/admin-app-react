import {useState, useEffect, FC} from 'react'
import './index.css'
import {components} from 'react-select'
import {memberOptions} from '../../dataExamples'
import MySelectSingle from './MySelectSingle'
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

const SingleValue = (props: any) => (
  <components.SingleValue {...props}>
    <span>{props.data.label}</span>
  </components.SingleValue>
)
interface PropsType {
  selectedPerson?: IPerson
  setSelectedPerson: (e: any) => void
  placeholder?: string
}

const SingleSelectPerson: FC<PropsType> = ({selectedPerson, setSelectedPerson, placeholder}) => {
  const [localSelectedPerson, setLocalSelectedPerson] = useState<IPerson | undefined | null>(selectedPerson)

  useEffect(() => {
    if (selectedPerson == undefined) {
      setLocalSelectedPerson(null)
    } else setLocalSelectedPerson(selectedPerson)
  }, [selectedPerson])

  const handleChange = (selectedOption: any) => {
    setLocalSelectedPerson(selectedOption)
    setSelectedPerson(selectedOption)
  }
  return (
    <MySelectSingle
      options={memberOptions}
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      components={{
        Option,
        SingleValue,
      }}
      onChange={handleChange}
      value={localSelectedPerson}
      placeholder={placeholder}
    />
  )
}

export default SingleSelectPerson
