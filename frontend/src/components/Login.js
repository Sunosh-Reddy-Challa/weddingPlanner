import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./Login.css"

function Login(props) {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch('https://mern-project-backend-opal.vercel.app/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();

      if (json.success) {
        localStorage.setItem('token', json.authtoken);
        console.log(localStorage.getItem("token"));
        props.setloginstate(true);
        history.push('/Dashboard');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className='container-sm my-3' style={{ width: "30%" }}>
      <form onSubmit={handleSubmit}>
      <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='email'
            value={credentials.email}
            onChange={onChange}
            name='email'
            aria-describedby='emailHelp'
          />
          <div id='emailHelp' className='form-text'></div>
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            value={credentials.password}
            onChange={onChange}
            name='password'
            id='password'
          />
        </div>
        <div className='d-flex justify-content-center align-items-center'>
          <button type='submit' className='btn' disabled={loading}>
            {loading ? 'Loading...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
