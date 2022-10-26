# react-query-camp
brief notes about React Query

## base-blog-em
- QueryClient and QueryProvider
- useQuery hook - to fetch the data from the server
   - isLoading, isFetching, error - helping to infor User about status of particular query
- staleTime - determine where data should be re-fetch on a certain trigger / how data is
- casheTime - how long to hold on data after inactivity
- query keys - name your data to allow track data changes
- Pagination
- Pre-Fetching
- Mutations - manipulations with data

## base-infinite-swapi
- Infinite Scroll example
- `pageParam` for next page to be fetched
    - `getNextPageParam` option
    - could be from `lastPage` or `allPages` depends on API structure
- `hasNextPage` boolean indicates when `pageParam` is undefined
- Component handles calling `fetchNextPage`
- use `hasNextPage` to determine when to stop

## lazy-days
