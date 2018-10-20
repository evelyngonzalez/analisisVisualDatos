function show(id) {
  fetch('http://localhost:3001/rooms')
    .then(response => response.json())
    .then(myJson => {
      for (room of myJson) {
        var liNode = document.createElement('li');
        var textNode = document.createTextNode(
          room.building + ': ' + room.number,
        );
        liNode.appendChild(textNode);
        document.getElementById('roomList').appendChild(liNode);
      }
    });
}
