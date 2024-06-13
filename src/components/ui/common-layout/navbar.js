export default function Navbar() {
	return (
		
			<div className="flex flex-row justify-between items-center">
				<a href="/">Home</a>

				<a href="/about">About</a>

				<a href="/contact">Contact</a>
			
				<button className="login-button">Login</button>
				<button className="signup-button">Sign Up</button>
			</div>
		
	);
}
