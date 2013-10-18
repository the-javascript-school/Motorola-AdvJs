describe("Calculator",function(){
	it("should be able to sum two numbers passed as arguments",function(){
		//Arrange
		var number1 = 10,
			number2 = 20,
			expectedResult = 30;

		//Act
		var result = sum(number1,number2);

		//Assert
		expect(result).toBe(expectedResult);
	});

	it("should be able to sum two numbers in string format passed as arguments",function(){
		//Arrange
		var number1 = "10",
			number2 = "20",
			expectedResult = 30;

		//Act
		var result = sum(number1,number2);

		//Assert
		expect(result).toBe(expectedResult);
	});
	it("should be able to sum only one number",function(){
		//Arrange
		var number1 = 10,
			expectedResult = 10;

		//Act
		var result = sum(number1);
		throw new Error("something");
		//Assert
		expect(result).toBe(expectedResult);
	});
	it("should be able to sum arbitrary number of numbers",function(){
		//Arrange
		var number1 = 10,
			number2 = 20,
			number3 = 30,
			expectedResult = 60;

		//Act
		var result = sum(number1,number2,number3);

		//Assert
		expect(result).toBe(expectedResult);
	});
	it("sum should return 0 when no arguments are passed",function(){
		//Arrange
		var	expectedResult = 0;

		//Act
		var result = sum();

		//Assert
		expect(result).toBe(expectedResult);
	});
	it("should be able to pass a function returning a number as an argument",function(){
		//Arrange
		var fn = function(){ return 10;}
		var	expectedResult = 10;

		//Act
		var result = sum(fn);

		//Assert
		expect(result).toBe(expectedResult);
	});
	it("should be able to pass many functions returning number as an argument",function(){
		//Arrange
		var fn1 = function(){ return 10;}
		var fn2 = function(){ return 20;}
		var	expectedResult = 30;

		//Act
		var result = sum(fn1,fn2);

		//Assert
		expect(result).toBe(expectedResult);
	});
	it("should be able to pass a function returing a function returing a number as an argument",function(){
		//Arrange
		var fn1 = function(){ 
			return function(){
				return 10;
			}
		}

		var	expectedResult = 10;

		//Act
		var result = sum(fn1);

		//Assert
		expect(result).toBe(expectedResult);
	});
	it("should be able to pass array of numbers as arguments",function(){
		//Arrange
		var numbers = [10,20,30];
		var	expectedResult = 60;

		//Act
		var result = sum(numbers);

		//Assert
		expect(result).toBe(expectedResult);
	});
	it("should be able to pass a function returning an array of numbers as arguments",function(){
		//Arrange
		var fn = function(){
			return [10,20,30];
		}
		var	expectedResult = 60;

		//Act
		var result = sum(fn);

		//Assert
		expect(result).toBe(expectedResult);
	});
	it("should be able to pass an array of functions returning numbers as arguments",function(){
		//Arrange
		var fn1 = function(){
			return 10;
		}
		var fn2 = function(){
			return 20
		};
		var	expectedResult = 30;

		//Act
		var result = sum([fn1,fn2]);

		//Assert
		expect(result).toBe(expectedResult);
	});
		it("should be able to pass an array of functions returning array of numbers as arguments",function(){
		//Arrange
		var fn1 = function(){
			return [10,20];
		};
		var fn2 = function(){
			return [30,[40,[50]]]
		};
		var	expectedResult = 150;

		//Act
		var result = sum([fn1,fn2]);


		//Assert
		expect(result).toBe(expectedResult);
	});
});