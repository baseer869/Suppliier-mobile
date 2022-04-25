

export default Api = (path, method,param,  token, ) => {
    console.log(path)
  let option = {
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      // credentials: 'same-origin'
    },

    method: method,
    ...(param   && {body: JSON.stringify(param)}),
  };
  if(token){
     option.headers.Authorization = `${token}` 
  }
  console.log(option)
  return fetch(path, option)
    .then(response => response.json())
    .then(data => {
      console.log('data======\n\n\n', data)
      return data;
    })
    .catch(error => {
      console.log( "server error", error);
      return error;
    });
};
