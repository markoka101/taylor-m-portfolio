import type { CMSClient, CMSContent, CMSQuery, CMSResponse } from '../../hooks/useCMS';
import { mockProjects } from '../../utils/constants/mockCMSData';

export const mockCMSClient: CMSClient = {
	//This will fetch all
	fetch: async <T = CMSContent>(query: CMSQuery): Promise<CMSResponse<T>> => {
		await new Promise((resolve) => setTimeout(resolve, 200));
		let data: unknown[] = [];
		if (query.contentType === 'projects') data = mockProjects;
		// Add more contentTypes as needed (courses, images, etc.)
		return {
			data: data as T[],
			total: data.length,
			hasMore: false
		};
	},

	//This will fetch a specfic thing
	fetchOne: async <T = CMSContent>(contentType: string, id: string): Promise<T> => {
		await new Promise((resolve) => setTimeout(resolve, 100));
		if (contentType === 'projects') {
			const found = mockProjects.find((p) => p.title === id);
			if (found) return found as T;
		}
		throw new Error(`Content not found: ${contentType}/${id}`);
	},
	fetchBySlug: function <T = CMSContent>(contentType: string, slug: string): Promise<T> {
		throw new Error('Function not implemented.');
	}
};
