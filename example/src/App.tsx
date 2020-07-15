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
  return <div>testeesss</div>
}

export default App
