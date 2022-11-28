let addres = document.querySelector('.addres')
addres.innerHTML ="Ваш город: Москва"

let slides = document.querySelectorAll('.slider-item')
let slider = document.querySelector('.slider-block')

let out='<div class="points-block">';

for(let i = 0;i<slides.length;i++){

    out+='<div class="point"></div>'

}
out+='</div>'

slider.insertAdjacentHTML('beforeend',out)

let dots = document.querySelectorAll('.point')
dots[dots.length-1].classList.add('dot')


function setShow(i){
    for(let s of slides){
        s.style.opacity = 0
    }
    for(let d of dots){
        d.classList.remove('dot')
    }
    dots[i].classList.add('dot')
    slides[i].style.opacity = 1
}
let i = 0;

dots.forEach((v,i2)=>{
    v.addEventListener('click',()=>{
        setShow(i2)
        i = i2
        
    })
})
setInterval(()=>{
    i++
    if(i>=slides.length){
        i=0
    }
    
    setShow(i)

},3000)

out = ""
let out2 = ""
let out3 = ''

fetch('goods.json')
.then(b=>b.json())
.then(v=>{
    let t=0
   for(let i = 0;i<v.length;i++){
      if(v[i]['popular'] &&t<5){
        t++
        if(t==1)  out+='<div class="new-goods-grid-item most-popul">'
        else out+='<div class="new-goods-grid-item">'
        out+=`<img src="images/${v[i]['img']}"/>`
         
        out+=`<div class="new-goods-name">${v[i]['name']}</div>`
        out+=`<div class="new-goods-price">${v[i]['price']} руб.</div>`
        if(v[i]['old-price'])  out+=`<div class="new-goods-old-price">${v[i]['old-price']} руб.</div>`
        out+='<div class="new-goods-add-cart">В корзину</div>'
        out+='</div>'
      } 
   }
   let v2 = v.sort((a,b)=>b['rate']-a['rate'])
   console.log(v2)
   t=0
   for(let i = 0;i<v.length;i++){
    if(v2[i]['popular'] &&t<5){
      t++
      if(t==2)  out2+='<div class="new-goods-grid-item most-popul">'
      else out2+='<div class="new-goods-grid-item">'
      out2+=`<img src="images/${v2[i]['img']}"/>`
       
      out2+=`<div class="new-goods-name">${v2[i]['name']}</div>`
      out2+=`<div class="new-goods-price">${v2[i]['price']} руб.</div>`
      if(v2[i]['old-price'])  out2+=`<div class="new-goods-old-price">${v2[i]['old-price']} руб.</div>`
      out2+='<div class="new-goods-add-cart">В корзину</div>'
      out2+='</div>'
    } 
 }
 
   
    
    for(let i = 0 ;i<8;i++){
        if(i==0||i==4) out3+='<div class="advise-items">'
        out3+='<div class="advise-item">'
        out3+=`<img class='advise-img' src="images/${v2[i]['img']}">`
        out3+=`<div class="advise-name">${v2[i]['name']}</div>`
        out3+=`<div class="advise-price">${v2[i]['price']} руб.</div>`
        if(v2[i]['old-price'])  out3+=`<div class="advise-old-price">${v2[i]['old-price']} руб.</div>`
        out3+='<div class="advise-add-cart">В корзину</div>'
        out3+='</div>'
        if(i==3||i==7) out3+='</div>'
    }
    document.querySelector('.new-goods-grid').insertAdjacentHTML('afterbegin',out)
    document.querySelector('.best-goods-grid').insertAdjacentHTML('afterbegin',out2)
     
    document.querySelector('.advise-block').insertAdjacentHTML('afterbegin',out3)
   

    let advises = document.querySelectorAll('.advise-items')

    function setSet (i){
        for(let a of advises){
            a.style.opacity = 0
        }
        advises[i].style.opacity = 1
    }
    setSet(0)
    let i = 0
    function change(){
      
      console.log(i)
            document.querySelector('.btn-back').addEventListener('click',()=>{
                if(i>0){
                    i--
                    setSet(i)
                 }           
            })              
            document.querySelector('.btn-next').addEventListener('click',()=>{
                if(i<advises.length-1){
                    i++
                    setSet(i)
                }
            })
    }
    change()
})

document.querySelector('.btn-back').innerHTML="<"

