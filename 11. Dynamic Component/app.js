var myVue = new Vue({
  el: '#root',
  data: {
  	view : 'component1'
  },
  components: {
  	'component1':{
  		template : '<h1>Content from Commponent 1</h1>'
  	},
  	'component2': {
  		template : '<h1>Content from Component 2</h1>'
  	}
  },
  methods: {
  	viewChange : function(e){
  		this.view = e.target.value;
  	}
  }
});