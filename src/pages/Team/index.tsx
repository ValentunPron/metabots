import React from 'react'
import styles from './Team.module.scss'

export const Team = (): JSX.Element => {

	React.useEffect(() => {
		document.body.scroll(0, 200);
	}, [])

	return (
		<div>
			<div className={styles.body_up}>
				<h2 className={styles.title}>Meet the minds behind medabots</h2>
				<p className={`${styles.text}`}>Crazy heads, electric minds, reckless neurons, these could be some pretty accurate descriptions of the team that created Medabots. At Comadran Studios the locomotive never stops, there is always fuel, do you feel like getting to know us a little bit more?</p>
			</div>
			<ul className={styles.list}>
				<li className={styles.item}>
					<h3 className={styles.work}>CEO</h3>
					<div className={styles.item_body}>
						<div className={styles.item_person}>
							<img src="https://medabots.game/wp-content/uploads/2022/02/kevincomadran-150.png" alt="person" />
							<h4 className={styles.name}>KEVIN COMADRAN</h4>
							<span className={styles.work_name}>CEO</span>
							<p className={styles.text}>Owner of Medabots and founder of Comadran Studios. Specifically, he is an economist with more than 8 years of experience in buying and selling firms, firm restructuring and the gaming industry.</p>
						</div>
					</div>
				</li>
				<li className={styles.item}>
					<h3 className={styles.work}>PRODUCTION</h3>
					<div className={`${styles.item_body} ${styles.grid}`}>
						<div className={`${styles.item_person} ${styles.item_big}`}>
							<img src="https://medabots.game/wp-content/uploads/2022/02/Paul-Sirats150.png" alt="person" />
							<h4 className={styles.name}>PAUL SIRATS</h4>
							<span className={styles.work_name}>Executive Producer</span>
							<p className={styles.text}>Senior concept artist and producer in the game and film industry. His technical prowess has brought him to design characters for the Mad Max and Star Citizen games in Canada, as well as for clients such as Coca Cola, Pepsi, and Amstel, among others.</p>
						</div>
						<div className={`${styles.item_person} ${styles.item2}`}>
							<img src="https://medabots.game/wp-content/uploads/2022/02/Yvonne_Comadran150.png" alt="person" />
							<h4 className={styles.name}>YVONNE COMADRAN</h4>
							<span className={styles.work_name}>Head on public relations</span>
							<p className={styles.text}>With a degree in journalism and advertising. Head of public relations and co-producer in Comadran Studios.</p>
						</div>
						<div className={`${styles.item_person} ${styles.item3}`}>
							<img src="https://medabots.game/wp-content/uploads/2022/02/paula-estevez150.png" alt="person" />
							<h4 className={styles.name}>PAULA ESTÉVEZ</h4>
							<span className={styles.work_name}>Producer</span>
							<p className={styles.text}>I started as an elementary school teacher but I’ve been slowly transitioning to production. This is my first time proving myself in the gaming industry and I just love it.</p>
						</div>
					</div>
				</li>
				<li className={styles.item}>
					<h3 className={styles.work}>art direction</h3>
					<div className={`${styles.item_body}`}>
						<div className={styles.item_person}>
							<img src="https://medabots.game/wp-content/uploads/2022/02/julen150.png" alt="person" />
							<h4 className={styles.name}>JULEN URRUTIA</h4>
							<span className={styles.work_name}>3d Artist</span>
							<p className={styles.text}>I’ve been working as both 2d and 3d artist for videogame cinematics like Destiny 2, Halo Infinite, Call of Duty, League of Legends among others. I’ve also worked for a couple of movies, like Space Jam 2 and some Netflix shows such as Love Death and Robots or Happy! . Most recently I’ve been working at Marvel Studios as concept artist for their Spider-Man show</p>
						</div>
						<div className={styles.item_person}>
							<img src="https://medabots.game/wp-content/uploads/2022/02/Xabier-Urrutia150.png" alt="person" />
							<h4 className={styles.name}>XABIER URRUTIA</h4>
							<span className={styles.work_name}>3d Artist</span>
							<p className={styles.text}>With years of experience as a character artist and modeler, he also works for the multi award winning Axis Studios.</p>
						</div>
						<div className={styles.item_person}>
							<img src="https://medabots.game/wp-content/uploads/2023/03/Carlos.png" alt="person" />
							<h4 className={styles.name}>CARLOS ORTIZ</h4>
							<span className={styles.work_name}>Concept Artist</span>
							<p className={styles.text}>Passionate concept artist, illustrator and 3D artist, mainly focused on character design. Gunpla enjoyer, video game connoisseur.</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
	)
}