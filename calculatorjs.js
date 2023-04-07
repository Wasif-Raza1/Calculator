
    let x=[];
    let y=[];
    var opera=0;
    let string="";  


function display(val){
 if (x+=val) {
  document.getElementById('input').value += val;
 } 
  
};

function clearScreen() {
    document.getElementById('input').value=string;
    x=0;
    document.getElementById('output').value =x;
};

function operator(solve) {
    // console.log(solve);
    if (opera !== 0) {
        equal();
      }
      y=x;
      console.log(y);
      opera = solve;
      x=0;  
      document.getElementById('input').value +=  solve;
    };
  
  
function equal() {
  let finalVal;
  const b=parseInt(x);
  const a=parseInt(y);
  

    if(opera=="+"){
       finalVal=a+b;
        document.getElementById('output').value = finalVal;   
    }
      else if(opera=="-"){
        finalVal=a-b;
        document.getElementById('output').value = finalVal;
        
      }
      else if(opera=="/"){
        finalVal=a/b; 
        document.getElementById('output').value = finalVal;
      }
      else if(opera=="*"){
        finalVal=a*b;
        document.getElementById('output').value = finalVal;
      }
      else if(opera=="%"){
        finalVal=a%b;
        document.getElementById('output').value = finalVal;
      }
      console.log(finalVal);
   
      x = finalVal;
      y = '0';
      // document.getElementById('input').value=  document.getElementById('output').value;
      // opera = null;  
        }
   