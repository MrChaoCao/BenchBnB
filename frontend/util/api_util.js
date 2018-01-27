export const createUser = (username,password) => (
  $.ajax({
    method: "POST",
    url: '/api/users',
    data: {user:
      {
      username: `${username}`,
      password: `${password}`
      }
    }
  })
);


export const signIn = user => (
  $.ajax({
    method: "POST",
    url: '/api/session',
    data: user
  })
);
