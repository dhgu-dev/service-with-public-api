export default function debounce(callback: Function, timeout = 500) {
	let timer: NodeJS.Timeout;
	return (...arg: any[]) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			callback(...arg);
		}, timeout);
	};
}
