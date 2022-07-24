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
        
        }
        else{
           const sorry =document.createElement('h2');
           sorry.innerText="Sorry you are fail to get Admision in the Collage  reasons are"
           output.appendChild(sorry);
           const reason = document.createElement('ol');
           output.appendChild(reason);
           if(mrks < 400){
            const lmarks =document.createElement('li');
            lmarks.innerText="Your Marks Are Less Then 400";
            reason.appendChild(lmarks);
           }
           if(hgt < 40){
            const lheight =document.createElement('li');
            lheight.innerText="Your Height is Less Then 40";
            reason.appendChild(lheight);
           }
           if(wgt < 40){
            const lweight =document.createElement('li');
            lweight.innerText="Your Weight is Less Then 40";
            reason.appendChild(lweight);
           }
           if(wgt > 80){
            const mweight =document.createElement('li');
           mweight.innerText="Your Weight is above 80 kg";
            reason.appendChild(mweight);
           }
        }
        weight.value='';
        marks.value='';
        height.value='';
      })
  })