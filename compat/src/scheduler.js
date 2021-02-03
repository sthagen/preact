// This file includes experimental React APIs exported from the "scheduler"
// npm package. Despite being explicitely marked as unstable some libraries
// already make use of them. This file is not a full replacement for the
// scheduler package, but includes the necessary shims to make those libraries
// work with Preact.

export const unstable_ImmediatePriority = 1;
export const unstable_UserBlockingPriority = 2;
export const unstable_NormalPriority = 3;
export const unstable_LowPriority = 4;
export const unstable_IdlePriority = 5;

/**
 * @param {number} priority
 * @param {() => void} callback
 */
export function unstable_runWithPriority(priority, callback) {
	return callback();
}

export const unstable_now =
	typeof performance === 'object' && typeof performance.now === 'function'
		? performance.now.bind(performance)
		: () => Date.now();
