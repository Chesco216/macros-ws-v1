export const getMacros = async() => {
  
  // TODO: change url 
  // fetch doest not acept localhost
  const res = await fetch('localhost:3000/macros')
  const data = await res.json()

  return data;
}
