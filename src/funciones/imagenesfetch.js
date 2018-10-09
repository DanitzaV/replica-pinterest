const fetchData = async () => {
    return fetch('https://api.unsplash.com/search/photos?query=iphone&client_id=a322a1eeefcea7de09bd284c21489afcb274af47aed1dbda8a9e197546780f93')
  }
  
  export default async function printData() {
    try {
      const data = await fetchData()
      const json = await data.json()
      return json.results;
    } catch(e) {
      console.error("Problem", e)
    }
  }
  
  console.log(printData())
//   export default async function fetchImg () {
//     const res = await fetch('https://api.unsplash.com/search/photos?query=iphone&client_id=a322a1eeefcea7de09bd284c21489afcb274af47aed1dbda8a9e197546780f93')
//     const something = await res.json()
//     return await something
// }