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
            className: "inputStyle"
        },
        {
            fieldType: 'input',
            id: 'name',
            name: 'name',
            label: 'Enter name',
            type: 'string',
            validations: [
              { type: "required", errorMessage: "name is required" }
            ],
            validationType: 'string',
            variants: "outlined",
            className: "inputStyle"
        },
    ]
    
  }