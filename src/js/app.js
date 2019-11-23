const messagesList = document.getElementsByClassName("messages")[0],
  addMessag = document.getElementsByClassName("add-messg")[0],
  chooseBox = document.getElementsByClassName("choose-box")[0],
  roomsMenu = document.getElementsByClassName("rooms-menu")[0],
  roomList = document.getElementsByClassName("room-list")[0],
  roomNewName = document.getElementById("room-new-name"),
  addUsername = document.getElementsByClassName("add-username")[0];

/* ============================================
        Add the message to the database  
============================================= */
addMessag.addEventListener("submit", function(event) {
  event.preventDefault();
  // Get input value
  const inputValue = this.querySelector("#message").value;

  // Add data to database
  chat_rooms.addData(inputValue);

  // Form reset
  this.reset();

  // message box, Scroll down when you add a new message
  const scrollToDown = () => {
    messagesList.scrollTop = messagesList.scrollHeight;
  };
  setTimeout(() => scrollToDown(), 300);
});

/* ============================================
                Updata Username  
============================================= */
addUsername.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get Input
  const input = this.querySelector("input");

  // Check the input that contains the username
  if (input.name === "username") {
    const inputValue = input.value.trim();
    chat_rooms.updateUsername(inputValue);
  }

  // Form reset
  this.reset();
});

/* ============================================
        Save Username in local storage
============================================= */
const storagUsername = localStorage.username
  ? localStorage.username
  : "unknown";

/* ============================================
  Show the roomsMenu containing chat room types 
============================================= */
chooseBox.addEventListener("click", function(e) {
  roomsMenu.style.display = "block";
});

/* ============================================
  Hide the roomsMenu containing chat room types 
============================================= */
roomsMenu.addEventListener("click", function(event) {
  if (event.target.classList.contains("fa-times")) {
    this.style.display = "none";
  }
});

/* ============================================
              Change chat room
============================================= */
roomList.addEventListener("click", function(event) {
  if (event.target.id === "check") {
    // Get chat room name id
    var roomName = event.target.parentElement.id;

    // Header > Updata chat room name
    roomNewName.textContent = roomName;

    // Remove all messages when we choose chat room
    messagesList.querySelectorAll("li").forEach(i => {
      i.remove();
    });

    // Update chat room name
    chat_rooms.updateRoom(roomName);

    // Display data for the new chat room
    chat_rooms.getData(passData => inter_face.displayData(passData));
  }
});

/* ============================================
               Instance of class  
============================================= */
const chat_rooms = new Chatrooms(storagUsername, "public"),
  inter_face = new Interface(messagesList);

/* ============================================
              display Data 
============================================= */
chat_rooms.getData(passData => inter_face.displayData(passData));
