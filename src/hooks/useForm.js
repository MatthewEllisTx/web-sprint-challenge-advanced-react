import { useState } from 'react';

// write your custom hook here to control your checkout form
export default function useForm(initialValues){
  const [ values, setValues ] = useState(initialValues);

  function handleChanges(e){
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  return [ values, handleChanges ];
}