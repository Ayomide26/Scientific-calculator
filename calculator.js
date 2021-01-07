var isLastPressEqul = false
var isLastPressOps = false
var isLastPressNum = false
var isdec = false
var operated = false
var sign;
var isLastPressBracClose = false
var my_sign = false
var charCount = 0
 var number = document.getElementById("answer_box").innerHTML;



document.querySelectorAll('.num').forEach(function (element) {
        element.addEventListener('click', function () {
           
            if (answer_box.innerHTML == 0 ){
    answer_box.innerHTML = element.innerHTML}
         else  {
             answer_box.innerHTML += element.innerHTML;

    }

            
            my_sign =false;
            charCount++
            concat()
           
        })
    });
  
    document.querySelectorAll('.sign').forEach(function (operator) {
        operator.addEventListener('click', function () {
            if (my_sign == false){
            answer_box.innerHTML += operator.innerHTML
            my_sign = true;
            charCount++
            concat()
            
           } 
           
           else {
            
                 
                return 
            }
        })
    });
    document.querySelectorAll('.signs').forEach(function (element) {
        element.addEventListener('click', function () {
        
            if (answer_box.innerHTML == 0 ){
    answer_box.innerHTML = element.innerHTML}
         else  {
             answer_box.innerHTML += element.innerHTML;

    }

            
            my_sign =false;
            charCount++
            concat()
            
        })
    });
    document.querySelector('.equal').addEventListener('click',function() {
    var display = document.querySelector('#answer_box').innerHTML;
   
    charCount = 0
    display = display.replace(/×/g, '*').replace(/÷/g, '/').replace(/Mod/g, '%');
     dis =eval(display);
     document.getElementById("answer_box").innerHTML = dis;
     
     
    
});

document.querySelector('.dele').addEventListener('click',function() {
      var dele =document.getElementById('answer_box').innerHTML;

   if (dele.length != 1) {
        dele = dele.substring(0, dele.length - 1)
        charCount--
        concat()

    } else {
        dele = '0'
    }
    console.log(charCount)
    if (charCount == 0) {
        dele = '0'
    }
    document.getElementById("answer_box").innerHTML= dele;
    }


  );


  document.querySelectorAll('.delete').forEach(function (element1){
  element1.addEventListener('click',function() {
     me =  answer_box.innerHTML = 0;
     charCount--
     concat()
     document.getElementById("answer_box").innerHTML= me;
     

  });
  });


  function square (){
      var square1 =document.getElementById('answer_box').innerHTML;
      square2= Math.sqrt(square1)
     console.log(square2)
      document.getElementById('answer_box').innerHTML=square2;

  }
  function Squareroot(){ 
      var root =document.getElementById('answer_box').innerHTML;
      root2 = (root*root);
      
      console.log(root2)
      document.getElementById('answer_box').innerHTML=root2;
  }
  function plusminus(){
    var plus =document.getElementById('answer_box').innerHTML;
      plus1 = -1 * plus;
      console.log(plus1)
      document.getElementById('answer_box').innerHTML=plus1;
  }
  function sin(){
      var sine = document.getElementById('answer_box').innerHTML;
      charCount++
     var sineee = Math.sin(sine)
     console.log(sineee)
      document.getElementById('answer_box').innerHTML=sineee;
  }
  function cos(){
      var sine = document.getElementById('answer_box').innerHTML;
      sinee = Math.cos(sine)
      console.log(sinee)
      document.getElementById('answer_box').innerHTML=sinee;
  }
  function tan(){
      var sine = document.getElementById('answer_box').innerHTML;
      sinee = Math.tan(sine)
      console.log(sinee)
      document.getElementById('answer_box').innerHTML=sinee;
  }
  function pie(){
   
      pieee =Math.PI
      document.getElementById('answer_box').innerHTML=pieee;
  }
  function power(){
    var base =document.getElementById('answer_box').innerHTML;
      root5 = (base*base*base);
      
      console.log(root5)
      document.getElementById('answer_box').innerHTML=root5;

  }
  
function raisepower(){ 
      var rai =document.getElementById('answer_box').innerHTML;
      raise = Math.pow(10,rai);
      console.log(raise)
      document.getElementById('answer_box').innerHTML=raise;
  }
  function Exp (){
    var expp =document.getElementById('answer_box').innerHTML;
    expo = Math.exp(expp)
    document.getElementById('answer_box').innerHTML=expo;
  }
  function loge (){
    var logee =document.getElementById('answer_box').innerHTML;
    lo = Math.log(logee)
    document.getElementById('answer_box').innerHTML=lo;
  }

  function factor(number) {
  if (number < 0) 
        return -1;
  else if (number == 0) 
      return 1;
  else {
      return (number * factor(number - 1));
  }
  document.getElementById('answer_box').innerHTML =factor(nume);
}

console.log(factor(5));
  
function concat () {
    
    
    // When the number of characters in display exceeds 43, the fontsize decreses and returns a true
    if (charCount < 43) {
        if (charCount > 11) {
            
          answer_box.style.fontSize = 665 / charCount  + 'px';
        } else {
          answer_box.style.fontSize = '50px'
        }
        return true
    } else {
        return false
    }
}
function dot () {
    if (!isdec) {
        if (operated) {
        answer_box.innerHTML = '0.'
        charCount += 2
        operated = false    
    } else {
        if (!isNaN(answer_box.innerHTML[answer_box.innerHTML.length - 1])) {
            answer_box.innerHTML += '.'
            charCount++
        }
            isLastPressEqul = false
            isLastPressOps = false
            isLastPressNum = false
            isdec = true
            isLastPressBracClose = false
        }
       
    }


}
