
app.controller('movieCtrl', function($scope, movieService, yearService){
  // $scope.show = true;
  $scope.allMovies = movieService.allMovies;
  $scope.myCollection = movieService.personalCollection;
  $scope.years = yearService.years;
  $scope.budget = movieService.money;
  

  $scope.addToCollection = function(movie){
      //make a function here that calls all that bs inside service.js
     
      

      // else{
      movieService.addToCollect(movie) }

  // }
   

  

  $scope.remove = function(movie){
    movieService.removeMovie(movie);
    

  }

});