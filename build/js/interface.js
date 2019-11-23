"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 *@class Interface
 *@description A general class for the Chatroom user interface | Display data
 **/
var Interface =
/*#__PURE__*/
function () {
  function Interface(messagesList) {
    _classCallCheck(this, Interface);

    this.messagesList = messagesList;
  }
  /**
   *@method displayData
   *@description display data in the browser
   *@param data Pass data by the user
   **/


  _createClass(Interface, [{
    key: "displayData",
    value: function displayData(data) {
      var time = dateFns.distanceInWordsToNow(data.data().time.toDate(), {
        addSuffix: true
      }),
          htmlData = "\n      <li class=\"messg-content box-shadow\" data-id=\"".concat(data.id, "\">\n        <div class=\"user\">\n          <div class=\"avatar\">\n            <img src=\"images/avatar.jpg\" alt=\"Avatar\">\n          </div>\n          <h3 class=\"name\">").concat(data.data().username, "</h3>\n        </div>\n        <p class=\"messg-text\">").concat(data.data().message, "</p>\n        <p class=\"time\">").concat(time, "</p>\n      </li>\n    ");
      this.messagesList.innerHTML += htmlData;
    }
  }]);

  return Interface;
}();
//# sourceMappingURL=interface.js.map
