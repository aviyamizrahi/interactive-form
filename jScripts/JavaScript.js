let cheese; // משתנים גלובליים
let yams;
let crotons;
let eggs;


let avocado;
let cucumber;
let tomato;
let onion;
let olives;
let leaves;
let lettuce;

let userName;
let sendButton;


function global() { // פונקציה שפועלת ברגע שהאתר עולה (onload) ומגדירה את כל אחד מהמשתנים הגלובליים 
    cheese = document.getElementById("cheese");
    yams = document.getElementById("yams");
    crotons = document.getElementById("crotons");
    eggs = document.getElementById("eggs");
    avocado = document.getElementById("avocado");
    cucumber = document.getElementById("cucumber");
    tomato = document.getElementById("tomato");
    onion = document.getElementById("onion");
    olives = document.getElementById("olives");
    leaves = document.getElementById("leaves");
    lettuce = document.getElementById("lettuce");
    userName = document.getElementById("name");
    sendButton = document.getElementById("send");
}

function requiredField() { // פונקציה שפועלת ברגע שהמשתמש מנסה להזין משהו בתוך תיבת הטקסט שם מלא
    let userNameValue = document.getElementById("name").value;
        if (radioCheck()[0] == true) { // אם אחד מכפתורי הרדיו מסומנים אז.. 
            sendButton.style.filter = "opacity(100%)"; // תהפוך את הכפתור ללא שקוף
            sendButton.disabled = false; // תהפוך את הכפתור לפעיל
            document.getElementById("userNameValue").innerText = "הסלט של: " + userNameValue; // משתנה בזמן אמת בהתאם למה שהמשתמש מקליד
        }
    else {
            sendButton.style.filter = "opacity(50%)"; // הכפתור ישאר שקוף
        alert("אנא בחר תוספת"); // המשתמש יקבל התרעה שעליו קודם לבחור תוספת 

    }
}
function radioCheck() {
    const radioArray = [cheese, yams, crotons, eggs]; // מערך חדש של כל כפתורי הרדיו
    const radioArrayHe = ["מוצרלה", "בטטה", "קרוטונים", "ביצה"]; // מערך בעברית לצורך הדפסה בהתאמת הסדר למערך radioArray
    let result = false; // התוצאה שהפונקציה תחזיר מוגדרת קודם כל כשלילית
    let extraName = radioArray[0].id; // יצירת משתנה שבסופו של דבר יחזיר את השם של התוספת שנבחרה
    for (let i= 0 ; i < radioArray.length ; i++) // לולאה שעוברת על כל כפתורי הרדיו (המערך שיצרנו)
    {
        if(radioArray[i].checked){ // אם כפתור הרדיו במיקום הנוכחי מסומן אז..
           document.getElementById(radioArray[i].id +"bowl").style.display = "block"; // תציג את האלמנט עם הid של כפתור הריו פלוס המילה bowl
           result=true; // תהפוך את משתנה התוצאה לחיובית
            extraName = radioArrayHe[i] ; // שם בתוך המשתנה את התוספת שנבחרה בעברית
        } 
        else { // במידה והכפתור הנוכחי במערך אינו מסומן אז.. 
            document.getElementById(radioArray[i].id +"bowl").style.display = "none"; // תעלים את התמונה
        }
    }
    const resultAndExtraName = [result, extraName]; // כדי לשלוח את 2 המשתנים יצרנו מערך חדש שכולל בתוכו את התוצה הבוליאנית ואת שם התוספת שנבחרה בעברית
    console.log(resultAndExtraName); // לצורך בדיקה עצמית
    console.log(extraName); // לצורך בדיקה עצמית

    return resultAndExtraName; // הפונקציה מחזירה האם יש כפתור רדיו מסומן או לא
}

function vegtablesCheck() { // פוצקיה שבודקת איזה מהירקות סומנו בצ׳ק בוקס
    const vegetablesArray = ["avocado", "tomato", "onion", "cucumber", "lettuce", "olives", "leaves"]; // מערך חדש שמורכב מהמחרוזות של שמות הירקות בצ׳ק בוקסים
    const vegetablesArrayHe = ["אבוקדו", "עגבניות", "בצל סגול", "מלפפון", "חסה", "זיתים", "עלי רוקט"]; // מערך בעברית תואם למערך השמות לצורך הדפסה
    let vegCheckedArray = []; // מערך חדש שאליו יכנסו הירקות שסומנו ע״י המשתמש
    for (let i = 0; i < vegetablesArray.length; i++) { // לולאה שעוברת על הצ׳ק בוקסים
        let veg = vegetablesArray[i]; // משתנה מתעדכן בהתאם לאיטרציה בלולאה של שם הירק 
        let checkbox = document.getElementById(veg); // משתנה שמתייחס לצ׳ק בוקס בהתאם לשם הירק באיטרציה הנוכחית
        let image = document.getElementById("full" + veg); // התמונה של הירק באיטרציה הנוכחית שנמצא בחצי שקיפות בהתחלה
        let bowlimage = document.getElementById(veg + "bowl"); // התמונה של הירק באיטרציה הנוכחית שנמצא בתוך הקערה 

        if (checkbox.checked) { // אם הצ׳ק בוקס באיטרציה מסומן אז..
            image.style.filter = "opacity(100%)"; // ללא שקיפות על התמונה
            bowlimage.style.display = "block"; // תראה את התמונה בתוך הקערה
            vegCheckedArray[vegCheckedArray.length] = vegetablesArrayHe[i]; // תכניס את השם בעברית של הירק לתוך תא חדש בסוף המערך
        } else { // אם הצ׳ק בוקס לא מסומן..
            image.style.filter = "opacity(50%)"; // שקיפות התמונה 50%
            bowlimage.style.display = "none"; // אל תציג את התמונה בתוך הקערה
        }
        console.log(vegCheckedArray); // לצורך בדייקה עצמית 
    }
    return vegCheckedArray; // הפונקציה מחזירה את המערך עם השמות בעברית 
}

function openPopup(event){ // פונקציה שפותחת הודעת פופ-אפ
    event.preventDefault(); // כל כפתור בתוך form מרענן את הדף אוטומטית ופעולה זאת מבטלת את זה באמצעות פנייה ל״אירוע״ שמתקיים
    document.getElementById("popup").style.display = "block"; // מציג את הודעת הפופ-אפ
    console.log(event.type) // בדיקה עצמית שסוג האירוע הוא אכן click
    printFunc() // קריאה לפוקציה שאחראית על הדפסה 
    
}

function closePopup(){ // פונקציה שאחראית על סגירת חלונית הפופ-אפ 
     document.getElementById("popup").style.display = "none"; // סוגר חזרה את הודעת הפופ-אפ בלחיצה על כפתור ok

}

function printFunc() { // פוקציה שאחראית על הדפסת סיכום ההזמנה
    let finalVegArray= vegtablesCheck(); // שמירת התוצאה של הפוקציה שמחזירה את המערך של הירקות המסומנים בצ׳ק בוקס
    let printVeg=""; // הגדרת משתנה מסוג string כדי להדפיס את הרשימה של הירקות
    for (let i=0; i < finalVegArray.length; i++) // לולאה שרצה על המערך של הירקות כדי לשים פסיקים בכל איטרציה
    {
        if (finalVegArray[finalVegArray.length-1] === finalVegArray[i]) // אם הגענו לירק האחרון במערך אז..
       {
           printVeg += finalVegArray[i] + "."; // תשים נקודה אחרי הירק
       }
        else // אם אנחנו נמצאים בכל אחד מהירקות שלפני האחרון אז..
        {
            printVeg+=finalVegArray[i] + ","; // תשים פסיק אחרי הירק 
        }
    }
    document.getElementById("msgName").innerHTML = userName.value; // הדפסת שם הלקוח
    document.getElementById("msgVeg").innerHTML =  printVeg ; // הדפסת רשימת הירקות
    document.getElementById("msgExtra").innerHTML =   radioCheck()[1] ; // הדפסת שם התוספת
    document.getElementById("msgNote").innerHTML =  document.getElementById("notes").value; // הדפסת הערות
    
}
