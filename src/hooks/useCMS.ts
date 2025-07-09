import { useCallback, useEffect, useState } from 'react';

// Generic CMS type,  can be adapted to any CMS provider
export interface CMSContent {
	id: string;
	title: string;
	slug: string;
	content: unknown;
	metadata: Record<string, unknown>;
	createdAt: string;
	updatedAt: string;
	published: boolean;
}

export interface CMSQuery {
	contentType: string;
	filters?: Record<string, unknown>;
	sort?: string;
	limit?: number;
	offset?: number;
}

export interface CMSResponse<T = CMSContent> {
	data: T[];
	total: number;
	hasMore: boolean;
}

export interface CMSState<T = CMSContent> {
	data: T[];
	loading: boolean;
	error: string | null;
	total: number;
	hasMore: boolean;
}

// Abstract CMS client interface. Will change once settled on CMS
export interface CMSClient {
	fetch: <T = CMSContent>(query: CMSQuery) => Promise<CMSResponse<T>>;
	fetchOne: <T = CMSContent>(contentType: string, id: string) => Promise<T>;
	fetchBySlug: <T = CMSContent>(contentType: string, slug: string) => Promise<T>;
}

// Mock CMS client for development
const mockCMSClient: CMSClient = {
	fetch: async <T = CMSContent>(query: CMSQuery): Promise<CMSResponse<T>> => {
		// Simulate API delay
		await new Promise((resolve) => setTimeout(resolve, 500));
		return {
			data: [] as T[],
			total: 0,
			hasMore: false
		};
	},

	fetchOne: async <T = CMSContent>(contentType: string, id: string): Promise<T> => {
		await new Promise((resolve) => setTimeout(resolve, 300));
		throw new Error(`Content not found: ${contentType}/${id}`);
	},

	fetchBySlug: async <T = CMSContent>(contentType: string, slug: string): Promise<T> => {
		await new Promise((resolve) => setTimeout(resolve, 300));
		throw new Error(`Content not found: ${contentType}/${slug}`);
	}
};

// Main CMS hook
export function useCMS<T = CMSContent>(query: CMSQuery, client: CMSClient = mockCMSClient) {
	const [state, setState] = useState<CMSState<T>>({
		data: [],
		loading: true,
		error: null,
		total: 0,
		hasMore: false
	});

	const refetch = useCallback(async () => {
		setState((prev) => ({ ...prev, loading: true, error: null }));

		try {
			const response = await client.fetch<T>(query);
			setState({
				data: response.data,
				loading: false,
				error: null,
				total: response.total,
				hasMore: response.hasMore
			});
		} catch (error) {
			setState((prev) => ({
				...prev,
				loading: false,
				error: error instanceof Error ? error.message : 'Failed to fetch content'
			}));
		}
	}, [query, client]);

	useEffect(() => {
		refetch();
	}, [refetch]);

	return { ...state, refetch };
}

// Hook for fetching a single content item
export function useCMSContent<T = CMSContent>(
	contentType: string,
	id: string,
	client: CMSClient = mockCMSClient
) {
	const [state, setState] = useState<{
		data: T | null;
		loading: boolean;
		error: string | null;
	}>({
		data: null,
		loading: true,
		error: null
	});

	const refetch = useCallback(async () => {
		setState({ data: null, loading: true, error: null });

		try {
			const data = await client.fetchOne<T>(contentType, id);
			setState({ data, loading: false, error: null });
		} catch (error) {
			setState({
				data: null,
				loading: false,
				error: error instanceof Error ? error.message : 'Failed to fetch content'
			});
		}
	}, [contentType, id, client]);

	useEffect(() => {
		if (id) {
			refetch();
		}
	}, [refetch, id]);

	return { ...state, refetch };
}

// Hook for fetching content by slug
export function useCMSContentBySlug<T = CMSContent>(
	contentType: string,
	slug: string,
	client: CMSClient = mockCMSClient
) {
	const [state, setState] = useState<{
		data: T | null;
		loading: boolean;
		error: string | null;
	}>({
		data: null,
		loading: true,
		error: null
	});

	const refetch = useCallback(async () => {
		setState({ data: null, loading: true, error: null });

		try {
			const data = await client.fetchBySlug<T>(contentType, slug);
			setState({ data, loading: false, error: null });
		} catch (error) {
			setState({
				data: null,
				loading: false,
				error: error instanceof Error ? error.message : 'Failed to fetch content'
			});
		}
	}, [contentType, slug, client]);

	useEffect(() => {
		if (slug) {
			refetch();
		}
	}, [refetch, slug]);

	return { ...state, refetch };
}
