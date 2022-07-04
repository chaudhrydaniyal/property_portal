import React, { useContext } from "react"
import Image from "next/image"

import TagList from "../TagList"
import Ribbon from "../Ribbon"
//
// import FontAwesomeIcon from "@fortawesome/react-fontawesome"

// import {
// 	faBed,
// 	 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceRelieved } from '@fortawesome/pro-solid-svg-icons'
import { faCoffee } from "@fortawesome/free-solid-svg-icons"

import s from "./Card.module.scss"
import { createShimmerImage } from "../../utils"
import { ThemeContext } from "../../contexts/ThemeContext"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faCheckSquare, faMugHot } from "@fortawesome/free-solid-svg-icons"

// library.add( faCheckSquare, faMugHot,faBed);

const Card = ({ card, onReadMore }) => {
	const isFeatured = featured => featured == "1"

	const { isDark } = useContext(ThemeContext)

	const { id, title, image, description, featured, tags } = card

	return (
		<div className="col-lg-4" data-item="card">
			<div className={`${s.scene} ${!isDark() ? "" : s["scene--dark"]}`}>
				<div>
					<div>
						<div className={s["card__image"]}>
							<Image
								src={image}
								alt={`Image ${id}`}
								layout="fill"
								placeholder="blur"
								blurDataURL={createShimmerImage(400, 300)}
							/>
						</div>
						<div className={s["card__body"]}>
							<h2 className={s["card__title"]} style={{ textAlign: "left" }}>
								{title}
							</h2>
							<p className={s["card__description"]}>location</p>
							<div>
								{/* <FontAwesomeIcon icon={faCoffee} /> */}
							</div>
						</div>
						{isFeatured(featured) && <Ribbon />}
					</div>
					<div className={`${s["card__face"]} ${s["card__face--back"]}`}>
						<div className={s["card__body"]}>
							<h2 className={s["card__title"]}>{id}</h2>
							<TagList tags={tags} />

							<a
								className={s["card__readmore"]}
								onClick={() => onReadMore(card)}
							>
								Read more...
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Card
