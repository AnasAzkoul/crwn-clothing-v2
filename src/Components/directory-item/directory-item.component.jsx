import React from "react";
import { useNavigate } from "react-router-dom";

import { DirectoryItemContainer, BackgroundImage, Body} from './directory-item.styles'; 


const DirectoryItem = ({ category }) => {
	const { title, imageUrl, route } = category; 

	const navigate = useNavigate(); 

	const navigateHandler = () => {
		navigate(route)
	}

	return (
		<DirectoryItemContainer onClick={navigateHandler}>
			<BackgroundImage imageUrl={imageUrl}/>
			<Body>
				<h2>{title.toUpperCase()}</h2>
				<p>SHOP NOW</p>
			</Body>
		</DirectoryItemContainer>
	)
}

export default DirectoryItem; 