export const formData = {
  fields: [
    {
      fieldType: 'input',
      id: 'email',
      name: 'email',
      label: 'Enter email',
      type: 'datetime-local',
      validations: [
        { type: "required", errorMessage: "email is required" },
        { type: "valid", errorMessage: "Please enter valid email" }
      ],
      validationType: 'string',
      variants: "outlined",
      containerClassName: "inputStyle",
      value: ''
    },
    {
      fieldType: 'text',
      id: 'name',
      variants: "h1",
      containerClassName: "textStyle",
      component: "h1",
      textContent: "this is a test"
    },
    {
      fieldType: 'select',
      id: 'state',
      name: 'state',
      label: 'Departamento',
      type: 'Text',
      validations: [{ type: "required", errorMessage: ["state is required"] }],
      validationType: "string",
      value: null,
      options: [{
        label: "Ahuachapán",
        value: 1
      },
      {
        label: "Cabañas",
        value: 2
      },
      {
        label: "Chalatenango",
        value: 3
      }],
      variants: "outlined",
      containerClassName: "selectStyle"
    },
    {
      fieldType: 'radio',
      containerClassName: 'radioStyle',
      label: 'gender',
      name: 'gender',
      id: 'gender',
      type: 'Text',
      validations: [{ type: "required", errorMessage: ["gender is required"] }],
      helperText: 'çlick gender',
      validationType: "string",
      radioControls: [{
        label: 'Male',
        value: 'male'
      }, {
        label: 'Female',
        value: 'female'
      }]
    },
    {
      fieldType: 'slider',
      id: 'slider',
      name: 'slider',
      label: 'show slider label',
      disabled: false,
      value: [6, 7],
      step: 1,
      marks: [{ value: 5, label: 'mid' }],
      valueLabelDisplay: 'on',
      max: 10,
      min: 0,
      track: 'normal',
      orientation: 'horizontal',
      containerClassName: 'sliderStyle',
      scale: (value: number) => value * 2,
      // getAriaLabel?: Function,
      // getAriaValueText?: Function,
      // valueLabelFormat?: Function,
      // ThumbComponent: ElementType
    },
    {
      fieldType: 'switch',
      checked: false,
      color: 'default',
      disabled: false,
      id: 'switch',
      name: 'switch',
      label: 'switch',
      size: 'small',
      value: false,
      containerClassName: 'switchStyle'
    },
    {
      fieldType: 'checkbox',
      checked: false,
      name: 'checkbox',
      color: 'default',
      disabled: false,
      containerClassName: 'checkboxStyle',
      id: 'checkbox',
      size: 'medium',
      label: 'checkbox'
  }
  ]

}