"use client";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle, title2, title3 } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Card, CardHeader, CardBody, CardFooter, Image, Button, Slider } from "@nextui-org/react";
import { use, useState } from "react";
import { Textarea } from "@nextui-org/react";

export default function Home() {
	const [inputText, setInputText] = useState("");

	const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setInputText(event.target.value);
	};

	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-1lg text-center justify-center w-full">
				<h1 className={title2({ size: "lg" })}>Your Personal&nbsp;</h1>
				<h1 className={title3({ color: "yellow", size: "lg" })}>Medical Bot &nbsp;</h1>
				<br />
				<h2 className={subtitle({ size: "sm" })}>Power of Medical Diagnosis&nbsp;</h2>
				<h2 className={subtitle({ size: "sm", color: "blue" })}>in a very fast and modern way.&nbsp;</h2>
			</div>
			<Card
				isBlurred
				radius="lg"
				className="Border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] w-full"
				shadow="lg"
			>
				<CardHeader></CardHeader>
				<CardBody>
					<div className="flex justify-center">
						<Image src="/images/aidm.png" width={600} height={200} alt="aidm" className="rounded-full" />
					</div>
				</CardBody>
				<CardFooter>
					<div className="max-w-[610px] w-full">
						<Textarea
							key="bordered"
							variant="bordered"
							label="Enter your Symptoms"
							labelPlacement="outside"
							radius="full"
							maxRows={2.4}
							value={inputText}
							
						/>
					</div>
				</CardFooter>
			</Card>
		</section>
	);
}
