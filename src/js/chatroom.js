/**
 *@class Chatrooms
 *@description General class through which the chat is controlled | Add | Update | Delete ..etc
 **/
class Chatrooms {
  constructor(username, room_name) {
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
  addData(message) {
    const chatData = {
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
  getData(callback) {
    this.stop = this.db
      .where("room_name", "==", this.room_name)
      .orderBy("time")
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
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
  updateRoom(room) {
    this.room_name = room;
    this.stop();
  }
  /**
   *@method updateUsername
   *@description Updata username
   *@param username Pass the username by the user
   **/
  updateUsername(username) {
    this.username = username;
    localStorage.setItem("username", username);
  }
}
