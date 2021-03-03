import React from 'react';
import { Picture,Spinner,LockBody,ReleaseBody } from './styles/loading';

export default function Loading({ src, ...restProps }) {
    return (
        <Spinner {...restProps}>
            <LockBody />
            <Picture src={`/Images/users/${src}.png`} />
        </Spinner>
    )
}

Loading.ReleaseBody= function LoadingReleaseBody(){
    return <ReleaseBody/>
}