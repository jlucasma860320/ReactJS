import ReactDOM from "react-dom";
import {QueryClient, QueryClientProvider} from "react-query"
import App from "./App";
import { ReactQueryDevtools } from 'react-query/devtools'


const queryClient = new QueryClient(
    /*{
        defaultOptions:{
            queries: {
                staleTime: 60000,
                cacheTime: 3000 
            }
        }
        
    } de este modo se hace de forma global para cada post*/
);

ReactDOM.render(
    <QueryClientProvider client={queryClient} >
        <App />
        <ReactQueryDevtools />
    </QueryClientProvider>
, document.getElementById("root"));
