function check(){
	var c=0;
	var q1=document.quiz.question1.value;
	var q2=document.quiz.question2.value;
	var q3=document.quiz.question3.value;
	var q4=document.quiz.question4.value;
	var q5=document.quiz.question5.value;
	var result=document.getElementById("result");
	var quiz=document.getElementById("quiz");
	if(q1=="HTML"){c++;}
	if(q2=="16"){c++;}
	if(q3=="1"){c++;}
	if(q4=="13"){c++;}
	if(q5=="smile"){c++;}
	quiz.style.display="none";
	
	if(c<=3){
		result.textContent=c;
		result.textContent='your result is not good and your score is ...'+c;
	}
	else{
		result.textContent='your result is good and your score is .....'+c;
	}
	
	
}