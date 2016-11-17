Main = React.createClass({
	render: function(){
		return(
			<div>
				<header>
					<Link to="/">
						<button>Home</button>
					</Link>

					<Link to="about">
						<button>About</button>
					</Link>

					<Link to="contact">
						<button>Contact</button>
					</Link>
				</header>
				
				{this.props.children}
				
				<footer>This is a footer</footer>
			</div>
				
		);
	}
})