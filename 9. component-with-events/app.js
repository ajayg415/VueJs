Vue.component('mycomponent', {
	template: "<h4 v-on:mouseover='mOver()' v-on:mouseout='mOut()'>Hello World. Mouse <span>{{text}}</span></h4>",
	data: function() {
			return {
				text: 'Over Here'
			}
	},
	methods: {
		mOver: function() {
			this.text = 'Out Plz'
		},
		mOut: function(){
			this.text = 'Over Here'
		}
	}

});