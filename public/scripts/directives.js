'use strict';

// Tag directives

var root = 'partials/directives/';

rockola.directive(
	// HTML: rla-play-music
	'rlaPlayMusic', 
	// Configuration
	function() {
	  return {
	    restrict    : 'E',
	    templateUrl : root + 'play_music.html',
	    controller  : 'play_music_controller'
	 };
	}
);

rockola.directive(
	// HTML: rla-search-song
	'rlaSearchSong', 
	// Configuration
	function() {
	  return {
	    restrict    : 'E',
	    templateUrl : root + 'search_song.html',
	    controller  : 'search_controller'
	 };
	}
);

rockola.directive(
	// HTML: rla-vote-song
	'rlaVoteSong', 
	// Configuration
	function() {
	  return {
	    restrict    : 'E',
	    templateUrl : root + 'vote_song.html',
	    controller  : 'vote_controller'
	 };
	}
);

rockola.directive(
	// HTML: rla-no-songs-added
	'rlaNoSongsAdded', 
	// Configuration
	function() {
	  return {
	    restrict    : 'E',
	    templateUrl : root + 'no_songs_added.html',
	    controller  : 'no_songs_added as no_songs_ctrl'
	 };
	}
);


rockola.directive(
	// HTML: rla-host
	'rlaHost', 
	// Configuration
	function() {
	  return {
	    restrict    : 'E',
	    templateUrl : root + 'host.html',
	    controller  : 'host_controller as host_ctrl'
	 };
	}
);

rockola.directive(
	// HTML: rla-hosted
	'rlaHosted', 
	// Configuration
	function() {
	  return {
	    restrict    : 'E',
	    templateUrl : root + 'hosted.html',
	    controller  : 'hosted_controller as hosted_ctrl'
	 };
	}
);

rockola.directive(
	// HTML: rla-hosting
	'rlaHosting', 
	// Configuration
	function() {
	  return {
	    restrict    : 'E',
	    templateUrl : root + 'hosting.html',
	    controller  : 'hosting_controller as hosting_ctrl'
	 };
	}
);

rockola.directive(
	// HTML: rla-player
	'rlaPlayer', 
	// Configuration
	function() {
	  return {
	    restrict    : 'E',
	    templateUrl : root + 'player.html'
	 };
	}
);

// Attributes directives

rockola.directive('focusMe', function($timeout) {
  return {
    scope: {
      focusMeIf:"="
    },
    link: function ( scope, element, attrs ) {
      if (scope.focusMeIf===undefined || scope.focusMeIf) {
        $timeout( function () { element[0].focus(); } );
      }
    }
  };
});