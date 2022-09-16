import React, { useState } from "react";

const Subscribe = ()=>{
    const [form,setForm] = useState({
        userName:'',
        passWord:'',
        lastName:'',
        firstName:'',
        eMail:'',
        birthday:''
        
    });
    const checkForm=()=>{
        setForm({
            // userName:   document.getElementById('userName').value,
            // passWord:   document.getElementById('passWord').value,
            // lastName:   document.getElementById('lastName').value,
            // firstName:  document.getElementById('firstName').value,
            // eMail:      document.getElementById('eMail').value,
            // birthday:   document.getElementById('birthday').value,
        });
    }
    // return <form id="subscribe">
    //     <fieldset>Compte</fieldset>
    //     <div className="couple">
    //         <label htmlFor="userName">Identifiant : </label><input type="text" id="userName"/>            
    //     </div>
    //     <div className="couple">
    //         <label htmlFor="passWord">Mot de passe : </label><input type="text"  id="passWord"/>
    //     </div>
    //     <fieldset>Informations personnelles</fieldset>
    //     <div className="couple">
    //         <label htmlFor="lastName">Nom : </label><input type="text" id="lastName" />
    //     </div>
    //     <div className="couple">
    //         <label htmlFor="firstName">Prenom : </label><input type="text" id="firstName" />
    //     </div>
    //     <div className="couple">
    //         <label htmlFor="eMail">Email : </label><input type="text" id="eMail" />
    //     </div>
    //     <div className="couple">
    //         <label htmlFor="birthday">Anniversaire : </label><input type="text" id="birthday" />
    //     </div>
    //     <button onClick={checkForm}>S'inscrire</button>
    // </form>
    return <>
    <div className="text-center mt-24">

        <div className="flex items-center justify-center">
            <svg fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-blue-500" stroke="#43A047">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
            </div>
            <h2 className="text-4xl tracking-tight">
            Sign up your account
            </h2>
        </div>

    <div className="flex justify-center my-2 mx-4 md:mx-0">
    <form className="w-full max-w-xl bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for='Password'>Email address</label>
            <input className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type='email'  required/>
        </div>
        <div className="w-full md:w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for='Password'>Password</label>
            <input className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type='password' required/>
        </div>
        <div className="w-full md:w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for='ConfirmPassword'>Confirm your password</label>
            <input className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type='password' required/>
        </div>
        <div className="w-full flex items-center justify-between px-3 mb-3 ">
            <label for="remember" className="flex items-center w-1/2">
                <input type="checkbox" name="" id="" className="mr-1 bg-white shadow"/>
                <span className="text-sm text-gray-700 pt-1">Remember Me</span>
            </label>
            <div className="w-1/2 text-right">
                <a href="#" className="text-green-500 text-sm tracking-tight">Forget your password?</a>
            </div>
        </div>
        <div className="w-full md:w-full px-3 mb-6">
            <button className="appearance-none block w-full bg-green-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-green-400 focus:outline-none focus:bg-white focus:border-gray-500">Sign up</button>
        </div>
        
        </div>
    </form>
    </div></>
}

export default Subscribe;