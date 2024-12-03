import React from 'react'
import Form from '../Routes/Form'

const Contact = () => {
  return (
    <div>
      <Form>
        <label>Nombre:</label>
        <input type="text" />
        <label>Email:</label>
        <input type="text" />
      </Form>
    </div>
  )
}

export default Contact