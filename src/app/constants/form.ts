const formUser = {
  sync: {
    label: 'sync',
    value: '',
    type: 'label',
  },
  picture: {
    label: 'Imagen',
    value: '',
    type: 'file',
    validation: {
      required: true
    },
  },
  name: {
    label: 'Name',
    value: '',
    type: 'text',
    validation: {
      required: true,
      minLength: 5,
      maxLength: 10
    }
  },
  fathersLastName: {
    label: 'Apellido Paterno',
    value: '',
    type: 'text',
    validation: {
      required: true,
      minLength: 5,
      maxLength: 50
    },
  },
  mothersLastName: {
    label: 'Apellido Materno',
    value: '',
    type: 'text',
    validation: {
      required: true,
      minLength: 5,
      maxLength: 50
    },
  },
  email: {
    label: 'Email',
    value: '',
    type: 'email',
    validation: {
      required: true,
      email: true
    },
  },
  roleId: {
    label: 'role',
    value: '1',
    type: 'label',
  },
  active: {
    label: 'activo',
    value: '1',
    type: 'label',
  },
};

const jobs = {
  id: {
    label: 'id',
    value: '',
    type: 'label',
  },
  company: {
    label: 'Nombre Compañia',
    value: '',
    type: 'text',
    validation: {
      required: true,
      minLength: 5,
      maxLength: 10
    }
  },
  start_date: {
    label: 'Fecha Inicio',
    value: null,
    type: 'date',
    validation: {
      required: true,
    }
  },
  finish_date: {
    label: 'Fecha Fin',
    value: null,
    type: 'date',
    validation: {
      required: true,
    }
  },
};

const login = {
  company: {
    label: 'Usuario',
    value: '',
    type: 'text',
    validation: {
      required: true,
      minLength: 2,
      maxLength: 10
    }
  },
  password: {
    label: 'Password',
    value: '',
    type: 'password',
    validation: {
      required: true,
      minLength: 2,
      maxLength: 50
    }
  }
};

export {
  formUser,
  jobs,
  login
};

