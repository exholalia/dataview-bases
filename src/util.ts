import { getAPI, DataviewApi } from "obsidian-dataview";
// import getAPI from "obsidian-dataview"

export function getTasks(filename: string, showCompleted: boolean): DataviewApi.TaskResult {
	const api = getAPI();
	if (!api) {
		console.warn("Dataview API not available");
		return [];
	}
	const page = api.page(filename) as DataviewApi.PageResult;
	if (!page) {
		console.warn(`No page found for filename: ${filename}`);
		return []; // TODO: Handle missing page better?
	}

	const tasks = page.file.tasks;
	if (!showCompleted) {
		// @ts-ignore
		return tasks.where(t => !t.completed);
	}

	return tasks;
}