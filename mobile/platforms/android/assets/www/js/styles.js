// Create custom defaultStyle.
function getDefaultStyle() {
    return "" +
        ".material-background-nav-bar { " +
        "   background-color        : " + appPrimaryColor + " !important; " +
        "   border-style            : none;" +
        "}" +
        ".md-primary-color {" +
        "   color                     : " + appPrimaryColor + " !important;" +
        "}";
}// End create custom defaultStyle

// Create custom style for product view.
function getProductStyle() {
    return "" +
        ".material-background-nav-bar { " +
        "   background-color        : " + appPrimaryColor + " !important;" +
        "   border-style            : none;" +
        "   background-image        : url('img/background_cover_pixels.png') !important;" +
        "   background-size         : initial !important;" +
        "}" +
        ".md-primary-color {" +
        "   color                     : " + appPrimaryColor + " !important;" +
        "}";
}// End create custom style for product view.

// Create custom style for contract us view.
function getContractUsStyle() {
    return "" +
        ".material-background-nav-bar { " +
        "   background-color        : transparent !important;" +
        "   border-style            : none;" +
        "   background-image        : none !important;" +
        "   background-position-y   : 4px !important;" +
        "   background-size         : initial !important;" +
        "}" +
        ".md-primary-color {" +
        "   color                     : " + appPrimaryColor + " !important;" +
        "}";
} // End create custom style for contract us view.

// Create custom style for Social Network view.
function getSocialNetworkStyle(socialColor) {
    return "" +
        ".material-background-nav-bar {" +
        "   background              : " + socialColor + " !important;" +
        "   border-style            : none;" +
        "} " +
        "md-ink-bar {" +
        "   color                   : " + socialColor + " !important;" +
        "   background              : " + socialColor + " !important;" +
        "}" +
        "md-tab-item {" +
        "   color                   : " + socialColor + " !important;" +
        "}" +
        " md-progress-circular.md-warn .md-inner .md-left .md-half-circle {" +
        "   border-left-color       : " + socialColor + " !important;" +
        "}" +
        " md-progress-circular.md-warn .md-inner .md-left .md-half-circle, md-progress-circular.md-warn .md-inner .md-right .md-half-circle {" +
        "    border-top-color       : " + socialColor + " !important;" +
        "}" +
        " md-progress-circular.md-warn .md-inner .md-gap {" +
        "   border-top-color        : " + socialColor + " !important;" +
        "   border-bottom-color     : " + socialColor + " !important;" +
        "}" +
        "md-progress-circular.md-warn .md-inner .md-right .md-half-circle {" +
        "  border-right-color       : " + socialColor + " !important;" +
        " }" +
        ".spinner-android {" +
        "   stroke                  : " + socialColor + " !important;" +
        "}" +
        ".md-primary-color {" +
        "   color                   : " + socialColor + " !important;" +
        "}" +
        "a.md-button.md-primary, .md-button.md-primary {" +
        "   color                   : " + socialColor + " !important;" +
        "}";
}// End create custom style for Social Network view.

// createCustomStyle will change a style of view while view changing.
// Parameter :
// stateName = name of state that going to change for add style of that page.
function createCustomStyle(stateName) {
    var customStyle =
        ".material-background {" +
        "   background-color          : " + appPrimaryColor + " !important;" +
        "   border-style              : none;" +
        "}" +
        ".spinner-android {" +
        "   stroke                    : " + appPrimaryColor + " !important;" +
        "}";

    switch (stateName) {
        case "app.productList" :
        case "app.productDetail":
        case "app.productCheckout":
        case "app.clothShop" :
        case "app.catalog" :
            customStyle += getProductStyle();
            break;
        case "app.dropboxLogin" :
        case "app.dropboxProfile":
        case "app.dropboxFeed" :
            customStyle += getSocialNetworkStyle(window.globalVariable.color.dropboxColor);
            break;
        case "app.facebookLogin" :
        case "app.facebookProfile":
        case "app.facebookFeed" :
        case "app.facebookFriendList":
            customStyle += getSocialNetworkStyle(window.globalVariable.color.facebookColor);
            break;
        case "app.foursquareLogin" :
        case "app.foursquareProfile":
        case "app.foursquareFeed" :
            customStyle += getSocialNetworkStyle(window.globalVariable.color.foursquareColor);
            break;
        case "app.googlePlusLogin" :
        case "app.googlePlusProfile":
        case "app.googlePlusFeed" :
            customStyle += getSocialNetworkStyle(window.globalVariable.color.googlePlusColor);
            break;
        case "app.instagramLogin" :
        case "app.instagramProfile":
        case "app.instagramFeed" :
            customStyle += getSocialNetworkStyle(window.globalVariable.color.instagramColor);
            break;
        case "app.wordpressLogin" :
        case "app.wordpressFeed":
        case "app.wordpressPost" :
            customStyle += getSocialNetworkStyle(window.globalVariable.color.wordpressColor);
            break;
        case "app.contractUs":
            customStyle += getContractUsStyle();
            break;
        default:
            customStyle += getDefaultStyle();
            break;
    }
    return customStyle;
}// End createCustomStyle
