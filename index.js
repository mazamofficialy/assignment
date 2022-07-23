window.addEventListener('load', () => {
const form = document.querySelector("#form");
const marks = document.querySelector("#marks");
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const output = document.querySelector(".output");
form.addEventListener('submit', (e) => {
        e.preventDefault();
       let mrks = marks.value;
       let hgt = height.value;
       let wgt = weight.value;
      if(mrks >=400 && hgt>39 && wgt >39 && wgt <80)
      {
      const final = document.createElement('h2');
      final.innerText = "congratulation you can get admission in sports collage lahore";
      output.appendChild(final);
      weight.value='';
      marks.value='';
      height.value='';
      }
    })
})