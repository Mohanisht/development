<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
  <title>Item Lister</title>
</head>
<style>
 h2{
        color: green;
    }
    #main-header h1{
        border-bottom: solid 3px black;
    }
</style>
<body>
  <header id="main-header" class="bg-success text-white p-4 mb-3">
    <div class="container">
      <h1 id="header-title">Bablu Barish <span style="display:none">123</span></h1>
    </div>
  </header>
  <div class="container">
   <div id="main" class="card card-body">
    <h2 class="title">Enter Email</h2>
    <form class="form-inline mb-3">
      <input type="text" class="form-control mr-2">
      <input type="submit" class="btn btn-dark" value="Submit">
    </form>
    <h2 class="title">Things you can buy from Us</h2>
    <ul id="items" class="list-group">
      <li class="list-group-item">Gents Raincoats</li>
      <li class="list-group-item">Umbrella</li>
      <li class="list-group-item">Gumboots</li>
      <li class="list-group-item">Ladies Raincoats</li>
    </ul>
   </div>
  </div>

</body>
</html>
