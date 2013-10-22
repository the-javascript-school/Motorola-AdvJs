function SalaryCalculatorView(options){
	var defaults = {
		root : $("<div>")

	};

	defaults = $.extend(defaults,options);
	var viewModel = defaults.viewModel;
	this.$root = !!options.root? $(options.root) : $("<div>");
	
	this.render = function(){
		var template = $("#" + defaults.templateId);
		this.$root.append(template.html());
		return this;
	}

	this.initialize = function(){
		var that = this;
		this.$root.find("#btnCalculate").attr("disabled",!viewModel.canCalculate());

		viewModel.addModelChange('salary',function(){
			that.$root.find("#divResult").html(viewModel.salary());
		});
		viewModel.addModelChange('basic',function(){
			
			that.$root.find("#txtBasic").val(this.basic());
		});
		viewModel.addModelChange('hra',function(){
			that.$root.find("#txtHra").val(this.hra());
		});
		viewModel.addModelChange('da',function(){
			that.$root.find("#txtDa").val(this.da());
		});
		viewModel.addModelChange('tax',function(){
			that.$root.find("#rangeTax").val(this.tax());
			that.$root.find("#spanTax").html(this.tax());
		});
		viewModel.addModelChange("canCalculate",function(){
			that.$root.find("#btnCalculate").attr("disabled",!this.canCalculate());
		});

		this.$root.on("change","#txtBasic",function(){
			viewModel.basic(!isNaN(this.value) ? parseInt(this.value) : 0);
		});
		this.$root.on("change","#txtHra",function(){
			viewModel.hra(!isNaN(this.value) ? parseInt(this.value) : 0);
		});
		this.$root.on("change","#txtDa",function(){
			viewModel.da(!isNaN(this.value) ? parseInt(this.value) : 0);
		});
		this.$root.on("change","#rangeTax",function(){
			viewModel.tax(!isNaN(this.value) ? parseInt(this.value) : 0);
		});
		
		this.$root.on("click","#btnCalculate",function(){
			viewModel.calculate();
		});
	}
}