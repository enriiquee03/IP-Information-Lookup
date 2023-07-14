const OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2dcaac8c5dmshb701d18aef3cf67p10db49jsn8af5c4960c4d',
		'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com'

  }
};


const fechtIpInfo = ip =>{
  return fetch(`https://ip-geo-location.p.rapidapi.com/ip/${ip}?format=json` , OPTIONS)
    .then(res => res.json())
    .catch (err => console.error(err))
}


const $form = document.querySelector('#form')
const $input = document.querySelector('#input')
const $submit = document.querySelector('#submit')
const $results = document.querySelector('#results')

$form.addEventListener('submit' , async (event) =>{
  event.preventDefault()
  const {value} = $input
  if(!value) return

  $submit.setAttribute('disable' , '');
  $submit.setAttribute('aria-busy' ,"true")


  const ipInfo = await fechtIpInfo(value)

  if(ipInfo){
    $results.innerHTML = JSON.stringify(ipInfo , null , 2)
  }
  
  $submit.removeAttribute('disable');
  $submit.removeAttribute('aria-busy')
  
  })