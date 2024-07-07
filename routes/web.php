<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UserController;
use \App\Http\Middleware\admin;


Route::get('/', function () { return Inertia::render('Home');});
Route::get('/about', function () { return Inertia::render('About');});
Route::get('/programs', function () { return Inertia::render('Programs');});
Route::get('/news', function () { return Inertia::render('News');});
Route::get('/get-involved', function () { return Inertia::render('Getinvolved');});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

Route::middleware([
    'auth:sanctum',
    'admin',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('dashboard', [DashboardController::class, "index"])->name('dashboard');

    Route::resource('user', UserController::class);
});
