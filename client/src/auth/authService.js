// authService.js
export const login = (userData) => {
  localStorage.setItem("user", JSON.stringify(userData));
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const userJson = localStorage.getItem("user");
  return userJson ? JSON.parse(userJson) : null;
};
