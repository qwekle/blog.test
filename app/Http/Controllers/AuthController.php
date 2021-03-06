<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Auth;

class AuthController extends Controller {

    public function registerForm() {
        return view('pages.register');
    }

    // по сути выполняем обычную операцию создания нового пользователя
    public function register(Request $request) {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required'
        ]);

        $user = User::add($request->all());

        $user->generatePassword($request->get('password'));

        return redirect('/home/login');
    }

    public function loginForm() {
        return view('pages.login');
    }

    public function login(Request $request) {
        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if (Auth::attempt([
                    'email' => $request->get('email'),
                    'password' => $request->get('password')
                ])) {
            return redirect('/home');
        }
        
        return redirect()->back()->with('error', 'Неправильный логин или пароль');
    }
    
    public function logout() {
        Auth::logout();
        
        return redirect('/home/login');
    }

}
