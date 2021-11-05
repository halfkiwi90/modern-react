import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
	const [currentPath, setCurrentPath] = useState(window.location.pathname);

	useEffect(() => {
		const onPathChange = window.addEventListener("popState", () => {
			setCurrentPath(window.location.pathname);
		});

		return () => {
			window.removeEventListener(onPathChange);
		};
	}, []);

	return currentPath === path ? children : null;
};

export default Route;
