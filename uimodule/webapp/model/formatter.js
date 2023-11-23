sap.ui.define([], function () {
    "use strict";
    var formatter = {

        pictureUrl: function(sUrl){
            if(sUrl)
            {
                return sap.ui.require.toUrl(sUrl);
            } else{
                return undefined;
            }

            }
        };

    return formatter;
});
