import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'

export function ModalNavidad () {
  const [modalShow, setModalShow] = useState(true)
  return (
    <Modal
      show={modalShow}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      onHide={() => setModalShow(false)}
    >
      <Modal.Header closeButton onClick={() => setModalShow(false)} />
      <Modal.Body className='m-0 p-0'>
        <video src='/FELICES-FIESTAS-IGECO-2023.mp4' autoPlay loop muted className='w-100' />
      </Modal.Body>
    </Modal>
  )
}
