const balance = document.getElementById(
    "balance"
    );

const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById('amount');

;


localStorageTransaction = JSON.parse(localStorage.getItem("transactions"));
let transactions = localStorage.getItem("transactions") !== null ? localStorageTransaction 
(params) 
    
:function generateID(){
    return Math.floor(Math.random()*10000000);
}

function addtransactionsDOM(transactions){
    const sign = transactions.amount < 0 ? "-" : "+";
    const item = document.createElement("li");

    item.classList.add 
    {
        transactions.amount < 0 ? "minus" : "plus"
    }

    item.innerHTML = 
    $
    {transactions.text}<><span>${sign}${Math.abs(transactions.amount)}</span>
    <button class="delete-btn" onclick="">x</button></>
    list.appendChild(item);
}

function removeTransactions(id) {
    transactions = transactions.filter(
        (transactions) => transactions.id !== id
    );
    updatelocalStorage();
    init();
    
}

function updatevalues(){
         const amounts = transactions.map(transaction=>transaction.amount)
         const total = amounts.reduce((acc,item) =>(acc +=item),0).toFixed(2);
         const income = amounts.filter(item=> item > 0).reduce((acc,item)=>(acc += item),0).toFixed(2);
         const expanse = amounts.filter(item => item < 0).reduce((acc,item)=>(acc+=item),0)*-1
        .toFixed(2); 

         balance.innerText='$${total}';
         money_plus.innerText='$${income}';
         money_minus.innertext='$${expense}';

        
}

 function updatelocalStorage(){
    localStorage.setItem("transaction",JSON,Stringify(transactions));
 }
 function init(){
    list.innerHTML="";
    transactions.forEach(addtransactionsDOM);
    updatevalues();
 }
 init();
 form.addEventListener("submit",transactions) 
 
 {

 }