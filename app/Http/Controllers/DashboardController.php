<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Support\Str;
use App\Models\User;
use App\Models\Plan;
use App\Models\Visitor;
use Illuminate\Http\Request;
use App\Models\Invoice;
use Carbon\Carbon;

class DashboardController extends Controller
{
    public function index() {
        $previousMonth = Carbon::now()->subMonth();

        $users = User::count();
        $visitors = Visitor::count();


        $users_count_last_month = User::whereMonth('created_at', $previousMonth->month)
                              ->whereYear('created_at', $previousMonth->year)->count();
        $users_count_this_month = User::whereMonth('created_at', Carbon::now()->month)
                             ->whereYear('created_at', Carbon::now()->year)->count();

        $visitors_count_last_month = Visitor::whereMonth('created_at', $previousMonth->month)
                              ->whereYear('created_at', $previousMonth->year)->count();
        $visitors_count_this_month = Visitor::whereMonth('created_at', Carbon::now()->month)
                             ->whereYear('created_at', Carbon::now()->year)->count();


        // return inertia view
        return Inertia::render('Dashboard/Dashboard', [
           "data" => [
                'users'=>$users,
                'visitors'=>$visitors,

                "users_count_last_month" => $users_count_last_month,
                "users_count_this_month" => $users_count_this_month,
                "visitors_count_last_month" => $visitors_count_last_month,
                "visitors_count_this_month" => $visitors_count_this_month,
            ]
        ]);
    }
}
