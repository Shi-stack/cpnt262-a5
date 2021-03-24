//fetch api
fetch("/seeds/nature.js")
  .then(function (response) {
    if (!response.ok) {
      throw new Error("This is an error");
    }
    return response.json();
  })
  .then(function (data) {
    const pictures = data;
    //code from a3
    // select gallery, assign as const
    const gallery = document.querySelector(".nature");

    //create output string for html
    let output = "";

let output='';
let title='';

nature.forEach(function(item){
  // output += `<img src = "${item.pathURL}" alt="Pictures of Nature">`;
  // title += `${item.title}`
  output += `
  <h2>${item.title}</h2>
  <figure>
    <img class ="img" src="${item.pathURL}" alt="${item.title}"  width="${item.width}" height="${item.height}">
    <figcaption> ${item.creditURL} ${' '}  ${item.photoCredit}   ${item.linkURL}  </figcaption>
    <p>${item.description} </p>
  </figure> `
;
  
document.querySelector('.img').innerHTML= output;

});

})
.catch(function (error) {
  console.log(error);
});