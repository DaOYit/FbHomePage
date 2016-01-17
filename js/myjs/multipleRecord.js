var logIn=document.getElementById("logIn");
logIn.onclick=function()
{	
	if ('localStorage' in window && window['localStorage'] !== null) {
        try {
            //Get stored data
            var users = JSON.parse(localStorage.getItem('users'));
		var pwd = JSON.parse(localStorage.getItem('pass'));
		var data=document.getElementById('email').value;
		var data2=document.getElementById('email2').value;
            if (users === null) {
                //If no stored data, create empty array
                users = [];
            }

            user = {Name:data,};
	    pwd={Password:data2};

            //Add new entry to stored array
            users.push(data);
	   users.push(data2);
            //Save array
            localStorage.setItem("users", JSON.stringify(users));
	    //localStorage.setItem("pass", JSON.stringify(pass));

            alert("The data was saved.");
            return true;

        } catch (e) {
            
        }
    } else {
        alert('Cannot store user preferences as your browser do not support local storage');
    }
}

var sear=document.getElementById("Search");
sear.onclick=function()
{
	//localStorage.clear();
	if ('localStorage' in window && window['localStorage'] !== null) 
	{
            var us2= JSON.parse(localStorage.getItem('users'));
            if (us2 !== null) 
		{
                	var retrievedData = localStorage.getItem("users");
			var movies2 = JSON.parse(retrievedData);
			var retrievedData1 = localStorage.getItem("pass");
			var movies3 = JSON.parse(retrievedData1);
		
    			for(var i=movies2.length-1;i>=0;i--)
    			{
        			 document.write("<pre>" + movies2[i] +"</pre>");   
    			}  
			for(var i=movies2.length-1;i>=0;i--)
    			{
        			 document.write("<pre>" + movies3[i] +"</pre>");   
    			}   
    		} 
		else
		 {
        			alert('Cannot store user preferences as your browser do not support local storage');
    		 }	
		
		
	}
	
}