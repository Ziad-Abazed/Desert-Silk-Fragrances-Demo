
const requestedId=new URLSearchParams(location.search).get('id');
const product=products.find(p=>p.id===Number(requestedId===null?8:requestedId));
if(!product){document.title='Product not found | Desert Silk Fragrances';document.querySelector('#product-page').className='missing';document.querySelector('#product-page').innerHTML='<p class="eyebrow">Desert Silk Fragrances</p><h1>Product not found.</h1><p>This perfume is not in the demo collection.</p><a class="button" href="index.html#collection">Return to collection</a>'}
else{
document.title=product.name+' | Desert Silk Fragrances';
const categories={Woody:'Woody & oud',Sweet:'Sweet & amber',Floral:'Floral & musk'};
const descriptions={Woody:'Explore a rich, woody scent profile with depth and warmth.',Sweet:'Explore a warm, sweet scent profile with an inviting gourmand character.',Floral:'Explore a soft scent profile with floral or musky accents.'};
document.querySelector('#crumb-product').textContent=product.name;
document.querySelector('#brand').textContent=product.real?'Lattafa · '+categories[product.category]:'Concept collection · '+categories[product.category];
document.querySelector('#product-name').textContent=product.name;
document.querySelector('#description').textContent=descriptions[product.category];
document.querySelector('#product-price').textContent=money(product.price);
document.querySelector('#bottle-size').textContent=(product.size||100)+' ml';
const image=document.querySelector('#bottle-photo');image.src=product.image;image.alt=(product.real?'Lattafa ':'Illustrative photo for ')+product.name+' perfume';
if(!product.real)document.querySelector('#detail-image').classList.add('concept');
for(const note of product.notes.split(' · ')){const chip=document.createElement('span');chip.textContent=note;document.querySelector('#scent-notes').append(chip)}
document.querySelector('#about-fragrance').textContent=product.real?product.name+' by Lattafa features notes of '+product.notes.toLowerCase().replaceAll(' · ', ', ')+'. The bottle photograph shows the real product; the price shown is an example for this demo.':product.name+' is an illustrative concept perfume used to preview the store. Its name, scent notes, bottle size, price, and photograph are examples.';
let quantity=1;const minus=document.querySelector('#minus'),plus=document.querySelector('#plus'),output=document.querySelector('#quantity');
function updateQuantity(){output.textContent=quantity;minus.disabled=quantity===1;plus.disabled=quantity===10}updateQuantity();
minus.onclick=()=>{quantity=Math.max(1,quantity-1);updateQuantity()};plus.onclick=()=>{quantity=Math.min(10,quantity+1);updateQuantity()};
document.querySelector('#detail-add').onclick=()=>addToDemoBag(product,quantity);
}
