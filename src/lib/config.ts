export const config = {
	kingdomName: 'ROK Manager',
	kingdomNumber: '2640',
	subtitle: 'Kingdom Management System',
	adminUsername: 'admin',
};

export function appTitle(page?: string): string {
	const base = config.kingdomNumber ? `${config.kingdomName} - KD ${config.kingdomNumber}` : config.kingdomName;
	return page ? `${page} - ${base}` : base;
}

export function navBrand(): string {
	return config.kingdomNumber ? `⚔️ ROK ${config.kingdomNumber}` : `⚔️ ${config.kingdomName}`;
}
