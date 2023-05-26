import Image from "next/image";

async function getData() {
	const response = await fetch("https://rickandmortyapi.com/api/character/2");
	return response.json();
}
export default async function Home() {
	const data = await getData();

	return (
		<>
			<div className="login">Login</div>
			<Image width={100} height={100} src={data.image} alt={data.name} />
		</>
	);
}
