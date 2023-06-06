const users_config = {
  sync: {
    show: 0,
    alias: 'Identificador'
  },
  picture: {
    show: 1,
    alias: 'Imagen'
  },
  name: {
    show: 1,
    alias: 'Nombre'
  },
  fathersLastName: {
    show: 1,
    alias: 'Apellido Paterno'
  },
  mothersLastName: {
    show: 1,
    alias: 'Apellido materno'
  },
  email: {
    show: 1,
    alias: 'Email'
  },
  roleId: {
    show: 0,
    alias: ''
  },
  active: {
    show: 0,
    alias: ''
  },
  button_edit: {
    button: 1,
    alias: 'Editar',
    color: 'default'
  },
  button_delete: {
    button: 1,
    alias: 'Eliminar',
    color: 'red'
  }
};

const personaInfo_list = {
  id: {
    show: 0,
    alias: 'Identificador'
  },
  profile_image:{
    show: 1,
    alias: 'Imagen de perfil'
  },
  name: {
    show: 1,
    alias: 'Nombre'
  },
  apellidos: {
    show: 1,
    alias: 'Apellidos'
  },
  description:{
    show: 1,
    alias: 'Descripción'
  },
  frase: {
    show: 1,
    alias: 'Frase'
  },
  telefono: {
    show: 1,
    alias: 'Telefono'
  },
  correo: {
    show: 1,
    alias: 'Email'
  },
  competencias: {
    show: 1,
    alias: 'Competencias'
  },
  lenguajes_programacion: {
    show: 1,
    alias: 'Lenguajes de programación'
  },
  frameworks: {
    show: 1,
    alias: 'Frameworks'
  },
  button_edit: {
    button: 1,
    alias: 'Editar',
    color: 'default'
  },
  button_delete: {
    button: 1,
    alias: 'Eliminar',
    color: 'red'
  }
};

const languajes_list = {
  id: {
    show: 0,
    alias: 'Identificador'
  },
  level: {
    show: 1,
    alias: 'Nivel'
  },
  languaje: {
    show: 1,
    alias: 'Idioma'
  },
  button_edit: {
    button: 1,
    alias: 'Editar',
    color: 'default'
  },
  button_delete: {
    button: 1,
    alias: 'Eliminar',
    color: 'red'
  }
};

const skills_list = {
  id: {
    show: 0,
    alias: 'Identificador'
  },
  skill: {
    show: 1,
    alias: 'Habilidad'
  },
  porcentaje: {
    show: 1,
    alias: 'Porcentaje'
  },
  button_edit: {
    button: 1,
    alias: 'Editar',
    color: 'default'
  },
  button_delete: {
    button: 1,
    alias: 'Eliminar',
    color: 'red'
  }
};

const courses_list = {
  id: {
    show: 0,
    alias: 'Identificador'
  },
  school: {
    show: 1,
    alias: 'Nombre de la escuela'
  },
  start_date: {
    show: 1,
    alias: 'fecha de inicio'
  },
  finish_date: {
    show: 1,
    alias: 'fecha de fin'
  },
  program_name: {
    show: 1,
    alias: 'Nombre del programa'
  },
  button_edit: {
    button: 1,
    alias: 'Editar',
    color: 'default'
  },
  button_delete: {
    button: 1,
    alias: 'Eliminar',
    color: 'red'
  }
};

const jobs_list = {
  id: {
    show: 0,
    alias: 'Identificador'
  },
  company: {
    show: 1,
    alias: 'Nombre compania'
  },
  position:{
    show: 1,
    alias: 'Puesto'
  },
  start_date: {
    show: 1,
    alias: 'fecha de inicio'
  },
  finish_date: {
    show: 1,
    alias: 'fecha de fin'
  },
  button_edit: {
    button: 1,
    alias: 'Editar',
    color: 'default'
  },
  button_delete: {
    button: 1,
    alias: 'Eliminar',
    color: 'red'
  }
};

const studies_list = {
  id: {
    show: 0,
    alias: 'Identificador'
  },
  school: {
    show: 1,
    alias: 'Nombre de la escuela'
  },
  level: {
    show: 1,
    alias: 'grado academico'
  },
  program_name: {
    show: 1,
    alias: 'Nombre del programa'
  },
  start_date: {
    show: 1,
    alias: 'fecha de inicio'
  },
  finish_date: {
    show: 1,
    alias: 'fecha de fin'
  },
  button_edit: {
    button: 1,
    alias: 'Editar',
    color: 'default'
  },
  button_delete: {
    button: 1,
    alias: 'Eliminar',
    color: 'red'
  }
};

export {
  users_config,
  jobs_list,
  studies_list,
  personaInfo_list,
  languajes_list,
  courses_list,
  skills_list
}
