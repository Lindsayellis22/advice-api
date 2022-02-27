fetch('https://api.adviceslip.com/advice')
           
//     async function fetchText() {
//         let response = await fetch('https://api.adviceslip.com/advice');
    
//         console.log(response.status); // 200
//         console.log(response); // OK
    
//         if (response.status === 200) {
//             let data = await response.text();
//             console.log(data)
//         }
//     }
// fetchText();




let adviceBtn = document.getElementById('advice');
console.log(adviceBtn)
adviceBtn.addEventListener('click', fetchText);

function fetchText() {
    fetch('https://api.adviceslip.com/advice')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        let output = '<h2">Countries</h2>'
        data.forEach(function (entry) {
            entry.advice.forEach(function(childrenEntry) {

            
          output += `
          <ul>
            <li>Advice: ${childrenEntry.advice}</li>
            
          </ul>
          
        `
        console.log(advice)
        })
        document.getElementById('country').innerHTML = output
      })
      .catch((error) => {
        console.log(`Error Fetching data : ${error}`)
        document.getElementById('country').innerHTML = 'Error Loading Data'
      })
  })
}

  
  fetchText()

    




// fetchText();

