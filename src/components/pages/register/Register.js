import  './Register.css'

function Register() {
  return (
    
        <div className='register'>
        <p className='registertitle'>SignUp</p>
        <form className='registerForm'>
            <label>Email</label>
            <input  type='text' placeholder='Email ID' onChange={(e)=>e.target.value} required='true'></input><br/>
            <label>Password</label>
            <input type='text' placeholder='Password' onChange={(e)=>e.target.value} required='true'></input><br/>
            <label>Confirm Password</label>
            <input type='text' placeholder='Confirm Password' onChange={(e)=>e.target.value} required='true'></input><br/>
            <button type='submit' >SignUp</button>
            <p className='loginlink'><span>Already have an account! </span><a href=''>Login</a></p>
        </form>
    </div>
  )
}

export default Register