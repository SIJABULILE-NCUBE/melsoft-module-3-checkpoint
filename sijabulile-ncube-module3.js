//=========================
//melsoft module 3 checkpoint
//name:Sijabulile Ncube
//challenges 1 to 7,9,10 (8 is in challenge8.html)
//=====================

//--ch1 operators--
//arithmetic:net salary,uses * and - and % for the rands left after whole thousands
const gross=45000;
const netSalary=gross-gross*0.25-gross*0.01-2500;
console.log("1.1 net salary R"+netSalary,"left over:"+netSalary%1000);

//assignment:+= add items,*= discount and vat,-= coupon
let cart=0;
cart+=150;cart+=85;cart+=220;
cart*=0.9;cart*=1.15;cart-=5;
console.log("1.2 cart R"+cart.toFixed(2));

//comparison:>= age,< short password,=== emails match,!== emails differ
const userAge=20,pass="mypassw0rd",mail1="thabo@mail.com",mail2="thabo@mail.com";
console.log("1.3",userAge>=18,pass.length<8,mail1===mail2,mail1!==mail2);

//logical:(logged in and verified) or admin
const loggedIn=true,verified=false,admin=true;
console.log("1.4",(loggedIn&&verified)||admin);

//unary:+ makes the string a number,! flips the flag
let dark=false;
dark=!dark;
console.log("1.5",+"25",typeof +"25",dark);

//ternary:simple one then nested one with trial
const type="trial";
console.log("1.6",type==="premium"?"Premium Member":"Free Member",type==="premium"?"Premium Member":type==="trial"?"Trial Member":"Free Member");

//string + and template literal
const first="Thabo",last="Nkosi",age=28;
console.log("Welcome back "+first+" "+last+", you are "+age+" years old.");
console.log(`Welcome back ${first} ${last}, you are ${age} years old.`);
//template literal is better,easier to read and I cant forget a space

/*
interview answers ch1
1 with prefix (++x) javascript adds 1 first and then gives me the new value.with postfix (x++) it gives me the old value first and adds 1 after.in the line below a++ shows 5 and ++b shows 6
2 modulo gives the remainder.I can use it to check even or odd (n%2===0),to change minutes into hours and minutes (130%60 is 10),and to do something on every 3rd row of a table like a different colour
3 a nested ternary is fine when there are only 2 or 3 simple options.I should not use it when it gets long or has many conditions because it is hard to read and to fix.then if else is better
sources:NetAcad module 3 and the MDN pages for remainder and conditional operator
*/
let a=5,b=5;
console.log("prefix vs postfix",a++,++b);//5 6


//=================
//--ch2 equality--
//prediction then why
console.log("2A-1",0==false);//true,false becomes 0
console.log("2A-2",0===false);//false,types differ
console.log("2A-3",""==0);//true,"" becomes 0
console.log("2A-4",""===0);//false,types differ
console.log("2A-5","0"==0);//true,"0" becomes 0
console.log("2A-6","0"===0);//false,types differ
console.log("2A-7",null==undefined);//true,only equal to each other
console.log("2A-8",null===undefined);//false,types differ
console.log("2A-9",null==0);//false,== never turns null into 0
console.log("2A-10",null>=0);//true,>= turns null into 0
console.log("2A-11",null>0);//false,0>0 is false
console.log("2A-12",NaN==NaN);//false,NaN is not equal to anything
console.log("2A-13",NaN===NaN);//false,same
console.log("2A-14",Object.is(NaN,NaN));//true,object.is sees them as same
console.log("2A-15",+0===-0);//true,=== ignores the sign of zero
console.log("2A-16",Object.is(+0,-0));//false,object.is sees the sign
console.log("2A-17",[1,2,3]=="1,2,3");//true,array becomes the string
console.log("2A-18",[]==false);//true,[] to "" to 0 and false to 0
console.log("2A-19",[]==0);//true,[] to "" to 0
console.log("2A-20",[0]==false);//true,[0] to "0" to 0

//part B password reset
let np="Str0ngPass99",cp="Str0ngPass99",ce="lerato@mail.com",ce2="lerato@mail.com";
console.log("--test 1--");
console.log("passwords match:"+(np===cp?"PASS":"FAIL"));
console.log("emails match:"+(ce===ce2?"PASS":"FAIL"));
console.log("password not the email:"+(np!==ce?"PASS":"FAIL"));
console.log("length 8 or more:"+(np.length>=8?"PASS":"FAIL"));
np="lerato@mail.com";cp="lerato@mail.co";ce2="lerato@gmail.com";
console.log("--test 2--");
console.log("passwords match:"+(np===cp?"PASS":"FAIL"));
console.log("emails match:"+(ce===ce2?"PASS":"FAIL"));
console.log("password not the email:"+(np!==ce?"PASS":"FAIL"));
console.log("length 8 or more:"+(np.length>=8?"PASS":"FAIL"));
//I used === because == changes the types first,so 123456 and "123456" would be seen as the same.for a password it must match exactly with the same type,so === is the safe one.source:MDN equality comparisons page


//===================
//--ch3 precedence--
console.log("3-1",2+3*4-1);//13,* first then + then -
console.log("3-2",(2+3)*(4-1));//15,brackets then *
console.log("3-3",10-4-2);//4,left to right
console.log("3-4",2**3**2);//512,** goes right to left 3**2=9 then 2**9
console.log("3-5",10%3*2+1);//3,10%3=1 then *2=2 then +1
console.log("3-6",100/4/5);//5,left to right
console.log("3-7",5+2>6&&3<4);//true,5+2=7 then 7>6 and 3<4 then &&
console.log("3-8",true&&false||true&&true);//true,&& before ||
console.log("3-9",!false&&!!0);//false,true&&false
console.log("3-10",5>3&&10<20||!(2==="2"));//true,left side is true
console.log("3-11",1000*1.15*0.9);//1035,left to right
console.log("3-12",typeof 5+1);//number1,typeof first then + joins
console.log("3-13",typeof (5+1));//number,brackets first
console.log("3-14","5"+3*2);//56,3*2=6 then joins as text
console.log("3-15","5"-3+2);//4,"5"-3=2 then +2
//answer:I put brackets even when I dont need them if it makes the code easier to read.brackets show what I really mean so nobody has to remember the precedence table,and it stops mistakes when someone changes the line later.source:MDN operator precedence page


//====================
//--ch4 ternary and short circuit--
let p;
p=95;console.log("4A",p,p>=90?"A":p>=80?"B":p>=70?"C":p>=60?"D":p>=50?"E":"F");
p=82;console.log("4A",p,p>=90?"A":p>=80?"B":p>=70?"C":p>=60?"D":p>=50?"E":"F");
p=73;console.log("4A",p,p>=90?"A":p>=80?"B":p>=70?"C":p>=60?"D":p>=50?"E":"F");
p=65;console.log("4A",p,p>=90?"A":p>=80?"B":p>=70?"C":p>=60?"D":p>=50?"E":"F");
p=54;console.log("4A",p,p>=90?"A":p>=80?"B":p>=70?"C":p>=60?"D":p>=50?"E":"F");
p=42;console.log("4A",p,p>=90?"A":p>=80?"B":p>=70?"C":p>=60?"D":p>=50?"E":"F");
p=0;console.log("4A",p,p>=90?"A":p>=80?"B":p>=70?"C":p>=60?"D":p>=50?"E":"F");
p=100;console.log("4A",p,p>=90?"A":p>=80?"B":p>=70?"C":p>=60?"D":p>=50?"E":"F");

//4B defaults
const u1={};
const u2={notificationCount:0,theme:""};
console.log("4B u1",u1.displayName||"Guest User",u1.theme||"light",u1.maxResults||10,u1.lastLogin??"Never",u1.notificationCount??0);
console.log("4B u2",u2.displayName||"Guest User",u2.theme||"light",u2.maxResults||10,u2.lastLogin??"Never",u2.notificationCount??0);
//|| replaces every falsy value (0,"",false,null,undefined) so the empty theme "" became "light",which is ok here
//?? only replaces null and undefined so the count of 0 stayed 0.if I used || there,the real 0 would be changed to the default and that would be wrong.source:MDN nullish coalescing page

//4C guard clauses
const fullU={address:{city:"Pretoria"}},noAddr={name:"Lerato"},nullU=null;
console.log("4C-1",fullU&&fullU.address&&fullU.address.city,noAddr&&noAddr.address&&noAddr.address.city,nullU&&nullU.address&&nullU.address.city);
console.log("4C-2",fullU?.address?.city,noAddr?.address?.city,nullU?.address?.city);
console.log("4C-3",fullU?.address?.city??"Unknown city",noAddr?.address?.city??"Unknown city",nullU?.address?.city??"Unknown city");

//4D predictions (value and type)
console.log("4D-1",null||undefined||0||""||"finally");//"finally" string
console.log("4D-2",null??undefined??0??""??"finally");//0 number,0 is not nullish
console.log("4D-3",0||"first truthy");//"first truthy" string
console.log("4D-4",0??"first non-nullish");//0 number
console.log("4D-5",true&&false&&"never reached");//false boolean
console.log("4D-6","first"&&"second"&&"third");//"third" string
console.log("4D-7",false||(true&&"yes"));//"yes" string
console.log("4D-8",(false||true)&&"yes");//"yes" string
console.log("4D-9",1&&2&&3);//3 number
console.log("4D-10",null?.foo?.bar?.baz);//undefined,chain stops at null


//==================
//--ch5 typeof instanceof delete--
//5A:number string boolean undefined object object object function number undefined.
console.log("5A",typeof 42,typeof "hello",typeof true,typeof undefined,typeof null,typeof {},typeof [],typeof function(){},typeof NaN,typeof undeclaredVariable);
//typeof on a missing variable does not throw,it just says undefined.null is "object" because of an old bug
console.log("array check",Array.isArray([1,2]),Array.isArray({a:1}));

//5B:true true true false true false true true
console.log("5B",[] instanceof Array,[] instanceof Object,{} instanceof Object,"hello" instanceof String,new String("hello") instanceof String,42 instanceof Number,new Date() instanceof Date,/abc/ instanceof RegExp);
//"hello" and 42 are primitives not objects so instanceof gives false
//typeof is right for primitives (typeof "hi"==="string"),instanceof is right for Array or Date because typeof just says object

//5C delete
const user={name:"Lerato",age:25,role:"student"};
console.log("before",user);
delete user.role;
console.log("after",user);
let x=5;
console.log("delete x:",delete x,x);//false,x stays 5
const arr=[1,2,3,4];
delete arr[1];
console.log(arr,arr.length,arr[1]);//leaves an empty hole and length stays 4
console.log("delete Math.PI:",delete Math.PI,Math.PI);//false,its non-configurable so it cant be removed
//answer:I would not use delete on an array because it only removes the value and leaves an empty hole,and the length stays the same.splice(index,1) removes the item and moves the rest down,or filter() gives a new array without the item.source:MDN delete page and MDN array splice page


//=================
//--ch6 bitwise--
const READ=1,WRITE=2,DELETE=4,ADMIN=8;
let user1=READ|WRITE;
console.log("6-1",user1);
const adminUser=READ|WRITE|DELETE|ADMIN;
console.log("6-2",adminUser);
console.log("6-3 can read?",(user1&READ)!==0?"Yes":"No");
console.log("6-4 can delete?",(user1&DELETE)!==0?"Yes":"No");
user1|=DELETE;
console.log("6-5",user1);
user1&=~WRITE;//~WRITE has a 0 only in the write spot so & clears just that bit
console.log("6-6",user1);
user1^=ADMIN;
console.log("6-7 on",user1);
user1^=ADMIN;
console.log("6-7 off",user1);
const SUPER_ADMIN=ADMIN<<1;
console.log("6-8",SUPER_ADMIN);
/*
answers ch6
1 one number is small an easy to keep in one database column,and checking a permission is one quick operation.it is also easy to compare or combine two permission sets
2 the downside is that it is hard to read,a number like 13 tells me nothing at first sight,and a 32 bit number only gives about 31 flags.I would not use it when the team is new to bitwise or when readability matters more than speed
3 & and | work on every bit of two numbers.&& and || work with true and false and stop early when the answer is already known.a silent bug:if(a&b) with a=1 and b=2 gives 0,so a real admin could be blocked and no error shows
source:MDN bitwise operators page
*/


//=================
//--ch7 banking--
const fmt=/\B(?=(\d{3})+(?!\d))/g;
const P=25000,r=0.075,n=12,t=3;
const finalBal=P*(1+r/n)**(n*t);
console.log("7-1 final balance R "+finalBal.toFixed(2).replace(fmt,","));
console.log("7-1 interest R "+(finalBal-P).toFixed(2).replace(fmt,","));
console.log("7-1 effective rate "+(((finalBal/P)**(1/t)-1)*100).toFixed(2)+"%");

//scenario 2 ternary only
let bal,fee;
bal=500;fee=bal<1000?25:bal<5000?50:bal<25000?75:0;console.log("7-2",bal,fee,fee*12);
bal=1500;fee=bal<1000?25:bal<5000?50:bal<25000?75:0;console.log("7-2",bal,fee,fee*12);
bal=10000;fee=bal<1000?25:bal<5000?50:bal<25000?75:0;console.log("7-2",bal,fee,fee*12);
bal=50000;fee=bal<1000?25:bal<5000?50:bal<25000?75:0;console.log("7-2",bal,fee,fee*12);

//scenario 3 round to cents at every step
const zar=15750.33,rate=18.42;
const comm=Math.round(zar*0.025*100)/100;
const after=Math.round((zar-comm)*100)/100;
const usd=Math.round(after/rate*100)/100;
console.log("7-3 commission R"+comm.toFixed(2).replace(fmt,","),"after R"+after.toFixed(2).replace(fmt,","),"usd $"+usd.toFixed(2).replace(fmt,","));
//floating point:computers save decimals in binary and some numbers like 0.1 cant be saved exactly,so 0.1+0.2 gives 0.30000000000000004.in the commission and the usd amount there can be tiny extra digits.I used Math.round(x*100)/100 on each money step and toFixed(2) only to show the result.source:MDN Number page


//=================
//--ch9 bug hunt--
/*
junior script (not run)
var item1Price="199.99";
var item2Price="49.50";
var item3Price=125;
var quantity="2";
var discountCode="SAVE10";
var isLoggedIn="true";
var customerAge=null;
var subtotal=item1Price+item2Price+item3Price*quantity;
var discount=discountCode=="SAVE10"?0.1:0;
var discountAmount=subtotal*discount;
var afterDiscount=subtotal-discountAmount;
var vat=afterDiscount*0.15;
var total=afterDiscount+vat;
var canCheckout=isLoggedIn&&customerAge>18;
var seniorDiscount=customerAge>=60?total*0.05:null;
var finalTotal=total-seniorDiscount;
console.log("Total: R"+finalTotal.toFixed(2));

bugs
1 var item1Price="199.99"; its a string so + joins text
2 var item2Price="49.50"; same problem
3 var quantity="2"; string,only works in * by luck
4 var subtotal=item1Price+item2Price+item3Price*quantity; + joins the strings into "199.9949.50250"
5 same line:precedence means * onlyits item3 so the quantity is not applied to the other items
6 var discountAmount=subtotal*discount; subtotal is text so this gives NaN
7 discountCode=="SAVE10" should be === so no type change
8 var isLoggedIn="true"; any non empty string is truthy,even "false"
9 var canCheckout=isLoggedIn&&customerAge>18; null>18 fails silently and >18 blocks 18 year olds,should be >=
10 var customerAge=null; no default,use ??
11 customerAge>=60?total*0.05:null; null in maths is risky,use 0
12 var finalTotal=total-seniorDiscount; NaN flows down and toFixed shows "NaN"
*/
//corrected (I assumed the quantity applies to all items)
const price1=199.99,price2=49.50,price3=125,qty=2;
const cartSub=(price1+price2+price3)*qty;
const discRate="SAVE10"==="SAVE10"?0.1:0;
const afterDisc=cartSub-cartSub*discRate;
const totalVat=afterDisc*1.15;
const safeAge=null??0;
console.log("can checkout?",true===true&&safeAge>=18);
const senior=safeAge>=60?totalVat*0.05:0;
console.log("Total: R"+(Math.round((totalVat-senior)*100)/100).toFixed(2));


//=================
//--ch10 reflecion--
/*
question 1:what is the difference between & and | and && and ||,and when can mixing them cause a silent bug?
answer:& and | are bitwise operators.they work on every bit of two numbers.&& and || are logical operators.they work with true and false and they stop early when the answer is already known.if I write if(isAdmin&hasAccess) and the values are 1 and 2,the result is 0 because the bits do not match.so a real admin is blocked and JavaScript shows no error.

question 2:when do I prefer ?? over ||?
answer:I use ?? when 0,an empty string or false are real values that I want to keep.?? only replaces null and undefined.|| replaces every falsy value.for example if a user sets the volume to 0,then volume||50 gives 50 which is wrong.volume??50 keeps the 0 which is correct.

question 3:why does typeof null give "object" and how do I check for null safely?
answer:it is an old mistake from the first version of JavaScript.in that version null had the same type tag as objects,so typeof says "object".it was never fixed because it would break old websites.to check for null safely I use value===null.

question 4:why is 0.1+0.2 not equal to 0.3 and what do real banks do?
answer:computers save decimals in binary and numbers like 0.1 and 0.2 cannot be saved exactly.so the sum is 0.30000000000000004.real banks do not save money as decimals.they save it as whole numbers in the smallest unit like cents,or they use a decimal library.in my calculator I used Math.round(x*100)/100 on each money step.

question 5:what was the hardest concept for me and what made it click?
answer:the hardest for me was ~ with &= to remove a permission.at first I could not see how it removed only one permission.it made sense when I wrote the bits on paper and saw that ~WRITE has a 0 only in the write spot,so & keeps every other bit and clears just that one.

sources:NetAcad module 3 and the MDN pages for bitwise operators,nullish coalescing,typeof and Number
*/