import { useParams, useSearchParams } from 'react-router-dom';
import './style.css';

export const Post = ()=>{
    const params = useParams();
    const [qs]= useSearchParams()
    

    const { id } = params
    return (
        <div>
            <h1>Post {`Params: ${id}`} { `QS: ${qs.get('page')}`} {`segundo: ${qs.get('segundo')}`}</h1>
        </div>
    )
};