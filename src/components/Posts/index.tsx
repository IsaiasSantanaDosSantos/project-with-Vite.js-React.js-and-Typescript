import { Outlet, useParams, useSearchParams } from 'react-router-dom';
import './style.css';

export const Posts = ()=>{
    const params = useParams();
    const [qs]= useSearchParams()
    const { id } = params

    return (
        <div>
            <h1>Posts {`Params: ${id}`} { `QS: ${qs.get('page')}`} {`segundo: ${qs.get('segundo')}`}</h1>
            <Outlet />
        </div>
    )
};