<?php

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

$request = Request::createFromGlobals();
$path = $request->getPathInfo();

if (in_array($path, array('', '/')) {
    $response = new Response('Welcome to the homepage for yolo octo robot.');
elseif ($path == '/contact') {
    $repsonse = new Response('Contact us.');
}
else {
    $response = new Response("Page not found", 404);
}
$response->send();
