(function() {

  return {
    events: {
      'app.activated':'findAndParseChats'
    },

    findAndParseChats: function() {

    	var regEx = {
    		chatContent : /(\d{2}:\d{2}:\d{2}\s*(PM|AM))\)\s*((\s|[A-z])*)\s*:([\s\S]*)(\d{2}:\d{2}:\d{2}\s*(PM|AM)|\*{3})/,
			isChatLog : /()/,
			endChat : /\*{3}/
    	};

    	


    }
  };

}());
