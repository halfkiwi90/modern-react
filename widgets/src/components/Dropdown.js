import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ selected, onSelectChange, options, label }) => {
	const [open, setOpen] = useState(false);
	const ref = useRef();

	useEffect(() => {
		const onSelectClick = (e) => {
			if (ref.current.contains(e.target)) {
				return;
			} else {
				setOpen(false);
			}
		};

		document.body.addEventListener("click", onSelectClick, { capture: true });

		return () => {
			document.body.removeEventListener("click", onSelectClick, {
				capture: true,
			});
		};
	}, []);

	const renderedOptions = options.map((option) => {
		if (selected === option) {
			return null;
		}
		return (
			<div
				onClick={() => onSelectChange(option)}
				key={option.value}
				className="item"
			>
				{option.label}
			</div>
		);
	});

	return (
		<div ref={ref} className="ui form">
			<div className="field">
				<label className="label">{label}</label>
				<div
					onClick={() => setOpen(!open)}
					className={`ui selection dropdown ${open ? "visible active" : ""}`}
				>
					<i className="dropdown icon"></i>
					<div className="text">{selected.label}</div>
					<div className={`menu ${open ? "visible transition" : ""}`}>
						{renderedOptions}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
