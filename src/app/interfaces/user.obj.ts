interface UserObj {
   name?: string;
   email: string;
   password?: string;
};

interface UserLoguedObj {
    user: UserObj;
    token: string;
};

export {
  UserLoguedObj,
  UserObj
};
