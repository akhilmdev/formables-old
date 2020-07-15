import React from 'react'

import Formables from 'formables'
import { formData } from './formData';

const App = () => {

  const onSubmit = (values: any) => {
    console.log(values);
    
  }
  return <Formables
            onSubmit={onSubmit}
            {...formData}
            values={''}
          />
}

export default App
