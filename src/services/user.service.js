// In-memory user storage
let users = [];
let nextId = 1;

export const getAllUsers = () => users;

export const getUserById = (id) => {
  return users.find(user => user.id === parseInt(id));
};

export const createUser = (userData) => {
  const exists = users.some(user => user.email === userData.email);
  
  if (exists) {
    return { success: false, error: 'User already exists' };
  }

  const newUser = {
    id: nextId++,
    name: userData.name,
    email: userData.email
  };

  users.push(newUser);
  return { success: true, data: newUser };
};
