function sum(){
	function parseArg(arg){
		if (!isNaN(arg)) return arg * 1;
		if (typeof arg == "function") return parseArg(arg());
		if (typeof arg == "object" && !!arg.length) return sum.apply(this,arg);
		return 0;
	}
	if (arguments.length == 0) return 0;
	return arguments.length == 1 ? parseArg(arguments[0]) 
		: parseArg(arguments[0]) + sum.apply(this,[].splice.call(arguments,1));
}

/*arg = [1,2,3,4]
sum.apply(this,arg)
sum(1,2,3,4)*/