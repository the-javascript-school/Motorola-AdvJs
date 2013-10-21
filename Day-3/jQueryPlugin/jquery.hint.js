$.fn.hint = function(options){
		var defaults = {
			hintClass : "hint"
		};
		options = $.extend(defaults,options);

		this.each(function(){
			$(this)
				.addClass(options.hintClass)
				.val($(this).attr("hintText"))
				.bind({
					focus : onTaskTxtFocus,
					blur : onTaskTxtBlur 
				});
		});
		
		function onTaskTxtFocus(){
			var $this = $(this);
			if ($this.val() === $this.attr("hintText")){
				$this.removeClass(options.hintClass);
				$this.val('');
			}
		} 
		function onTaskTxtBlur(){
			var $this = $(this);
			if ($this.val() === ''){
				$this.addClass(options.hintClass);
				$this.val($this.attr("hintText"));
			}
		}
		return {
			focus : onTaskTxtFocus,
			blur : onTaskTxtBlur
		};
	}