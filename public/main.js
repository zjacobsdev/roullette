
var btn = document.querySelector("#btn").addEventListener("click",() =>{
          let bet = 10              //user input
          let mult = 10
          let housewins = (Math.floor(Math.random()*2) === 1)? true : false
          console.log(housewins)
          fetch('game', {
                      method: 'put',
                      headers: {'Content-Type': 'application/json'},
                      body: JSON.stringify({
                        'betAmt': bet,
                        'betMult': mult,
                        'houseWins': housewins
                      })
                    })
                    .then(response => {
                      if (response.ok) return "I been sent"
                    })
                    
})


// function getRandomChoice(numOfChoices){
//   let winLose = (Math.floor(Math.random()*100)) % numOfChoices
//   console.log(winLose)
//   return winLose
// }

// Array.from(thumbUp).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//         fetch('messages', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg,
//             'thumbUp':thumbUp
//           })
//         })
//         .then(response => {
//           if (response.ok) return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           window.location.reload(true)
//         })
//       });
// });




// Array.from(trash).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         fetch('messages', {
//           method: 'delete',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg
//             // req.body: betMult:  10  , betAmt: 200 , housewins: true/false
//           })
//         }).then(function (response) {
//           window.location.reload()
//         })
//       });
// });

// document.getElementById("betColors").addEventListener("click", () =>{
//   const colorValue = document.querySelector('#userColor').value
//   const betValue = document.querySelector(`#userBetAmount`).value
  
  
//   let winLose = getRandomChoice(2)
//   fetch(`bank`, {
//     method: `put`,
//     headers: {
//       'Content-Type': 'application/json'
//     },
  
//     body: JSON.stringify({
//       betAmt: betValue,
//       betMult: 1,
//       houseWins: winLose == parseInt(colorValue)

//     })
//   }).then(function(response){
//     // window.location.reload()
//   })
// })

// document.getElementById("betNums").addEventListener("click", () =>{
//   // const colorValue = document.querySelector('#userColor').value
//   const numberValue = document.querySelector(`#userBetAmt`)
//   const betValue = document.querySelector(`#userBetAmount`).value
  
  
//   let winLose = getRandomChoice(36)
//   console.log(winLose)
//   fetch(`bank`, {
//     method: `put`,
//     headers: {
//       'Content-Type': 'application/json'
//     },
  
//     body: JSON.stringify({
//       betAmt: betValue,
//       betMult: 2,
//       houseWins: winLose == parseInt(colorValue)

//     })
//   }).then(function(response){
//     window.location.reload()
//   })
// })


/*
server side
  Bets
    1 chosen: red
    2 wager:10
    3 won: true
  Actual
  1 chosen:black
  2 wager:10
  3 won: false
Bank
  1 total:200M
  2 wins:
  3 lost:
POST
fetch or form condition
PUT (update)
client side: fetch request is only thing that triggers PUT request
POST
only way to put something in a database
GET
Page reload or type in URL
* Owner
one doc to keep track of Bank
don't need form for doc info on server side
Database
  collection
    Bank
      1 document with
        total
        wins
        loss
Owners log-in only see's form for DB
CLIENT side
did a fetch, fetch makes PUT request
PUT updates the DB
API updates PUT
Page reload
Get document into DB
client side JS
API handle put to update stuff in document

*/