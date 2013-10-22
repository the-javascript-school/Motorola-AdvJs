function SalaryCalculatorViewModel(){
	var _basic,
		_hra,
		_da,
		_tax,
		_salary,
		_callbacks = {},
		that = this;

	this.basic = function(){
		if (arguments.length === 0) return _basic;
		_basic = arguments[0];
		triggerModelChangeFor('basic');
		triggerModelChangeFor('canCalculate');
	};
	this.hra = function(){
		if (arguments.length === 0) return _hra;
		_hra = arguments[0];
		triggerModelChangeFor('hra');
		triggerModelChangeFor('canCalculate');
	};
	this.da = function(){
		if (arguments.length === 0) return _da;
		_da = arguments[0];
		triggerModelChangeFor('da');
		triggerModelChangeFor('canCalculate');
	};
	this.tax = function(){
		if (arguments.length === 0) return _tax;
		_tax = arguments[0];
		triggerModelChangeFor('tax');
		triggerModelChangeFor('canCalculate');
	};
	this.salary = function(){
		return _salary;
	};
	this.calculate = function(){
		_salary = calculateSalary(this.basic(),this.hra(),this.da(),this.tax());
		triggerModelChangeFor('salary');
	};
	function triggerModelChangeFor(attrName){
		if (_callbacks[attrName]){
			var callbackRefs = _callbacks[attrName];
			for(var i=0;i<callbackRefs.length;i++)
			{
				callbackRefs[i].call(that);
			}
		}
	}

	this.canCalculate = function(){
		return this.basic() > 0 && this.hra() > 0 && this.da() > 0 && this.tax() > 0;
	}

	this.addModelChange = function(attrName,callback){
		if (!_callbacks[attrName]) _callbacks[attrName] = [];
		_callbacks[attrName].push(callback);
	}
}