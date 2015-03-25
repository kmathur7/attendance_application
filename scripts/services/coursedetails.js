angular.module('attendanceApplication')

  .factory('courseDetailsService', function () {
    // Service logic
    var coursedata;
   
    // Public API here
    return {
      
      getCourseDetails: function(){
        return coursedata;
      },
      setCourseDetails: function(course){
        coursedata=course;

        
      }
    };
  });