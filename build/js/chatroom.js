"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 *@class Chatrooms
 *@description General class through which the chat is controlled | Add | Update | Delete ..etc
 **/
var Chatrooms =
/*#__PURE__*/
function () {
  function Chatrooms(username, room_name) {
    _classCallCheck(this, Chatrooms);

    this.username = username;
    this.room_name = room_name;
    this.firestore = firebase.firestore;
    this.db = db.collection("chatrooms");
    this.stop;
  }
  /**
   *@method addData
   *@description Add data to Database
   *@param message The message is passed by the user
   *@returns Data
   **/


  _createClass(Chatrooms, [{
    key: "addData",
    value: function addData(message) {
      var chatData = {
        message: message,
        room_name: this.room_name,
        time: this.firestore.Timestamp.fromDate(new Date()),
        username: this.username
      };
      return this.db.add(chatData);
    }
    /**
     *@method getData
     *@description Fetch data from the database
     *@param callback
     **/

  }, {
    key: "getData",
    value: function getData(callback) {
      this.stop = this.db.where("room_name", "==", this.room_name).orderBy("time").onSnapshot(function (snapshot) {
        snapshot.docChanges().forEach(function (change) {
          if (change.type === "added") {
            callback(change.doc);
          }
        });
      });
    }
    /**
     *@method updateRoom
     *@description Change the main room to a new chat room
     *@param room Pass the new room by the user
     **/

  }, {
    key: "updateRoom",
    value: function updateRoom(room) {
      this.room_name = room;
      this.stop();
    }
    /**
     *@method updateUsername
     *@description Updata username
     *@param username Pass the username by the user
     **/

  }, {
    key: "updateUsername",
    value: function updateUsername(username) {
      this.username = username;
      localStorage.setItem("username", username);
    }
  }]);

  return Chatrooms;
}();
//# sourceMappingURL=chatroom.js.map
