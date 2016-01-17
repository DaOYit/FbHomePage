var logIn=document.getElementById("logIn");
logIn.onclick=function()
{
	
	if(('localStorage in window') && window['localStorage'] !==null)
	{

		
			var inUname=document.getElementById('uname').value;
			var inPassword=document.getElementById('passwd').value;
			var retrievedData = localStorage.getItem("EMAIL");
			var retrievedData2 = localStorage.getItem("PASSWORD");
			var uname = JSON.parse(retrievedData);
			var msg;
			var msg2;
			var password = JSON.parse(retrievedData2);

    			for(var i=uname.length-1;i>=0;i--)
    			{
				if((inUname==uname[i]))
				{
					msg2=i;
					
				}
    			} 
			if((inUname==uname[msg2]) && (inPassword==password[msg2]))
			{
				alert("Success");
				sessionStorage.setItem("num",msg2);
				
				 var url = "input.html" ;
            window.location.href = url;
			}
			else
			{
				alert("fail to Login");
			}
			
	}
		
}
function radioVal()
{
	var selection = document.register.gender;
		for (i=0;i<selection.length;i++)
		{
			if (selection[i].checked == true)
			//alert(selection[i].value)
			
			return selection[i].value;
		}
}
	function myFunction()
	{
		if(('localStorage in window') && window['localStorage'] !==null)
	{
		
		
		var Data5=radioVal(); //= document.getElementById("myRadio1").value;
		var date = document.getElementById("sel1").selectedIndex;
		var day = document.getElementById("sel2").selectedIndex;
		var year = document.getElementById("sel3");
		var Data6=date+"/"+day+"/"+year.options[year.selectedIndex].value;
		
		var Data1=document.getElementById('fName').value;
		var Data2=document.getElementById('lName').value;
		var Data3=document.getElementById('email').value;
		var Data4=document.getElementById('rPasswd').value;
		var username= JSON.parse(localStorage.getItem('username'));
		var lname= JSON.parse(localStorage.getItem('lname'));
		var EMAIL= JSON.parse(localStorage.getItem('EMAIL'));
		var PASSWORD= JSON.parse(localStorage.getItem('PASSWORD'));
		var DOB= JSON.parse(localStorage.getItem('DOB'));
		var GENDER= JSON.parse(localStorage.getItem('GENDER'));
		if (username=== null)
		{
                	username = [];
        	}
		usernam={FName:Data1};
	    	//lnam ={LName:Data2};
		//temp2 ={Email:Data3,};
	    	//temp3 ={Password:Data4};

		username.push(Data1);
		if(lname=== null)
		{
			lname= [];
		}
		lnam ={LName:Data2};
		lname.push(Data2);
		if(EMAIL=== null)
		{
			EMAIL= [];
		}
		EMAI ={LName:Data3};
		EMAIL.push(Data3);
		if(PASSWORD=== null)
		{
			PASSWORD= [];
		}
		PASSWOR ={LName:Data4};
		PASSWORD.push(Data4);
		if(GENDER=== null)
		{
			GENDER= [];
		}
		GENDE={LName:Data5};
		GENDER.push(Data5);
		if(DOB=== null)
		{
			DOB= [];
		}
		DO={LName:Data6};
		DOB.push(Data6);
		localStorage.setItem("username", JSON.stringify(username))
		localStorage.setItem("lname", JSON.stringify(lname))
		localStorage.setItem("EMAIL", JSON.stringify(EMAIL))
		localStorage.setItem("PASSWORD", JSON.stringify(PASSWORD))
		localStorage.setItem("GENDER", JSON.stringify(GENDER))
		localStorage.setItem("DOB", JSON.stringify(DOB))
		alert("The data was saved.");
            	return true;
	}else
	{
		alert("your Browser Not Support this ofline storage");
	}	
	}

function optioncall()
	{
		var data=document.getElementById("sel1");
		for(var i=1;i<=31;i++)
		{
			data.options[data.options.length]=new Option(i,i);
		}
		var data=document.getElementById("sel2");
		for(var i=1;i<=12;i++)
		{
			data.options[data.options.length]=new Option(i,i);
		}
		var data=document.getElementById("sel3");
		for(var i=2016;i>=1947;i--)
		{
			data.options[data.options.length]=new Option(i,i);
		}
		
	}
	$(function() {
    $("#rEmail").keyup(function() {
        var password = $("#email").val();
        $("#msg").html(password == $(this).val() ? "EMAIL match." : "EMAIL do not match!");
    });

});

		//var required=document.getElementById('rEmail').value;
		//var verified=document.getElementById('email').value;
    