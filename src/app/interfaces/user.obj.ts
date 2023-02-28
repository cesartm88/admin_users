interface UserObj {
   name?: string;
   email: string;
   password?: string;
};

interface TokenObj{
  token: string;
  type: string;
}

interface UserLoguedObj {
    user: UserObj;
    authorisation?: TokenObj;
};

export {
  UserLoguedObj,
  UserObj
};
