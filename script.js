function firstNonRepeatedChar(str) {
 // Write your code here
	for(let i=0;i<str.length;i++){
		if(str[i]!===srt[i+1]){
			return str[i+1];
			
		}
	}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 







