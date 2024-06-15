import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

function CommonForm({
	action,
	buttonText,
	isBtnDisabled,
	formControls,
	isBtnDisabled,
	btnType,
	formData,
	setFormData,
}) {
	function renderInputByComponentType(getCurrentControl) {
		let content = null;
		switch (getCurrentControl.componentType) {
			case "input":
				content = (
					<div className="relative flex items-center mt-8">
						<Input
							type="text"
							disabled={getCurrentControl.disabled}
							placeholder={getCurrentControl.placeholder}
							name={getCurrentControl.name}
							id={getCurrentControl.id}
							value={formData[getCurrentControl.name]}
							onchange={(event) =>
								setFormData({
									...formData,
									[event.target.name]: event.target.value,
								})
							}
							className="w-full rounded-md h-[60px] px-4 border bg-gray-100 text-lg outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 "
						/>
					</div>
				);
				break;


                case "file" :
                    content = <Label>
                        <h2>{getCurrentControl.Label}</h2>
                    </Label>

			default:
				break;
		}
	}

	return (
		<form action={action}>
			{formControls.map((control) => renderInputByComponentType(control))}
			<div className="mt-6 w-full">
				<Button
					type={btnType || "submit"}
					className="disabled:opacity-60 flex h-11 items-center justify-center px-5"
					disabled={isBtnDisabled}
				>
					{buttonText}
				</Button>
			</div>
		</form>
	);
}

export default CommonForm;
