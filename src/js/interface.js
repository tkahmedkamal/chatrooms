/**
 *@class Interface
 *@description A general class for the Chatroom user interface | Display data
 **/
class Interface {
  constructor(messagesList) {
    this.messagesList = messagesList;
  }
  /**
   *@method displayData
   *@description display data in the browser
   *@param data Pass data by the user
   **/
  displayData(data) {
    const time = dateFns.distanceInWordsToNow(data.data().time.toDate(), {
        addSuffix: true
      }),
      htmlData = `
      <li class="messg-content box-shadow" data-id="${data.id}">
        <div class="user">
          <div class="avatar">
            <img src="images/avatar.jpg" alt="Avatar">
          </div>
          <h3 class="name">${data.data().username}</h3>
        </div>
        <p class="messg-text">${data.data().message}</p>
        <p class="time">${time}</p>
      </li>
    `;
    this.messagesList.innerHTML += htmlData;
  }
}
