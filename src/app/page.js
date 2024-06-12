import Image from "next/image";
import Job from "./comlpnents/job";
import Employee from "./comlpnents/employee";

export default function Home() {
	return (
		<div>
			<Job />
			<Employee />
		</div>
	);
}
