(function($, undefined){
	
	var TheResults = TheResults || {};
	
	TheResults.Deployer = {
	  url: '/deploy.php',
	  
	  init: function() {
		  TheResults.Deployer.handleEvents();
	  },
	  
	  handleEvents: function() {
		$('.btn-deploy').click(function(){			
			TheResults.Deployer.deploy();
		});
	  },
	  
	  deploy: function() {
		$.ajax({
			url: TheResults.Deployer.url,
            method: "POST",           
            success: function(data, textStatus, jqXHR) {
            	$('.placeholder').html(data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
            	$('.placeholder').html(textStatus);
            }			
		});
	  }			
	};
	
	$(document).ready(function(){
		TheResults.Deployer.init();
	});
	
})(jQuery || (jQuery = {}));