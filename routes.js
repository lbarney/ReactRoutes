ReactDOM.render(
	

	<Router>
		<Route path="/" component={Main}>
			<IndexRoute component={Home}/>
			<Route path="about" component={About}/>
			<Route path="contact" component={Contact}/>
		</Route>
	</Router>,
	
	document.getElementById("content")
	);