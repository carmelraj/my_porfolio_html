var slider=[
    {src:'assets/images/banner1.jpg',desc:'Recotap is an AI-driven Account-Based Marketing (ABM) platform that helps B2B Marketers run targeted ABM campaigns, at scale.',siteSame:'Recotap',link:'https://www.recotap.com',title:'Recotap'},
    {src:'assets/images/banner2.jpg',desc:'Powered by first party shopper behavioral data and advanced AI technology, it’s the digital engagement platform for next-generation vehicle retailing and it’s available today',siteSame:'Impel',link:'https://impel.io',title:'Impel'},
    {src:'assets/images/banner3.jpg',desc:'The app used by tens of thousands to relieve consistent pain. Try Curable for Free. Therapy by pain scientists and patients. Your road to relief starts today. 70% say symptoms reduced.',siteSame:'Curable',link:'https://curable.care',title:'Curable'},
    {src:'assets/images/banner4.jpeg',desc:'Biolage is recognized worldwide as a leader in the professional hair care field, and that reputation continues to grow.',siteSame:'Biolage',link:'https://www.biolage.com',title:'Biolage'},
    {src:'assets/images/banner5.jpeg',desc:'When the Group was formed in 2009 it brought together many well-known brands including Lloyds, Halifax, Bank of Scotland and Scottish Widows – with a combined history stretching back more than 300 years.',siteSame:'Lloydsbankinggroup',link:'https://www.lloydsbankinggroup.com',title:'Lloydsbankinggroup'}
];
const image = document.getElementById('image');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const myProj = document.getElementById('myProject');
const myProjDesc = document.getElementById('myProject-desc');
const scrollTOp = document.getElementById('scrollTOp');
const closeModal = document.getElementById('closeModal');
const wellcome = document.getElementById('wellcome');
const searchTxt = document.getElementById('searchTxt');
const searchBtn = document.getElementById('searchBtn');
const siteLink = document.getElementById('siteLink');
var counter = 0;
prev.disabled = true;
image.setAttribute('src', slider[counter].src);
        myProj.innerHTML=slider[counter].siteSame;
        myProjDesc.innerHTML=slider[counter].desc;
prev.addEventListener('click',()=>{
    if (counter > 0 && counter <=4){
        counter = counter - 1;

        image.setAttribute('src', slider[counter].src);
        next.disabled = false;
        
        myProj.innerHTML=slider[counter].siteSame;
        myProjDesc.innerHTML=slider[counter].desc;

        siteLink.href=slider[counter].link;

        image.classList.add('fadein');
        siteLink.title=slider[counter].title;

        setTimeout(function() {        
            image.classList.remove('fadein');
        },1000);
        
    }   
    else if(counter < 1){            	
        prev.disabled = true;
        next.disabled = false;
    }    
});

next.addEventListener('click',()=>{
    if (counter >= 0 && counter <= 3 ){
        counter = counter + 1;
      
        image.setAttribute('src', slider[counter].src);               
        prev.disabled = false;

        myProj.innerHTML=slider[counter].siteSame;
        myProjDesc.innerHTML=slider[counter].desc;

        siteLink.href=slider[counter].link;    
        siteLink.title=slider[counter].title;  
        
        image.classList.add('fadein');

        setTimeout(function() {        
            image.classList.remove('fadein');
        },1000);
          
    }else if(counter > 3){            	
        next.disabled = true;   
        prev.disabled = false;
    }
});

scrollTOp.addEventListener('click',()=>{
    window.scrollTo({top: 0, behavior: 'smooth'});    
});

closeModal.addEventListener('click',()=>{
    wellcome.style.display='none';
});

searchBtn.addEventListener('click',()=>{
    alert('Search items not found');
});

