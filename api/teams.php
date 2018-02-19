<?php
/**
 * Created by PhpStorm.
 * User: nemanja
 * Date: 19.2.18.
 * Time: 12.13
 */

header("Access-Control-Allow-Origin: *");

$teams = [
    [
        'id' => 1,
        'name' => 'John',
        'city' => 'Doe',
        'email' => 'john@example.com'
    ],
    [
        'id' => 2,
        'name' => 'Daniel',
        'city' => 'Ros',
        'email' => 'daniel@example.com'
    ],
    [
        'id' => 3,
        'name' => 'Martin',
        'city' => 'Hess',
        'email' => 'martin@example.com'
    ],
    [
        'id' => 4,
        'name' => 'Martin',
        'city' => 'Hessaa',
        'email' => 'martin@example.com'
    ],
    [
        'id' => 5,
        'name' => 'Nemanja',
        'city' => 'Bojanic',
        'email' => 'nemanjabojanic@example.com'
    ]
];

    echo(json_encode($teams));