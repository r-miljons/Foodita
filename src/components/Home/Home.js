import { React } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import foodita from "../../assets/homePage/foodita.svg";
import restaurantImg from "../../assets/homePage/restaurant.jpg";
import staffImg from "../../assets/homePage/staff.jpg";
import "./home.css";

export function Home() {
	const navigate = useNavigate();

	const goToMenu = () => {
		navigate("/menu");
	};

	return (
		<div className="home-container">
			<header className="hero">
				<img className="logo" src={foodita} alt="foodita-logo" />
				<h1 className="hero-title">
					Order food online,
					<br />
					enjoy anywhere you want to!
				</h1>
				<button className="green-button home-button" onClick={goToMenu}>
					View Menu
				</button>
			</header>
			<section className="restaurant">
				<div className="restaurant-text">
					<h2>Visit Us!</h2>
					<p>
						Foodita is a local restaurant in Riga, Latvia that serves up great
						food made by the best people in the industry. You can choose to
						order food from our website and have it delivered to you or enjoy it
						in our cozy restaurant. With live music in the evenings, Foodita is
						the perfect place to enjoy a meal.
					</p>
					<button className="green-button locations">See Location</button>
				</div>
				<img
					className="restaurant-img"
					src={restaurantImg}
					alt="restaurant-img"
				/>
			</section>
			<section className="staff">
				<img className="staff-img" src={staffImg} alt="staff-img" />
				<div className="staff-text">
					<h2>Join Us!</h2>
					<p>
						We have assembled the best people from all over the world to provide
						you with the best restaurant experience. Our team is always willing
						to learn and grow together. Join us today and start a journey of a
						lifetime!
					</p>
					<button
						className="green-button apply"
						onClick={() => {
							navigate("/careers");
						}}
					>
						Apply
					</button>
				</div>
			</section>
			<Footer />
		</div>
	);
}
