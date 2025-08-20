function lengthOfLongestSubstring(s:string){
const seen:Map<string, number> = new Map();
let maxLength = 0; let start = 0;
for(let end = 0; end<s.length;end++){
    if(seen.has(s[end]) && seen.get(s[end])! >= start){
        start = seen.get(s[end])! + 1;
    }
    maxLength = Math.max(maxLength,end-start+1);
    seen.set(s[end],end);
}
return maxLength;
}

function lengthOfLongestSubStrin(s:string){
let seen:Set<string> = new Set();
let maxLength = 0; 
let start = 0;
for(let end = 0; end<s.length;end++){
    while(seen.has(s[end])){
        seen.delete(s[start]);
        start++;
    }
    seen.add(s[end]);
    maxLength = Math.max(maxLength,end-start+1);
}
return maxLength;
}

console.log(lengthOfLongestSubstring('abcabcbb'));