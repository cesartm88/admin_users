const formUser = {
  picture: { type: 'img'},
  name: { type: 'alpha', validations: ['required'] },
  fathersLastName: { type: 'alpha', validations: ['required'] },
  mothersLastName: { type: 'alpha', validations: ['required'] },
  email:  { type: 'email' , validations: ['required']   },
  roleId: { type: 'select', validations: ['required'] },
  active: { type: 'select', validations: ['required'] }
};

export {
  formUser
};

