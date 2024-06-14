import React from "react";
import './footer.css';
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineInstagram} from 'react-icons/ai';
import { AiFillTwitterCircle} from 'react-icons/ai';
import { AiFillYoutube} from 'react-icons/ai';


const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Writing</FooterLink>
			<FooterLink href="#">Internships</FooterLink>
			<FooterLink href="#">Coding</FooterLink>
			<FooterLink href="#">Teaching</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Uttar Pradesh</FooterLink>
			<FooterLink href="#">Ahemdabad</FooterLink>
			<FooterLink href="#">Indore</FooterLink>
			<FooterLink href="#">Mumbai</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">

			<AiFillFacebook/>
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</FooterLink>
			<FooterLink href="#">
			<AiOutlineInstagram/>
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>

			</FooterLink>
			<FooterLink href="#">
			<AiFillTwitterCircle/>
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</FooterLink>
			<FooterLink href="#">
			<AiFillYoutube/>
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
