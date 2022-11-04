const formUser = {
  name: {
    label: 'Name',
    value: 'test1',
    type: 'text',
    validation: {
      required: true,
      minLength: 5,
      maxLength: 10
    },
  },
  age: {
    label: 'Age',
    value: 32,
    type: 'number',
    validation: {
      numbers: true
    }
  },
  email: {
    label: 'Email Address',
    value: null,
    type: 'email',
    validation: {
      email: true
    }
  },
  birthDate: {
    label: 'Fecha de nacimiento',
    value: null,
    type: 'date',
  },
  date: {
    label: 'Fecha de uno',
    value: null,
    type: 'datetime-local',
  },
  datedos: {
    label: 'Fecha de dos',
    value: null,
    type: 'datetime',
  },
  profilePic: {
    label: 'Profile Picture Upload',
    type: 'file'
  },
  comment: {
    label: 'comment',
    value: null,
    type: 'text',
    validation: {
      required: true,
      minLength: 5,
      maxLength: 10
    },
  },
  gender: {
    label: 'Gender',
    value: 'M',
    type: 'radio',
    options: [
      { label: 'Male', value: 'M' },
      { label: 'Female', value: 'F' }
    ]
  },
  city: {
    label: 'City',
    value: '39010',
    type: 'select',
    options: [
      { label: '(choose one)', value: '' },
      { label: 'Bolzano', value: '39100' },
      { label: 'Meltina', value: '39010' },
      { label: 'Appiano', value: '39057' }
    ],
    validation: {
      required: true
    }
  }
};

export {
  formUser
};

