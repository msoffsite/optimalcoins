# optimalcoins
.Net Core API with ReactJS front-end.

A web page that will display the optimal coin combination (fewest number of coins) that fulfills a given dollar value. The web page should take a dollar value as input and interact with an API that computes and returns the optimal coin combination.

$0.99 => { 
"silver-dollar": 0, 
"half-dollar": 1,
"quarter": 1,
"dime": 2,
"nickel": 0,
"penny": 4 }

$1.56 => { 
"silver-dollar": 1,
"half-dollar": 1,
"quarter": 0,
"dime": 0,
"nickel": 1,
"penny": 1 }

$12.85 => { 
"silver-dollar": 12,
"half-dollar": 1,
"quarter": 1,
"dime": 1,
"nickel": 0,
"penny": 0 } 

Demo available at http://coins.offsitedeveloper.com/.
