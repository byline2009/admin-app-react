import React, {FC, useEffect, useState} from 'react'
import {Modal} from 'react-bootstrap'

type Props = {
  body?: string
  onClose: () => void
  title?: string
  visible: boolean
  closeBtnText?: string
}

const AlertDialog: React.FC<Props> = (props) => {
  const [isOpened, setIsOpened] = useState(props.visible)
  const [localBody, setLocalBody] = useState(props.body)
  useEffect(() => {
    setIsOpened(props.visible)
  }, [props.visible])
  useEffect(() => {
    setLocalBody(props.body)
  }, [props.body])

  const onClose = (event: any) => {
    if (event) {
      event.stopPropagation()
    }
    setIsOpened(false)
    if (typeof props.onClose === 'function') {
      props.onClose()
    }
  }

  const closeButton = (
    <button className='btn btn-icon btn-primary me-10 px-10' onClick={onClose}>
      {props.closeBtnText}
    </button>
  )

  const modal = (
    <Modal
      show={isOpened}
      onHide={props.onClose!}
      className='modal-sticky modal-sticky-lg modal-sticky-bottom-right'
      dialogClassName='modal-dialog modal-dialog-centered'
    >
      <Modal.Header>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{localBody}</Modal.Body>
      <Modal.Footer>{closeButton}</Modal.Footer>
    </Modal>
  )

  return <>{modal}</>
}

AlertDialog.defaultProps = {
  closeBtnText: 'Đóng',
  title: 'Thông báo',
}

export default AlertDialog
