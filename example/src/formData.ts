export const formData = {
    fields: [
        {
            fieldType: 'input',
            id: 'email',
            name: 'email',
            label: 'Enter email',
            type: 'email',
            validations: [
              { type: "required", errorMessage: "email is required" },
              { type: "valid", errorMessage: "Please enter valid email" }
            ],
            validationType: 'string',
            variants: "outlined",
            className: "inputStyle",
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
          className: "selectStyle"
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
          },{
            label: 'Female',
            value: 'female'
          }]
      }
    ]
    
  }