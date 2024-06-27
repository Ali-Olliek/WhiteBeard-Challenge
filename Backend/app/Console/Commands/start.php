<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class start extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:start';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '
    - Run Migrations
    - Run Seeders
    - Run App';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->call("migrate");
        $this->call("db:seed");
        $this->call("serve");
    }
}
