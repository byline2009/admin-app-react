/* eslint-disable import/no-named-as-default-member */
import React from 'react'
import PropTypes from 'prop-types'
import {default as ReactSelect} from 'react-select'

const MySelect = (props: any) => {
  if (props.allowSelectAll) {
    return (
      <ReactSelect
        {...props}
        options={[props.allOption, ...props.options]}
        onChange={(selected: any) => {
          if (
            selected !== null &&
            selected.length > 0 &&
            selected[selected.length - 1].value === props.allOption.value
          ) {
            return props.onChange(props.options)
          }
          return props.onChange(selected)
        }}
        placeholder={props.placeholder}
      />
    )
  }

  return <ReactSelect {...props} />
}

MySelect.propTypes = {
  options: PropTypes.array,
  value: PropTypes.any,
  onChange: PropTypes.func,
  allowSelectAll: PropTypes.bool,
  isMulti: PropTypes.bool,
  closeMenuOnSelect: PropTypes.bool,
  components: PropTypes.object,
  hideSelectedOptions: PropTypes.bool,
  allOption: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }),
  placeholder: PropTypes.string,
}

MySelect.defaultProps = {
  allOption: {
    label: 'Chọn tất cả',
    value: '*',
  },
  placeholder: 'Chọn thành viên ...',
}

export default MySelect
