import '../App.css'
import { Link } from 'react-router-dom';

const Login = () => {

    return (
        <div className='login'>
            <img />

            <div className='login_section'>
                <h2>Sign In</h2>
                <form method='post'>
                    <input name='email' type='email' />
                    <input name='password' type='password' />
                    <Link>Forgot password?</Link>

                    <h2>account type</h2>
                    <options>
                        <input type='radio' />
                        <input type='radio' />
                    </options>
                    <button type='submit'>Sign in</button>
                    <div>
                        <Link>Dont have an account?   Register</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;