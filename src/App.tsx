
import { useForm } from 'react-hook-form';
import './App.css';
import UserList from './user-list';

function App(props: { name: string }) {
  const { register, handleSubmit } = useForm();
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
  return (
    <div style={styles.container}>
    <UserList></UserList>


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
