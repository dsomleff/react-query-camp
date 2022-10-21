import './App.css';
import {QueryClient, QueryClientProvider} from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';

import { InfinitePeople } from './people/InfinitePeople';
import { InfiniteSpecies } from './species/InfiniteSpecies';

function App() {
    return (
        <QueryClientProvider client={QueryClient}>
        <div className="App">
            <h1>Infinite SWAPI</h1>
            <InfinitePeople />
            {/* <InfiniteSpecies /> */}
            <ReactQueryDevtools/>
        </div>
    </QueryClientProvider>
    );
}

export default App;