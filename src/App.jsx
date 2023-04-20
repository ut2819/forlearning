import React from "react";

function App(){
    let currDate=new Date();
    currDate=currDate.getHours();
    let greeting=" ";
    const cssStyle={};

    if(currDate>=0 && currDate<12){
        greeting="Good Morning";
        cssStyle.color="#00b894"
    }else if(currDate>=12 && currDate<17){
        greeting="Good Afternoon";
        cssStyle.color="orange";
}else if(currDate>=17 && currDate<21){
    greeting="Good Evening";
    cssStyle.color="green";
}else{
    greeting="Good Night";
    cssStyle.color="Black";
}
return (
    <>
    <div>
        <h1>Hello Sir,<span style={cssStyle}>{greeting}</span></h1>
    </div>
    </>
)
}

export default App;