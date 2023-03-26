const formUser = {
  sync: {
    label: 'sync',
    value: '',
    type: 'label',
  },
  picture: {
    label: 'Imagen',
    value: '',
    type: 'text',
    validation: {
      required: true,
      minLength: 5,
      maxLength: 100000
    }
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

const personalInfo = {
  id: {
    label: 'id',
    value: '',
    type: 'label',
  },
  profile_image: {
    label: 'Imagen',
    value: '',
    type: 'text',
    validation: {
      required: true,
      minLength: 5,
      maxLength: 100000
    }
  },
  name: {
    label: 'Nombre',
    value: '',
    type: 'text',
    validation: {
      required: true,
      minLength: 3,
      maxLength: 50
    }
  },
  apellidos: {
    label: 'Apellidos',
    value: '',
    type: 'text',
    validation: {
      required: true,
      minLength: 3,
      maxLength: 50
    }
  },
  frase: {
    label: 'Frase',
    value: '',
    type: 'text',
    validation: {
      required: true,
      minLength: 3,
      maxLength: 50
    }
  },
  telefono: {
    label: 'Telefono',
    value: '',
    type: 'number',
    validation: {
      required: true,
      minLength: 3,
      maxLength: 50
    }
  },
  correo: {
    label: 'Correo Electrónico',
    value: '',
    type: 'email',
    validation: {
      required: true,
      minLength: 3,
      maxLength: 50
    }
  },
  competencias: {
    label: 'Competencias',
    value: '',
    type: 'text',
    validation: {
      required: true,
      minLength: 3,
      maxLength: 50
    }
  },
  lenguajes_programacion: {
    label: 'Lenguajes de programación',
    value: '',
    type: 'text',
    validation: {
      required: true,
      minLength: 3,
      maxLength: 50
    }
  },
  frameworks: {
    label: 'Frameworks',
    value: '',
    type: 'text',
    validation: {
      required: true,
      minLength: 3,
      maxLength: 50
    }
  },
};


const languajes = {
  id: {
    label: 'id',
    value: '',
    type: 'label',
  },
  languaje: {
    label: 'Idioma',
    value: '',
    type: 'text',
    validation: {
      required: true,
      minLength: 3,
      maxLength: 50
    }
  },
  level: {
    label: 'Nivel',
    value: '',
    type: 'text',
    validation: {
      required: true,
      minLength: 3,
      maxLength: 50
    }
  }
};

const studies = {
  id: {
    label: 'id',
    value: '',
    type: 'label',
  },
  school: {
    label: 'Nombre de la institución',
    value: '',
    type: 'text',
    validation: {
      required: true,
      minLength: 3,
      maxLength: 50
    }
  },
  level: {
    label: 'Grado Académico',
    value: '',
    type: 'text',
    validation: {
      required: true,
      minLength: 3,
      maxLength: 50
    }
  },
  program_name: {
    label: 'Nombre del programa',
    value: '',
    type: 'text',
    validation: {
      required: true,
      minLength: 3,
      maxLength: 50
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

const courses = {
  id: {
    label: 'id',
    value: '',
    type: 'label',
  },
  school: {
    label: 'Nombre de la institución',
    value: '',
    type: 'text',
    validation: {
      required: true,
      minLength: 3,
      maxLength: 50
    }
  },
  program_name: {
    label: 'Nombre del programa',
    value: '',
    type: 'text',
    validation: {
      required: true,
      minLength: 3,
      maxLength: 50
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
  email: {
    label: 'Email',
    value: '',
    type: 'email',
    validation: {
      required: true,
      minLength: 2,
      maxLength: 50
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
  login,
  studies,
  personalInfo,
  languajes,
  courses
};

