import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import { useNavigate, useLocation } from 'react-router-dom';

function Home() {

	const navigate = useNavigate();
	const onSubmit = (e) => {
		e.preventDefault();
		if (username === "admin@gmail.com" && password === "letmein") {
			navigate('/profile', { state: { email: username } })
		}
	}

	const [username, setUsername] = useState('')
	const usernameChangeHandler = (e) => {
		setUsername(e.target.value);
	}
	const [password, setPassword] = useState('')
	const passwordChangeHandler = (e) => {
		setPassword(e.target.value);
	}


	return (
		<div>
			<h1>
				Login
			</h1>
			<div> admin@gmail.com - letmein </div>
			<form onSubmit={onSubmit}>
				<div>Email:</div>
				<div>
					<input value={username} onChange={usernameChangeHandler} type="text"/>
				</div>
				<div>password:</div>
				<div>
					<input value={password} onChange={passwordChangeHandler} type="password"/>
				</div>
				<button type="submit">
					Login
				</button>
			</form>
		</div>
	)
}

function Profile() {
	const location = useLocation();
	const { email } = location.state;
	return (
		<>
			<h1>
				Profile
			</h1>
			<div>
				{email}
			</div>
		</>
	)
}

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home/>

	},
	{
		path: "/profile",
		element: <Profile/>

	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}/>
	</React.StrictMode>,
)
