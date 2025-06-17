import { create } from 'zustand';
import { Search, SearchAvailable, SearchMonthly } from '../interfaces/app.interface';
import * as SearchUseCase from '../core/use-cases/search';

export interface SearchState {
  search: Search;
  searchAvailable: SearchAvailable[],
  searchMonthly: SearchMonthly[],
  getSearchLogs: (year: number, month: number, placeId: string) => Promise<Search>;
  getSearchLogsAvailable: (placeId: string) => Promise<SearchAvailable[]>;
  getSearchLogsMonthly: (year: string, month: string, placeId: string) => Promise<SearchMonthly[]>;
}

export const useSearchStore = create<SearchState>()((set) => ({
  search: {
    keywords: [],
    total: 0,
  },
  searchAvailable: [],
  searchMonthly: [],
  getSearchLogs: async (year: number, month: number, placeId: string) => {
    const response = await SearchUseCase.getSearch(year, month, placeId);

    if (!response) {
      const emptyResponse: Search = { keywords: [], total: 0 };
      set({ search: emptyResponse });
      return emptyResponse;
    }

    set({ search: response });

    return response;
  },
  getSearchLogsAvailable: async (placeId: string) => {
    const response = await SearchUseCase.getSearchAvailable(placeId);

    let normalizedResponse: SearchAvailable[] = [];

    if (!response) {
      normalizedResponse = [{ year: 0, months: [{ month: 0, name: '' }] }];
    } else if (Array.isArray(response)) {
      normalizedResponse = response;
    } else {
      normalizedResponse = [response];
    }

    set({ searchAvailable: normalizedResponse });

    return normalizedResponse;
  },
  getSearchLogsMonthly: async (year: string, month: string, placeId: string) => {
    const response = await SearchUseCase.getSearchMonthly(year, month, placeId);

    let normalizedResponse: SearchMonthly[] = [];

    if (!response) {
      normalizedResponse = [{ count: 0, keywords: [], week: '' }];
    } else if (Array.isArray(response)) {
      normalizedResponse = response;
    } else {
      normalizedResponse = [response];
    }

    set({ searchMonthly: normalizedResponse });

    return normalizedResponse;
  },
}));
