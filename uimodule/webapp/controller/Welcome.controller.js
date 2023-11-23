sap.ui.define(
    ["./BaseController",
	"sap/ui/model/json/JSONModel",
    "../model/formatter"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController, JSONModel, formatter) {
        "use strict";

        return BaseController.extend("ui.test.controller.Welcome", {

            _iCarouselTimeout: 0,
            _iCarouselLoopTime: 8000,
            formatter: formatter,
            onInit: function () {
                var oViewModel= new JSONModel({
                    welcomeCarouselShipping:'ui/test/img/Shipping_273087.jpg',
                    welcomeCarouselInviteFriend: 'ui/test/img/InviteFriend_276352.jpg',
                    welcomeCarouselTablet: 'ui/test/img/Tablet_275777.jpg',
                    welcomeCarouselCreditCard: 'ui/test/img/CreditCard_277268.jpg'

                });

                this.getView().setModel(oViewModel, "view");
                // select random carousel page at start
			var oWelcomeCarousel = this.byId("welcomeCarousel");
			var iRandomIndex = Math.floor(Math.abs(Math.random()) * oWelcomeCarousel.getPages().length);
			oWelcomeCarousel.setActivePage(oWelcomeCarousel.getPages()[iRandomIndex]);

            },
            onAfterRendering: function () {
                this.onCarouselPageChanged();
            },
            onCarouselPageChanged: function () {
                clearTimeout(this._iCarouselTimeout);
                this._iCarouselTimeout = setTimeout(function () {
                    var oWelcomeCarousel = this.byId("welcomeCarousel");
                    if (oWelcomeCarousel) {
                        oWelcomeCarousel.next();
                        this.onCarouselPageChanged();
                    }
                }.bind(this), this._iCarouselLoopTime);
            },
        });
    },
);
