//fetch api
fetch("/api/v0/images")
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
  data.forEach(function(item){
    output += `
    <h2>${item.title}</h2>
    <figure>
      <img class ="img" src="${item.pathURL}" alt="${item.title}"  width="${item.width}" height="${item.height}">
      <figcaption> ${item.creditURL} ${' '}  ${item.photoCredit}   ${item.linkURL}  </figcaption>
      <p>${item.description} </p>
    </figure> `;
  
 document.querySelector('.nature').innerHTML= output;

});

})
.catch(function (error) {
  console.log(error);
});