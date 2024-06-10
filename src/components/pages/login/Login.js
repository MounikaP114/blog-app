import './Login.css'

export default function Login() {
  return (
    <div className='login'>
        <p className='logintitle'>Login</p>
        <form className='loginForm'>
            <label>Email</label>
            <input  type='text' placeholder='Email ID' onChange={(e)=>e.target.value} required='true'></input><br/>
            <label>Password</label>
            <input type='text' placeholder='Password' onChange={(e)=>e.target.value} required='true'></input><br/>
            <button type='submit' >Login</button>
            <p className='registerlink'><span>Don't have account! </span><a href=''>Register</a></p>
        </form>
    </div>
    
  )
}
