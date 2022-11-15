import React, { useState } from 'react';
import styles from './Login.module.css';
import logoPng from './../../assets/amazon_logo.png';
import natureJpg from './../../assets/nature2.jpg';
import googlePng from './../../assets/google.png';
import fbPng from './../../assets/fb.png';
import minusPng from './../../assets/minus.png';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDisplay, setEmailDisplay] = useState(false);
    const [pswdDisplay, setPswdDisplay] = useState(false);


    function changeEmailHandler(event) {
        const value = event.target.value;
        setEmailDisplay(false);
        setEmail(value);
    }
    function changePswdHandler(event) {
        const value = event.target.value;
        setPswdDisplay(false);
        setPassword(value);
    }

    function submitHandler(event) {
        event.preventDefault();
        //to prevent submitting blank lists
        if(email.trim().length === 0 || password.trim().length === 0 ){
            setEmailDisplay(true);
            setPswdDisplay(true);
        }
        else if(email.trim().length !==0){
            setEmailDisplay(false);
        }
        else if(password.trim().length !==0){
            setPswdDisplay(false);
        }

        setEmail('');
        setPassword('');
    }

    return (
        <div className={styles.container} >
            <div className={styles['card-background']} />
            <div className={styles.card} >
                <div className={styles.upper}>
                    <img src={logoPng} alt='logo' />
                </div>
                <div className={styles.lower}>

                    <h2>Login</h2>
                    <img className={styles.natImg} src={natureJpg} alt='Login' />

                    <form className={styles.form} onSubmit={submitHandler}>
                        <div className={styles.input}>
                            <input type='email' onChange={changeEmailHandler} value={email} placeholder='Email' />
                            {emailDisplay && <p className={styles.error}> <img src={minusPng} alt='' /> The email field is required </p>}
                            <input type='password' onChange={changePswdHandler} value={password} placeholder='Password' />
                            {pswdDisplay && <p className={styles.error}> <img src={minusPng} alt='' /> The password field is required </p>}
                        </div>
                        <button type='submit'>Sign In</button>
                    </form>

                    <div className={styles.text}>
                        <p>Forget Password?</p>
                        <p className={styles.text2}>New User? Sign Up</p>
                    </div>

                    <div className={styles.or}>or</div>

                    <div className={styles.lowerLink}>
                        <div className={styles.google}>
                            <span><img src={googlePng} alt='' /></span>
                            <p>CONTINUE WITH GOOGLE</p>
                        </div>
                        <div className={styles.fb}>
                            <span><img src={fbPng} alt='' /></span>
                            <p>CONTINUE WITH FACEBOOK</p>
                        </div>
                    </div>

                </div>





            </div>
        </div>
    );
};

export default Login;



