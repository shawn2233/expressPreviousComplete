var trash = document.getElementsByClassName("fa-trash");
var thumbUp = document.getElementsByClassName("fa-solid fa-car");


Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const word = this.parentNode.parentNode.childNodes[1].innerText
        // const msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'word': word,
            'thumbUp':thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const word = this.parentNode.parentNode.childNodes[1].innerText
        // const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'word': word
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
