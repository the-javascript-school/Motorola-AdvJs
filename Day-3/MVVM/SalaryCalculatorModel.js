function calculateSalary(basic,hra,da,tax){
			var gross = basic + hra + da,
				taxable = gross * (tax/100),
				net = gross - taxable;
			return net;
	}