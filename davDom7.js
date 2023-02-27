let section1 = document.querySelector('.section1');
let section2 = document.querySelector('.section2');
let section3 = document.querySelector('.section3');
let sec1 = document.querySelector('.sec1 > div');
let sec2 = document.querySelector('.sec2 > div');
let sec3 = document.querySelector('.sec3 > div');
let sec1span = document.querySelector('.sec1 > span');
let sec2span = document.querySelector('.sec2 > span');
let sec3span = document.querySelector('.sec3 > span');
let btnNext1 = document.querySelector('.btnNext1');
let btnNext2 = document.querySelector('.btnNext2');
let btnPrevious2 = document.querySelector('.btnPrevious2');
let btnPrevious3 = document.querySelector('.btnPrevious3');
let btnSubmit = document.querySelector('.btnSubmit');
let edits1 = document.querySelector('.edits1');
let edits2 = document.querySelector('.edits2');
let fndiv = document.querySelector('#fname');
let lname = document.querySelector('#lname');
let email = document.querySelector('#email');
let review = document.querySelector('#review');
let fnameedit = document.querySelector('#fnameedit');
let lnameedit = document.querySelector('#lnameedit');
let emailedit = document.querySelector('#emailedit');
let reviewedit = document.querySelector('#reviewedit');

btnNext1.addEventListener('click',function(){
    section1.classList.add('hide');
    section2.classList.add('active');
    fnameedit.textContent = fndiv.value;
    lnameedit.textContent = lname.value;
    emailedit.textContent = email.value;
    sec2.classList.add('perirgoli');
    sec2span.classList.add('peritxt');
    sec1.classList.remove('perirgoli');
    sec1span.classList.remove('peritxt');
});

btnNext2.addEventListener('click',function(){
    section2.classList.remove('active');
    section3.classList.add('active');
    reviewedit.textContent=review.value;
    sec2.classList.remove('perirgoli');
    sec2span.classList.remove('peritxt');
    sec3.classList.add('perirgoli');
    sec3span.classList.add('peritxt');
});

btnPrevious2.addEventListener('click',function(){
    section2.classList.remove('active');
    section1.classList.add('active');
    section1.classList.remove('hide');
    sec1.classList.add('perirgoli');
    sec1span.classList.add('peritxt');
    sec2.classList.remove('perirgoli');
    sec2span.classList.remove('peritxt');
});

btnPrevious3.addEventListener('click',function(){
    section3.classList.remove('active');
    section2.classList.add('active');
    sec2.classList.add('perirgoli');
    sec2span.classList.add('peritxt');
    sec3.classList.remove('perirgoli');
    sec3span.classList.remove('peritxt');
});

edits1.addEventListener('click', function(){
    section3.classList.remove('active');
    section1.classList.add('active');
    section1.classList.remove('hide');
    sec1.classList.add('perirgoli');
    sec1span.classList.add('peritxt');
    sec3.classList.remove('perirgoli');
    sec3span.classList.remove('peritxt');
})

edits2.addEventListener('click', function(){
    section3.classList.remove('active');
    section2.classList.add('active');
    sec2.classList.add('perirgoli');
    sec2span.classList.add('peritxt');
    sec3.classList.remove('perirgoli');
    sec3span.classList.remove('peritxt');
})