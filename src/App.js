import { Fragment } from "react";
import {
	FaGlobe,
	FaGraduationCap,
	FaThumbsUp,
	FaGrav,
} from "react-icons/fa";
import {
	INFO,
	EDUCATION,
	SKILLS,
	LANGUAGES,
	INTERESTS,
	EXPERIENCES,
} from "./constants";

function App() {
	const personalInfo = () => {
		return (
			<section className="block border-box">
				<h3>Personal Info</h3>
				<ul className="mt-3 info">
					<li>
						<span>Birthdate</span> : {INFO.BIRTHDAY}
					</li>
					<li>
						<span>Phone</span> : {INFO.PHONE}
					</li>
					<li>
						<span>Email</span> : {INFO.EMAIL}
					</li>
					<li>
						<span>Skype</span> : {INFO.SKYPE}
					</li>
					<li>
						<span>Freelance</span> :{" "}
						{INFO.FREELANCER ? "Available" : "Not Available"}
					</li>
					<li>
						<span>Adress</span> : {INFO.ADDRESS}
					</li>
				</ul>
			</section>
		);
	};

	const education = () => {
		return (
			<section className="block border-box">
				<h3>Education</h3>
				<div className="block-icon">
					<FaGraduationCap />
				</div>

				<div className="timeline mt-3">
					{EDUCATION.map((edu, idx) => (
						<div key={idx} className="time">
							<div className="hgroup mb-3">
								<h4>{edu.title}</h4>
								<h6>{edu.time}</h6>
							</div>
							<p>{edu.description}</p>
						</div>
					))}
				</div>
			</section>
		);
	};

	const skills = () => {
		return (
			<section className="block border-box">
				<h3>Skills</h3>
				<div className="block-icon">
					<FaGrav />
				</div>

				<div className="skills mt-3">
					<ul>
						{Object.keys(SKILLS).map((key) => {
							const value = SKILLS[key];
							return (
								<li key={key}>
									<h4>{key}</h4>
									<div className="rating">
										{[...Array(5).keys()].map(
											(key, index) => {
												return (
													<span
														key={key}
														className={
															index + 1 > value
																? "transparent"
																: ""
														}
													></span>
												);
											}
										)}
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</section>
		);
	};

	const languages = () => {
		return (
			<section className="block border-box">
				<h3>Languages</h3>
				<div className="block-icon">
					<FaGlobe />
				</div>

				<div className="skills mt-3">
					<ul>
						{Object.keys(LANGUAGES).map((key) => {
							const value = LANGUAGES[key];
							return (
								<li key={key}>
									<h4>{key}</h4>
									<div className="rating">
										{[...Array(5).keys()].map(
											(key, index) => {
												return (
													<span
														key={key}
														className={
															index + 1 > value
																? "transparent"
																: ""
														}
													></span>
												);
											}
										)}
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</section>
		);
	};

	const interests = () => {
		return (
			<section className="block border-box rm-b">
				<h3>Interests</h3>
				<div className="block-icon">
					<FaThumbsUp />
				</div>
				<div className="hobbies mt-4">
					<ul>
						{INTERESTS.map((i, idx) => (
							<Fragment key={idx}>
								<li>
									<span>{i.icon}</span>
									<h6>{i.label}</h6>
								</li>
							</Fragment>
						))}
					</ul>
				</div>
			</section>
		);
	};

	const summary = () => {
		return (
			<section>
				<div className="block border-box">
					<h3>Summary</h3>
					<p className="mt-3 summary">
						Having 5 years of experiences in Web/ Mobile
						development. I'm a creative, hardworking, enthusiastic,
						ambitious and able to work under high pressure.
						<br></br>I'm passionate about new technology and
						professional work environment. My focus in on trying to
						learn as much as possible and doing my best in order to
						accomplish assigned task, supporting my team members,
						research and apply new technologies effectively.
					</p>
				</div>
			</section>
		);
	};

	const workExperiences = () => {
		return (
			<section className="block">
				<h3>Work Experiences</h3>
				<div className="work-experiences mt-4">
					{EXPERIENCES.map((exp, idx) => (
						<div key={idx} class="listing-content">
							<h6 className="exp-date">{exp.date}</h6>
							<h6 className="exp-title">{exp.title}</h6>
							<p className="tag">{exp.responsibility}</p>
							<p className="mt-3">{exp.description}</p>
							<div>
								{exp.techs.map((t, ind) => (
									<span className="tag" key={ind}>
										{t}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</section>
		);
	};

	return (
		<div className="main">
			<header className="header">
				<div className="name">
					<h2>Y Pham</h2>
					<span>Senior Software Developer</span>
				</div>
				<div className="avatar"></div>
			</header>

			<main className="d-flex">
				<div className="left f-1">
					{personalInfo()}
					{education()}
					{skills()}
					{languages()}
					{interests()}
				</div>

				<div className="right f-2">
					{summary()}
					{workExperiences()}
				</div>
			</main>
		</div>
	);
}

export default App;
