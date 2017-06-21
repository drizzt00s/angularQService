import angular from 'angular';

var main = angular.module('app', []);

main.run(function($rootScope, $q){

	// var someTimeConsumingJob = function(fn){
	// 	setTimeout(function(){
	// 		console.log('time consuming job finished');
	// 		//then proceed on next task..
	// 		fn();
	// 	}, 5000);
	// };

	// var nextTask = function(){
	// 	console.log('this is the next task.');
	// }

	// someTimeConsumingJob(nextTask);

	var someTimeConsumingJob = function(){
		var deferred = $q.defer();
		setTimeout(function(){
			console.log('time consuming job finished');
			//resolve or reject promise
			deferred.resolve({
				data: 10027
			});

		}, 5000);
		return deferred.promise;
	};

	var promise = someTimeConsumingJob();

	promise.then(function(data){
		console.log(data.data);
	},function(error){

	});



});