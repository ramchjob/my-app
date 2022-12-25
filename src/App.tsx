
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';
import UserList from './user-list';

function App(props: { name: string }) {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const styles = {
    container: {
      width: "80%",
      margin: "0 auto",
    },
    input: {
      width: "100%",
    },
  };
  const onSubmit = (data: any) => {  
    console.log(data);
   };

   useEffect(() => {
    fetch("http://localhost:8080/customers")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  return (
    <div style={styles.container}>
    <UserList></UserList>

    <br></br>

      <h4>Signup</h4>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Username" style={styles.input} type="text" {...register('userName', {required: true}) } />
        <input placeholder="Email" style={styles.input} type="text" {...register('email', {required: true})} />
        <input placeholder="Password" style={styles.input} type="text" {...register('password', {required: true})} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
